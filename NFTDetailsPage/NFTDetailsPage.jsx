import React from "react";

//INTERNAL IMPORT
import Style from "./NFTDetailsPage.module.css";
import { NFTDetailsImg, NFTTabs, NFTDescription } from "./NFTDetailsIndex";

export const NFTDetailsPage = () => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImg />
        <NFTDescription />
      </div>
    </div>
  );
};
