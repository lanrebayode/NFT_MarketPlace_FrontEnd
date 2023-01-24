import React from 'react'

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  AudioLive,
  BigNFTSlider,
  Category,
  Collection,
  Filter,
  FollowerTab,
  HeroSection,
  NFTCard,
  Service,
  Subscribe,
  Title
} from '../Components/ComponentIndex';
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
        <Title
        heading="Latest Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <AudioLive />
      <Title
        heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <FollowerTab />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by Category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
    </div>
  )
}

export default Home
