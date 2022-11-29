import React from "react";
import "./testimonials.css";
import avt1 from "../../assets/avatar1.jpg";
import avt2 from "../../assets/avatar2.jpg";
import avt3 from "../../assets/avatar3.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: avt1,
    name: "Sakushal Shrestha",
    review:
      "Sarai kada xa",
  },
  {
    avatar: avt3,
    name: "Sarup Bajracharya",
    review:
      "I am CR",
  },
  {
    avatar: avt2,
    name: "Bibek Maharjan",
    review:
      "Haina Hola",
  },
  {
    avatar: avt3,
    name: "Ural Gooner Shrestha",
    review:
      "La sad vayo",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials-container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="friends-avtar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="friend-name">{name}</h5>
              <small className="friend-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;