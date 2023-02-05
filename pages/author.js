import React, {useState, useEffect} from 'react'

//INTERNAL IMPORT
import Style from '../styles/author.module.css';
import Styles from '../Components/FollowerTab/FollowerTab.module.css'
import { Banner, NFTCardtwo } from '../collectionPage/collectionIndex';
import { Brand, Title } from '../Components/ComponentIndex';
import images from '../Img';
import { AuthorNFTCardBox, AuthorProfileCard, AuthorTaps } from '../authorPage/componentIndex';
import { FollowerTabCard } from '../Components/FollowerTab/FollowerTabCard/FollowerTabCard';

const author = ({bannerImage,}) => {
    const popularArray = [
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
    ]

    const [collectiables, setCollectiables] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(true);
    const [following, setFollowing] = useState(false);


  return (
      <div className={Style.banner}>
          <Banner bannerImage={images.creatorbackground8} />
          <AuthorProfileCard />
          <AuthorTaps
              setCollectiables={setCollectiables}
              setCreated={setCreated}
              setLike={setLike}
              setFollowing={setFollowing}
              setFollower={setFollower}
          /> 
          <AuthorNFTCardBox
              collectiables={collectiables}
              created={created}
              like={like}
              following={following}
              follower={follower}
          />
          <Title
              heading="Popular Creators"
              paragraph="Click on music ion and enjoy NFT m
              usic or audio"
          />
          
        {follower && (
        <div className={Styles.followerTab_box}>
          {popularArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
          )}
          <Brand />
    </div>
  )
}

export default author