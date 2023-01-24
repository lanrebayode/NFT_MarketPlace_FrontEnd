import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../Img";

const DaysComponents = () => {
  return (
    <div className={Style.daysComponents}>
      <div className={Style.daysComponents_box}>
        <div className={Style.daysComponents_box_img}>
          <Image
            className={Style.daysComponents_box_img_img}
            src={images.creatorbackground1}
            alt="profile background"
            width={450}
            height={300}
            objectFit="covers"
          />
        </div>
        <div className={Style.daysComponents_box_profile}>
          <Image
            className={Style.daysComponents_box_img_1}
            src={images.creatorbackground2}
            alt="profile background"
            width={150}
            height={150}
            objectFit="covers"
          />
          <Image
            className={Style.daysComponents_box_img_2}
            src={images.creatorbackground2}
            alt="profile background"
            width={150}
            height={150}
            objectFit="covers"
          />
          <Image
            className={Style.daysComponents_box_img_3}
            src={images.creatorbackground2}
            alt="profile background"
            width={150}
            height={150}
            objectFit="covers"
          />
        </div>

        <div className={Style.daysComponents_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponents_box_title_info}>
            <div className={Style.daysComponents_box_title_info_profile}>
              <Image
                className={Style.daysComponents_box_title_info_profile_img}
                src={images.user1}
                alt="profile"
                width={30}
                height={30}
              />
              <p>
                Creator{" "}
                <span>
                  Olanrewaju{" "}
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>
            <div className={Style.daysComponents_box_title_info_price}>
              <small>1.255 Eth</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
