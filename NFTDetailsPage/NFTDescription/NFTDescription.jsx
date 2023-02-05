import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudDownload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
  MdCloudUpload,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

//INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import images from "../../Img";
import { Button } from "../../Components/ComponentIndex";
import { NFTTabs } from "../NFTDetailsIndex";

const NFTDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);
  const [tabNumber, setTabNumber] = useState(1);

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user7,
    images.user2,
    images.user4,
    images.user9,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;
    console.log(btnText);

    if (btnText == "Bid History") {
      setHistory(true);
      setTabNumber(1);
      setProvanance(false);
      setOwner(false);
    } else if (btnText == "Provanance") {
      setHistory(false);
      setProvanance(true);
      setTabNumber(2);
      setOwner(false);
    }
  };

  const openOwner = () => {
    if (!owner) {
      setOwner(true);
      setTabNumber(3);
      setHistory(false);
      setProvanance(false);
    } else {
      setOwner(false);
      setHistory(true);
      setTabNumber(1);
    }
    console.log(tabNumber);
  };

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* Part ONE */}
        <div className={Style.NFTDescription_box_share}>
          <p>Virtuaal World</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <br />
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
                <br />
                <a href="#">
                  <TiSocialLinkedin /> Linkedin
                </a>
                <br />
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <br />
                <a href="#">
                  <TiSocialYoutube /> YouTube
                </a>
                <br />
              </div>
            )}

            <BsThreeDots
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />

            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar />
                  Change Price
                </a>
                <br />
                <a href="#">
                  <BiTransferAlt />
                  Transfer
                </a>
                <br />
                <a href="#">
                  <MdReportProblem />
                  Reprt Abuse
                </a>
                <br />
                <a href="#">
                  <MdOutlineDeleteSweep />
                  Delete
                </a>
                <br />
              </div>
            )}
          </div>
        </div>
        {/* Part TWO */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>BearX #32133</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small>
                <br />
                <span>
                  Yomi Mayowa <MdVerified />
                </span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.user4}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small>
                <span>
                  Yomi Mayowa <MdVerified />
                </span>
              </div>
            </div>
          </div>
          <div className={Style.NFTDescription_box_profile_bidding}>
            <p>
              <MdTimer />
              <span>Auction ending in:</span>
            </p>

            <div className={Style.NFTDescription_box_profile_bidding_box_timer}>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>2</p>
                <span>Days</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>3</p>
                <span>Hours</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>45</p>
                <span>Minutes</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>34</p>
                <span>sec</span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_price}>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>
                  1.00 ETH <span>( $3,221.34)</span>
                </p>
              </div>

              <span>[96 in stock]</span>
            </div>

            <div
              className={Style.NFTDescription_box_profile_bidding_box_button}
            >
              <Button
                icon={<FaWallet />}
                btnName="Place a bid"
                handleClick={() => {}}
                classStyle={Style.button}
              />
              <Button
                icon={<FaPercentage />}
                btnName="Make an 0ffer"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_tabs}>
              <button
                className={`${tabNumber == 1 ? Style.active : ""}`}
                onClick={(e) => openTabs(e)}
              >
                Bid History
              </button>
              <button
                className={`${tabNumber == 2 ? Style.active : ""}`}
                onClick={(e) => openTabs(e)}
              >
                Provanance
              </button>
              <button
                className={`${tabNumber == 3 ? Style.active : ""}`}
                onClick={() => openOwner()}
              >
                Owner
              </button>
            </div>

            {history && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {provanance && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={provananceArray} />
              </div>
            )}
            {owner && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={ownerArray} icon={<MdVerified />} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
