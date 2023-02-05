import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";

//INTERNAL IMPORTS
import Style from "./NFTCardtwo.module.css";
import { LikeProfile } from "../../Components/ComponentIndex";

const NFTCardtwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };
  return (
    <div className={Style.NFTCardtwo}>
      {NFTData.map((el, i) => (
        <div className={Style.NFTCardtwo_box} key={i + 1}>
          <div className={Style.NFTCardtwo_box_like}>
            <div className={Style.NFTCardtwo_box_like_box}>
              <div className={Style.NFTCardtwo_box_like_box_box}>
                <BsImage className={Style.NFTCardtwo_box_like_box_box_icon} />
                <p onClick={() => likeNFT()}>
                  {like ? <AiOutlineHeart /> : <AiFillHeart />}
                  <span>{likeInc + 1}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCardtwo_box_img}>
            <Image
              className={Style.NFTCardtwo_box_img_img}
              src={el}
              alt="NFT"
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>

          <div className={Style.NFTCardtwo_box_info}>
            <div className={Style.NFTCardtwo_box_info_left}>
              <LikeProfile />
              <p>Clone #{i + 1}</p>
            </div>
            <small>4{i + 2}</small>
          </div>

          <div className={Style.NFTCardtwo_box_price}>
            <div className={Style.NFTCardtwo_box_price_box}>
              <small>Current Bids</small>
              <p>1{i + 5}.00 ETH </p>
            </div>
            <p className={Style.NFTCardtwo_box_price_stock}>
              <MdTimer /> <span>{i + 1}hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCardtwo;
