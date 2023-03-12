//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;

//INTERNAL IMPORT FOR NFT OPENZIPLINE
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarketPlace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds; //Every NFF will have unique ID
    Counters.Counter private _itemSold; //Tracking every token getting sold

    uint256 public listingPrice = 0.0015 ether; //initial isting prie

    address payable owner; //Owner of this COntract which is the deployer's address

    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
        bool sold;
    }

    event idMarketItemCreated(
        uint256 indexed tokenId,
        address owner,
        address seller,
        uint256 price,
        bool sold
    );

    constructor() ERC721("NFT Metaverse Token", "MYNFT") {
        owner == payable(msg.sender); //setting the owner as the contract deplyer
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "This is restricted only to the MarketPlace Admin"
        );
        _;
    }

    //to update listing price, what must be done only by the owner
    function updateListingPrice(uint256 _listingPrice) public payable {
        listingPrice = _listingPrice;
    }

    //to get listing price
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    // Creating NFT TOKEN FUNCTION

    function createToken(string memory tokenURI, uint256 price)
        public
        payable
        returns (uint256)
    {
        _tokenIds.increment(); //to increase tokenIdsCount

        uint256 newTokenId = _tokenIds.current(); //to get the present tokenId from the current count

        _mint(msg.sender, newTokenId); //function from ERC721
        _setTokenURI(newTokenId, tokenURI); //function from ERC721

        createMarketItem(newTokenId, price);

        return newTokenId;
    }

    //CREATING MARKET_ITEM

    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price cannot be 0");
        require(
            msg.value >= listingPrice,
            "insufficients funds for transaction"
        );

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        //transfering token(NFT) to the MarketPlace Contract
        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    //FUNCTION FOR RE-SALE
    function resaleToken(uint256 tokenId, uint256 price) public payable {
        require(
            idMarketItem[tokenId].owner == msg.sender,
            "Only Item owner can perform this operation"
        );
        require(
            msg.value >= listingPrice,
            "insufficient funds for transaction"
        );

        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        //sale of nft increases _itenSold count,
        //re-sale of an nft decreases the count
        _itemSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    //FUNCTION CREATEMARKETSALE

    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = idMarketItem[tokenId].price;

        require(
            msg.value == price,
            "your balance is lower that the asking price"
        );

        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].owner = payable(address(0));

        _itemSold.increment();

        //transfering ownership to the buyer
        _transfer(address(this), msg.sender, tokenId);

        //transfering listing price to the market_creator
        payable(owner).transfer(listingPrice);

        //transferring the remaining balance to the previous owner of the nft
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }

    //GETTING UNSOLD NFT DATA
    function fetchMarketItem() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = _tokenIds.current() - _itemSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (idMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1; //geting the array index of the unsold item in idMarketItem array(d whole nfts)

                MarketItem storage currentItem = idMarketItem[currentId]; //getting the particulr item out
                items[currentIndex] = currentItem; //adding the usold item to the ulsold items array at the idex starting from zero which it was initialized with
                currentIndex += 1;
            }
        }
        return items;
    }

    //FETHING PURCHASED NFTS
    function fetchMyNFT() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0; //total count of token/nft owned by particular address
        uint256 currentIndex = 0;

        //looping over the whole nft/token to know how many nfts the address has
        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i > itemCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;

                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //SINGLE USER ITEM TO DISPLAY INFO AOUT NFT INDIVIDUALLY
    function fetctItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currnetIndex = 0;

        for (uint256 i = 0; i > totalCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;

                MarketItem storage currentItem = idMarketItem[currentId];
                items[currnetIndex] = currentItem;
                currnetIndex += 1;
            }
        }
        return items;
    }
}
