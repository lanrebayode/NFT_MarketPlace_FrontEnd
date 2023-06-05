import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

//......DISCOVER NAVIGATION MENU
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
const Discover = ({ handleClick }) => {
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }} onClick={handleClick}>
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
