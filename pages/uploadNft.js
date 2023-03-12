import React, { useState, useContext, useEffect } from "react";

//INTERNAL IMPORT
import Style from "../styles/uploadNft.module.css";
import UploadNFT from "../UploadNFT/UploadNFT";

//SMART CONTRACT IMPORT
import { NFTMarketPlaceContext } from "../Context/NFTMarketPlaceContext";

const uploadNft = () => {
  const { uploadToIPFS, createNFT } = useContext(NFTMarketPlaceContext);
  return (
    <div className={Style.uploadNft}>
      <div className={Style.uploadNft_box}>
        <div className={Style.uploadNft_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preferred display name, create your profile and manage
            other personal settings.
          </p>
        </div>

        <div className={Style.uploadNft_box_title}>
          <h2>Image, Video, Audio, or 3D Model</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, GLB, GLTF. Max
            size: 100MB
          </p>
        </div>

        <div className={Style.uploadNft_box_form}>
          <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT} />
        </div>
      </div>
    </div>
  );
};

export default uploadNft;
