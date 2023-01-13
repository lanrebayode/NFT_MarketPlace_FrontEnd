import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

//......DISCOVER NAVIGATION MENU
const discover = [
  {
    name: "Collection",
    link: "NFT-details",
  },
  {
    name: "Search",
    link: "search",
  },
  {
    name: "Author Profile",
    link: "author-profile",
  },
  {
    name: "NFT Details",
    link: "NFT-details",
  },
  {
    name: "Account Settings",
    link: "account-setting",
  },
  {
    name: "Connect Wallet",
    link: "Connect-wallet",
  },
  {
    name: "BLog",
    link: "blog",
  },
];
const Discover = () => {
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
