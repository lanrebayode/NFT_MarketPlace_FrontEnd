import React from 'react'

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  BigNFTSlider,
  Category,
  Collection,
  Filter,
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
        heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
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
