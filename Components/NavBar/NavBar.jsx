import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
//___IMPORT ICON
import { MdNotification } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//INTERNAL IMPORT
import Styles from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../ComponentIndex";
import images from "../../Img";

const NavBar = () => {
  //...useState for differen Components
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (notification) {
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

  return (
    <div className={Styles.navbar}>
      <div className={Styles.navbar_container}>
        <div className={Styles.navbar_container_left}>
          <div className={Styles.logo}>
            <Image
              src={images.logo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100}
            />
          </div>
          <div className={Styles.navbar_container_left_box_input}>
            <div className={Styles.navbar_container_left_box_input}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Styles.search_icon} />
            </div>
          </div>
        </div>
        {/* //END OF LEFT SECTION */}

        {/* //END OF RIGHT SECTION */}
        <div className={Styles.navbar_container_right}>
          <div className={Styles.navbar_container_right_discover}>
            {/* //...DISCOVERY MENU */}
            <p onClick={(e) => openMenu(e)}> Discovery </p>
            {discover && (
              <div className={Styles.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* //..HELP CENTER MENU */}
          <div className={Styles.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}> Help Center </p>
            {help && (
              <div className={Styles.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* //..NOTIFICATION MENU */}
          <div className={Styles.navbar_container_right_notify}>
            <MdNotification
              className={Styles.notify}
              onClick={(e) => openNotification(e)}
            />
            {notification && <Notification />}
          </div>

          {/* //..CREATE BUTTON SECTION */}
          <div className={Styles.navbar_container_right_button}>
            <Button btnText="Create" />
          </div>

          {/* //..USER PROFILE */}
          <div className={Styles.navbar_container_right_profile_box}>
            <div className={Styles.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                onClick={(e) => openProfile(e)}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* //.. MENU BUTTON */}
          <div className={Styles.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Styles.menuIcon}
              onClick={(e) => openSideBar(e)}
            />
          </div>
        </div>
      </div>

      {/* //..SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={Styles.SideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
