import imge from "../../assets/TGEM-1628x2048.png";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/inside-TGEM-book-02-668x1024.png"
import img2 from "../../assets/inside-TGEM-book-03-668x1024.png"
import img3 from "../../assets/inside-TGEM-book-04-668x1024.png"
import img4 from "../../assets/inside-TGEM-book-05-668x1024.png"
// import img5 from "../../assets/inside-TGEM-book-02-668x1024.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Details = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 mt-12">
      <h1 className="text-center text-bold text-3xl bg-[#86862d] p-4 rounded-xl text-white">
        বিস্তারিতঃ 01713 42 90 60
      </h1>
      <p className="border-4 text-[#522DAD] text-xl p-4  rounded-lg text-center font-bold border-double mt-5 border-black">
        📘 অস্থিতিশীল বাজার। দ্রব্য-মূল্যের উর্ধ্বগতি। ঝুঁকিতে আমদানি-রপ্তানি
        খাত। ভেঙে পড়ছে ব্যাংকিং সিস্টেম। বাড়ছে ঋণখেলাপির দায়। মূল্যস্ফীতিতে
        টালমাটাল বিশ্ব। অজানা শংকা বিরাজমান ব্যবসা-বাণিজ্য ও অর্থনীতিতে।
        দূর্ভিক্ষের অশনি সংকেতে পেরেশান জন-সাধারণ। এর কারণ কী? কী কারণে ঘটছে
        এমনটা? কোথায় রয়েছে এসব সমস্যার সমাধান?
      </p>
      {/* image  */}
      <div className="mt-16 text-center ">
        <img className="inline w-44" src={imge} alt="" />
      </div>
      {/* দ্য গ্রেটেস্ট অন্ট্রাপ্রেনর */}
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">
          দ্য গ্রেটেস্ট অন্ট্রাপ্রেনর মুহাম্মাদ [সাল্লাল্লাহু আলাইহি ওয়া
          সাল্লাম]
        </h1>
        <div className="mt-4 font-semibold">
          <p>লেখক : মিরাজ রহমান</p>
          <p>প্রকাশনী : সুলতানস</p>
          <p>বিষয় : আত্ম-উন্নয়ন ও ব্যবসা-উন্নয়ন</p>
          <p>বাইন্ডিং: হার্ড কভার।</p>
          <p>কাগজঃ ৭০ গ্রাম অফহোয়াইট কাগজ</p>
          <p>পৃষ্ঠা সংখ্যা: ৩৬০ পৃষ্ঠা</p>
          <p>মুদ্রিত মূল্য : ৬৯০/-</p>
        </div>
      </div>
      {/* button  */}
      <div className="mt-12">
        <button className="bg-[#08B01F] hover:bg-red-500 w-full text-white text-2xl rounded-md px-4 py-3">
          অর্ডার করতে এখানে ক্লিক করুন
        </button>
      </div>
      {/*  গ্রেটেস্ট অন্ট্রাপ্রেনর মুহাম্মাদ (সাঃ) */}
      <div className="mt-12">
        <h1 className="text-2xl font-bold text-center border-4 border-black p-1 border-double =">
          দ্য গ্রেটেস্ট অন্ট্রাপ্রেনর মুহাম্মাদ (সাঃ) এর আংশিক সূচীপত্র দেখুনঃ
        </h1>
        <div className="mt-12">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Details;
