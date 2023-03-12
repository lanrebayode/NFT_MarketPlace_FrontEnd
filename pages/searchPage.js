import React from "react";
import { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Brand, Slider } from "../Components/ComponentIndex.js";
import SearchBar from "../SearchPage/SearchBar/SearchBar.jsx";
import { Filter } from "../Components/ComponentIndex.js";
import NFTCardtwo from "../collectionPage/NFTCardtwo/NFTCardtwo";
import { Banner } from "../collectionPage/collectionIndex";
import images from "../Img";

//SMART CONTRACT IMPORT
import { NFTMarketPlaceContext } from "../Context/NFTMarketPlaceContext";

const searchPage = () => {
  const { fetchNFT } = useContext(NFTMarketPlaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFT().then((item) => {
      setNfts(item.reverse());
      setNftsCopy(item);
    });
  }, []);
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar />
      <Filter />
      <NFTCardtwo NFTData={nfts} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
