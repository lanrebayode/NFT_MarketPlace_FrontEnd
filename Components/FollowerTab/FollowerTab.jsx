import React, { useState, useEffect } from "react";
import { FaMedal, FaUserCheck } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import {
  RiUserUnfollowFill,
  RiUserFollowFill,
  RiAwardLine,
} from "react-icons/ri";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./FollowerTab.module.css";
import { FollowerTabCard } from "./FollowerTabCard/FollowerTabCard";
import images from "../../Img";

const FollowerTab = () => {
  const [following, setFollowing] = useState(true);
  const [popular, setPopular] = useState(false);
  const [noteWorthy, setNoteWorthy] = useState(false);

  const CardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground10,
      user: images.user10,
    },
  ];
  const FollowingArray = [
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground10,
      user: images.user10,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
  ];
  const NewsArray = [
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
  ];

  const openFollowing = () => {
    if (!following || following) {
      setFollowing(true);
      setPopular(false);
      setNoteWorthy(false);
    }
  };
  const openPopular = () => {
    if (!popular || popular) {
      setFollowing(false);
      setPopular(true);
      setNoteWorthy(false);
    }
  };
  const openNews = () => {
    if (!noteWorthy || noteWorthy) {
      setFollowing(false);
      setPopular(false);
      setNoteWorthy(true);
    }
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2>Top Creators List...</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill />
              Popular{" "}
            </button>
            <button onClick={() => openFollowing()}>
              <RiUserFollowFill />
              Following{" "}
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine />
              Noteworthy{" "}
            </button>
          </div>
        </div>
      </div>

      {following && (
        <div className={Style.followerTab_box}>
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {noteWorthy && (
        <div className={Style.followerTab_box}>
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {popular && (
        <div className={Style.followerTab_box}>
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become author</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
