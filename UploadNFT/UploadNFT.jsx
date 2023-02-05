import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./UploadNFT.module.css";
import formStyles from "../AccountPage/Form/Form.module.css";
import images from "../Img";
import { Button } from "../Components/ComponentIndex";
import Dropzone from "../UploadNFT/DropZone/DropZone";

const UploadNFT = () => {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("");
  const [property, setProperty] = useState("");

  const categoryArray = [
    {
      image: images.nft_image_1,
      category: "Sports",
    },
    {
      image: images.nft_image_2,
      category: "Arts",
    },
    {
      image: images.nft_image_3,
      category: "Music",
    },
    {
      image: images.nft_image_1,
      category: "Digital",
    },
    {
      image: images.nft_image_2,
      category: "Time",
    },
    {
      image: images.nft_image_3,
      category: "Photography",
    },
  ];

  return (
    <div className={Style.upload}>
      <Dropzone
        title="JPG, PNG, WEBM, MAX 100MB"
        heading="Drag and drop file"
        subHeading="or Browse media on your device"
        itemName={itemName}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        property={property}
        image={images.upload}
      />

      <div className={Style.upload_box}>
        <div className={formStyles.Form_box_input}>
          <label htmlFor="nft">Item Name</label>
          <input
            type="text"
            placeholder="Olanrewaju"
            className={formStyles.Form_box_input_userName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className={formStyles.Form_box_input}>
          <label htmlFor="Website">Website</label>
          <div className={formStyles.Form_box_input_box}>
            <div className={formStyles.Form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>

            <input
              type="text"
              placeholder="website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <p className={Style.upload_box_input_para}>
            We will include a link to this URL on this item's detail page, so
            that users can click to learn more about it, You are wilcome to link
            to your own webpage with more details.
          </p>
        </div>

        <div className={formStyles.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="Write item description here"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p>
            The description will be included o the item's detail page underneath
            its image. Markdown syntax is supported.
          </p>
        </div>

        <div className={formStyles.Form_box_input}>
          <label htmlFor="name">Choose collection</label>
          <p className={Style.upload_box_input_para}>
            Choose an existing collection or create a new one
          </p>

          <div className={Style.upload_box_slider_div}>
            {categoryArray.map((el, i) => (
              <div
                className={`${Style.upload_box_slider} ${
                  active == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => (setActive(i + 1), setCategory(el.category))}
              >
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <Image
                      src={el.image}
                      alt="background Image"
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>Crypto Legend - {el.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.Form_box_input_social}>
          <div className={formStyles.Form_box_input}>
            <label htmlFor="Royalties">Royalties</label>
            <div className={formStyles.Form_box_input_box}>
              <div className={formStyles.Form_box_input_box_icon}>
                <FaPercent />
              </div>

              <input
                type="text"
                placeholder="20%"
                onClick={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyles.Form_box_input}>
            <label htmlFor="size">Size</label>
            <div className={formStyles.Form_box_input_box}>
              <div className={formStyles.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="23MB"
                onClick={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyles.Form_box_input}>
            <label htmlFor="Property">Property</label>
            <div className={formStyles.Form_box_input_box}>
              <div className={formStyles.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="property"
                onChange={(e) => setProperty(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={Style.upload_box_btn}>
          <Button
            btnName="Upload"
            handleClick={() => {}}
            classStyle={Style.upload_box_btn_style}
          />
          <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle={Style.upload_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
