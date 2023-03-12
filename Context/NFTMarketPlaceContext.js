import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import Router, { useRouter } from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

//const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

//SETTING IPFS VRIABLES
const projectId = "2LWUEG6JFlknkH2Ve2z4qZeLT7D";
const projectSecretKey = "5effcb36f69f0ac5bf8e2f14ce764b78";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;

const subdomain = "lanre-nft-marketplace.infura-ipfs.io";

//IPFS CLIENT
const client = ipfsHttpClient({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

//INTERNAL IMPORT
import { NFTMarketPlaceAddress, NFTMarketPlaceABI } from "./constants";

//----FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketPlaceAddress,
    NFTMarketPlaceABI,
    signerOrProvider
  );

//CONNECTING WITH SMART CONTRACT
const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    console.log(contract);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting the contract");
  }
};

//Using Context to make SC functions available to every part of the App
export const NFTMarketPlaceContext = React.createContext();

export const NFTMarketPlaceProvider = ({ children }) => {
  const titleData = "Discover, collect, and sell NFTs🖼️";

  //---USESTATE
  const [currentAccount, setCurrentAccount] = useState("");
  const router = useRouter();

  //---CHECK IF WALLET IS CONNECTED
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.lenght) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No Account Found");
      }
      console.log(currentAccount);
    } catch (error) {
      console.log("Something went wrong while trying to connect wallet");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  //---CONNECT WALLET FUNCTION
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      console.log("connected");
      // window.location.reload(); //to refresh page
    } catch (error) {
      console.log("Something went wrong while trying to connect wallet");
    }
  };

  //---UPLOAD TO IPFS FUNCTION
  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file }); //to generate file hash unique to the file
      const url = `https://${subdomain}/ipfs/${added.path}`; //to turn hash into infura file link
      return url;
    } catch (error) {
      console.log("Error Uploading to IPFS", error);
    }
  };

  //--CREATE-NFT FUNCTION
  const createNFT = async (
    name,
    price,
    image,
    description,
    fileUrl,
    router
  ) => {
    //checking for data
    if (!name || !description || !price || !image)
      return console.log("Data is missing");

    const data = JSON.stringify({ name, description, image: fileUrl });
    try {
      const added = await client.add(data);
      const url = `https://infura-ipfs.io/ipfs/${added.path}`;

      await createSale(url, price);
    } catch (error) {
      console.log("Could not add file", error);
      console.log(name, price, description, image);
    }
  };

  //Updating ListingPrice
  // const setListingPrice = async (lisingPrice) => {
  //   try {
  //     const price = ethers.utils.parseUnits(lisingPrice, "ether");
  //     const contract = await connectingWithSmartContract();
  //     const tracnsaction = await contract.updateListingPrice(price);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //---CREATE-SALE FUNCTION
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();
      console.log(contract);
      //interacting with the smart contract
      const listingPrice = await contract.getListingPrice();
      console.log("listingPrice", listingPrice);

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resaleToken(url, price, {
            value: listingPrice.toString(),
          });
      await transaction.wait(); //to wait till the transaction is done on the blockchain
      console.log(transaction);
      console.log(url);
      console.log("Price:", price);
      router.push("/searchPage");
    } catch (error) {
      console.log("Error while creating sale", error);
    }
  };

  //---FETCHNFTS FUNCTION
  const fetchNFT = async () => {
    try {
      //getting the provider so that the SC will be related with
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);

      const data = await contract.fetchMarketItem();
      console.log(data);

      //since data will come in form of promise it has to be resolved to get the real data
      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );
      console.log(items);
      return items;
    } catch (error) {
      console.log("Error while fethcing NFT's", error);
    }
  };

  // useEffect(() => {
  //   fetchNFT();
  // }, []);

  //---FETCH MY NFT OR LISTED NFTs
  const fetchMyNFTsorListedNFTs = async (type) => {
    try {
      //load SC
      const contract = await connectingWithSmartContract();
      //load NFT based on type
      const data =
        type == "fetchItemsListed"
          ? await contract.fetctItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, owner, seller, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              description,
              name,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      console.log("Error while fetching NFT data");
    }
  };

  //---BUY NFTs FUNCTION
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

      const tracnsaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });
      await tracnsaction.wait();
    } catch (error) {
      console.log("Error while trying to buy NFT");
    }
  };

  return (
    <NFTMarketPlaceContext.Provider
      value={{
        titleData,
        currentAccount,
        checkIfWalletConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        createSale,
        fetchNFT,
        fetchMyNFTsorListedNFTs,
        buyNFT,
      }}
    >
      {children}
    </NFTMarketPlaceContext.Provider>
  );
};
