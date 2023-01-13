import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Notification.module.css";
import images from "../../../Img";

const Notification = () => {
  return (
    <div className={Style.notification}>
      {console.log("INSIDE")}
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            className={Style.notification_box_img}
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4> Tope Akande</h4>
          <p>Measure action of user...</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
