import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
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

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import images from "../../../Img";
import Button from "../../Button/Button";

const SideBar = ({ setOpenSideMenu, connectWallet, currentAccount }) => {
  //....USESTATE
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  //...DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "CollectionPage",
    },
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "NFTDetails",
    },
    {
      name: "Account Settings",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "uploadNft",
    },
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  //...HELPCENTER NAVIGATION MENU
  const helpCenter = [
    {
      name: "About",
      link: "aboutUs",
    },
    {
      name: "Contact Us",
      link: "contactUs",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    if (setOpenSideMenu) {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="Logo" width={150} height={150} />
        <p>
          Discover the most ourstanding articles on all topics of NFT and add
          your own stories, you can also share them.
        </p>
        <div className={Style.sideBar_social}>
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

      <div className={Style.sideBar_menu}>
        <div>
          <Link href={{ pathname: "/" }}>
            <p onClick={() => closeSideBar()}> Home </p>
          </Link>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el, i) => (
                <p className={Style.sideBar_options} key={i + 1}>
                  <Link
                    onClick={() => closeSideBar()}
                    href={{ pathname: `${el.link}` }}
                  >
                    {el.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div className={Style.sideBar_menu_box} onClick={() => openHelpMenu()}>
          <p>Help Center</p>
          <TiArrowSortedDown />
        </div>
        {openHelp && (
          <div className={Style.sideBar_discover}>
            {helpCenter.map((el, i) => (
              <p className={Style.sideBar_options} key={i + 1}>
                <Link
                  onClick={() => closeSideBar()}
                  href={{ pathname: `${el.link}` }}
                >
                  {el.name}
                </Link>
              </p>
            ))}
          </div>
        )}

        <div className={Style.sideBar_button}>
          <Link href="./uploadNft">
            <Button btnName="Create" handleClick={() => {}} />
          </Link>
          {currentAccount == "" ? (
            <Button
              btnName="Connect Wallet"
              handleClick={() => connectWallet()}
            />
          ) : (
            <Button btnName="Connected" handleClick={() => {}} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
