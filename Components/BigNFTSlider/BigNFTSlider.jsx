import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineLineHeight } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./BigNFTSlider.module.css";
import images from "../../Img";
import Button from "../Button/Button";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(0);
  const sliderData = [
    {
      title: "Rella NFT",
      id: 1,
      name: "Bayode Olanrewaju",
      collection: "Fun",
      price: "00000455 ETH",
      like: 843,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 2,
        hours: 5,
        minutes: 41,
        seconds: 5,
      },
    },
    {
      title: "POK NFT",
      id: 1,
      name: "Akande Tope",
      collection: "Fun",
      price: "5 ETH",
      like: 23,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 7,
        hours: 17,
        minutes: 31,
        seconds: 30,
      },
    },
    {
      title: "Sushi NFT",
      id: 1,
      name: "Israel Dayo",
      collection: "Fun",
      price: "7 ETH",
      like: 654,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 6,
        hours: 3,
        minutes: 47,
        seconds: 3,
      },
    },
    {
      title: "Crevo NFT",
      id: 1,
      name: "Peter Obi",
      collection: "Fun",
      price: "12 ETH",
      like: 23,
      image: images.user4,
      nftImage: images.nft_image_3,
      time: {
        days: 2,
        hours: 10,
        minutes: 11,
        seconds: 5,
      },
    },
  ];

  const inc = useCallback(() => {
    console.log(idNumber);
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);
  const dec = useCallback(() => {
    if (idNumber - 1 > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />
              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p> collection</p>
                <h4>{sliderData[idNumber].collection} </h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price}
                <span>$2,201</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>
            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days} </p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>Minutes</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>Seconds</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              className={Style.bigNFTSlider_box_right_box_img}
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
            />

            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
