import React from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../Img";
import {
  Banner,
  CollectionProfile,
  NFTCardtwo,
} from "../collectionPage/collectionIndex";
import { Slider, Brand } from "../Components/ComponentIndex";
import { Filter } from "../Components/ComponentIndex";

const CollectionPage = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardtwo NFTData={collectionArray} />

      <Slider />
      <Brand />
    </div>
  );
};

export default CollectionPage;
