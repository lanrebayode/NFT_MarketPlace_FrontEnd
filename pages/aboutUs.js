import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutUs.module.css";
import Brand from "../Components/Brand/Brand";
import images from "../Img";

const aboutUs = () => {
  const founderArray = [
    {
      name: "Niamh O'Shea",
      position: "Co-founder and Cheif Executive",
      image: images.founder1,
    },
    {
      name: "Daniel James",
      position: "Co-founder and Cheif Executive",
      image: images.founder2,
    },
    {
      name: "Orlay Henry",
      position: "Co-founder and Chairman",
      image: images.founder3,
    },
    {
      name: "David Hit",
      position: "Co-founder, Chief Strategy Officer",
      image: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been around the world (as of Sept. 30, 2022)",
    },
    {
      title: "100, 000",
      info: "Registered users account (as of Sept. 30, 2022)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2022)",
    },
  ];

  return (
    <div className={Style.aboutUs}>
      <div className={Style.aboutUs_box}>
        <div className={Style.aboutUs_box_hero}>
          <div className={Style.aboutUs_box_hero_left}>
            <h1>About Us.</h1>
            <p>
              We are immpartial and independents, and every day we create
              distinctive, content which infor,, educate and entertain millions
              of people in the art world
            </p>
          </div>
          <div className={Style.aboutUs_box_hero_right}>
            <Image
              src={images.hero2}
              className={Style.aboutUs_box_hero_right_img}
            />
          </div>
        </div>

        <div className={Style.aboutUs_box_title}>
          <h2>Founder</h2>
          <p>
            We are immpartial and independents, and every day we create
            distinctive content.
          </p>
        </div>

        <div className={Style.aboutUs_box_founder}>
          <div className={Style.aboutUs_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutUs_box_founder_box_img}>
                <Image
                  src={el.image}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutUs_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutUs_box_title}>
          <h2>Fast facts</h2>
          <p>
            We are immpartial and independents, and every day we create
            distinctive content.
          </p>
        </div>

        <div className={Style.aboutUs_box_facts}>
          <div className={Style.aboutUs_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutUs_box_facts_box_info}>
                <h3>{el.title} </h3>
                <p>{el.info} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutUs;
