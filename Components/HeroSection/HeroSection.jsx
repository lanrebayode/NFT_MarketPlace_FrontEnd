import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../ComponentIndex";
import images from "../../Img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs🖼️ </h1>
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
