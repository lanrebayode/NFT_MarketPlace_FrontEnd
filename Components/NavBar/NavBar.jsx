import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
//___IMPORT ICON
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../ComponentIndex";
import images from "../../Img";

//SMART CONTRACT IMPORT
import { NFTMarketPlaceContext } from "../../Context/NFTMarketPlaceContext";

const NavBar = () => {
  //...useState for differen Components
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const onDiscover = () => {
    if (!discover) {
      setDiscover(true);
      setNotification(false);
      setHelp(false);
      setProfile(false);
    } else if (discover) {
      setDiscover(false);
      setNotification(false);
      setHelp(false);
      setProfile(false);
    }
  };
  const onHelCenter = () => {
    if (!help) {
      setHelp(true);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else if (help) {
      setHelp(false);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  const { currentAccount, connectWallet } = useContext(NFTMarketPlaceContext);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* //END OF LEFT SECTION */}

        {/* //START OF RIGHT SECTION */}
        <div className={Style.navbar_container_right}>
          {/* //...DISCOVER MENU */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={() => onDiscover()}> Discover </p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* //..HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={() => onHelCenter()}> Help Center </p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* //..NOTIFICATION MENU */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={(e) => openNotification(e)}
            />
            {notification && <Notification />}
          </div>

          {/* //..CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            {currentAccount == "" ? (
              <Button btnName="Connect" handleClick={() => connectWallet()} />
            ) : (
              <Link href={{ pathname: "/uploadNft" }}>
                <Button btnName="Create" handleClick={() => {}} />
              </Link>
            )}
          </div>

          {/* //..USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                className={Style.navbar_container_right_profile}
                src={images.user1}
                alt="Profile"
                width={40}
                onClick={(e) => openProfile(e)}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* //.. MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* //..SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            connectWallet={connectWallet}
            currentAccount={currentAccount}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
