import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialnstagram,
  TiArrowSortedDown,
  TiArrowSorteUp,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMORT
import Style from "./Footer.module.css";
import images from "../../Img";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="footer logo" height={100} width={100} />
          <p>
            The world first and largest digital marketplace for the collectibles
            and non-fungible tokens(NFTs). Buy, sell, and own exclusive digital
            items.
          </p>
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discver</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.susscribe_box_send} />
          </div>
          <div className={Style.subscibe_box_info}>
            <p>
              The world first and largest digital marketplace for the
              collectibles and non-fungible tokens(NFTs). Buy, sell, and own
              exclusive digital items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
