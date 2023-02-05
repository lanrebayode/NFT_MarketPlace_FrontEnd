import React from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import Styles from "../../Components/FollowerTab/FollowerTab.module.css";
import images from "../../Img";
import { NFTCardtwo } from "../../collectionPage/collectionIndex";
import { FollowerTabCard } from "../../Components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  following,
  follower,
  NFTData,
  el,
  i,
}) => {
  const collectiablesArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const createdArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
  ];

  const likeArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const followerArray = [
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
  ];

  const followingArray = [
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
  ];

  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardtwo NFTData={collectiablesArray} />}
      {created && <NFTCardtwo NFTData={createdArray} />}
      {like && <NFTCardtwo NFTData={likeArray} />}
      {follower && (
        <div className={Styles.followerTab_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Styles.followerTab_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
