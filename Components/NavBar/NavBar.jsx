import React, { useState, useEffect, useContext, useRef } from "react";
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

  let discoverRef = useRef();
  let helpRef = useRef();
  let profileRef = useRef();
  let notificationRef = useRef();

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

  useEffect(() => {
    let handler = (e) => {
      if (!discoverRef.current.contains(e.target)) {
        console.log(discoverRef.current.contains(e.target));
        setDiscover(false);
      }
    };
    let handler2 = (e) => {
      if (!helpRef.current.contains(e.target)) {
        console.log(helpRef.current.contains(e.target));
        setHelp(false);
      }
    };
    let handler3 = (e) => {
      if (!notificationRef.current.contains(e.target)) {
        console.log(notificationRef.current.contains(e.target));
        setNotification(false);
      }
    };
    let handler4 = (e) => {
      if (!profileRef.current.contains(e.target)) {
        console.log(profileRef.current.contains(e.target));
        setProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("mousedown", handler2);
    document.addEventListener("mousedown", handler3);
    document.addEventListener("mousedown", handler4);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("mousedown", handler2);
      document.removeEventListener("mousedown", handler3);
      document.removeEventListener("mousedown", handler4);
    };
  }, []);

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
          <Link href={{ pathname: "/" }}>
            <p> Home </p>
          </Link>
          {/* //...DISCOVER MENU */}
          <div
            className={Style.navbar_container_right_discover}
            ref={discoverRef}
          >
            <p onClick={() => onDiscover()}> Discover </p>
            {discover && (
              <div
                className={Style.navbar_container_right_discover_box}
                ref={discoverRef}
              >
                <Discover handleClick={onDiscover} />
              </div>
            )}
          </div>

          {/* //..HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={() => onHelCenter()}> Help Center </p>
            {help && (
              <div
                className={Style.navbar_container_right_help_box}
                ref={helpRef}
              >
                <HelpCenter handleClick={onHelCenter} />
              </div>
            )}
          </div>

          {/* //..NOTIFICATION MENU */}
          <div
            className={Style.navbar_container_right_notify}
            ref={notificationRef}
          >
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
            <div
              className={Style.navbar_container_right_profile}
              ref={profileRef}
            >
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
