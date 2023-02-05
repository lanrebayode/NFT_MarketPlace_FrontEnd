import React from "react";

//INTERNAL IMPORT
import Style from "./SearchBar.module.css";
import { Slider } from "../../Components/ComponentIndex";
import { BsArrowRight, BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input type="text" placeholder="Type your keyword..." />
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  );
};

export default SearchBar;
