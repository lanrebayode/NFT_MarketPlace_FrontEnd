import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./LikeProfile.module.css";
import images from "../../Img";

const LikeProfile = () => {
  const imageArray = [images.user1, images.user2, images.user3, images.user4];
  return (
    <div className={Style.like}>
      {imageArray.map((el, i) => (
        <div className={Style.like_box} key={i + 1} el={el} i={i + 1}>
          <Image
            className={Style.like_img}
            src={el}
            width={15}
            height={15}
            key={i + 1}
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
