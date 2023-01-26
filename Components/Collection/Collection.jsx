import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Collection.module.css";
import images from "../../Img";
import DaysComponents from "./DaysComponents/DaysComponents";

const Collection = () => {
  const [popular, setPopular] = useState(false);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(true);

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
  const followingArray = [
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
      background: images.creatorbackground4,
      user: images.user4,
    },
  ];
  const newsArray = [
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
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
  ];

  const openPopular = () => {
    if (!popular || popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news || news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };
  const openFollower = () => {
    if (!following || following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };
  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> Last 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> Last 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> Last 30 days
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={Style.collection_box}>
          {CardArray.map((el, i) => (
            <DaysComponents key={i + 1} el={el} i={i} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((el, i) => (
            <DaysComponents key={i + 1} el={el} i={i} />
          ))}
        </div>
      )}
      {news && (
        <div className={Style.collection_box}>
          {newsArray.map((el, i) => (
            <DaysComponents key={i + 1} el={el} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
