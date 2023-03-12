import React, { useContext, useEffect } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../ComponentIndex";
import images from "../../Img";

//SMART CONTRACT IMPORT
import { NFTMarketPlaceContext } from "../../Context/NFTMarketPlaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketPlaceContext);

  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>{titleData} </h1>
          <p>
            Discover the most outstanding NFTs in all topic, buy and sell your
            NFTs
          </p>
          <Button btnName="Start your search" />
        </div>

        <div className={Style.heroSection_box_right}>
          <Image
            className={Style.heroSection_box_right_image}
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
