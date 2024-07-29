import banner from "../../assets/EM-min.png";

const Banner = () => {
  return (
    <div className="banner-bg ">
      <div className="bg-[#F57B20] bg-opacity-60 p-6 pt-12">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row opacity-100 gap-8 p-5">
          <div className="md:flex-1">
            <img className="md:w-[500px] rounded-xl" src={banner} alt="" />
          </div>
          <div className="space-y-6 text-center md:flex-1">
            <h3 className="font-bold text-xl">
              সকল মুসলমানদের জন্য অত্যবশ্যকীয় বই!
            </h3>
            <h3 className="bg-black p-2 text-xl font-bold text-[#DCDD26] rounded-md">
              দ্য গ্রেটেস্ট অন্ট্রাপ্রেনর মুহাম্মাদ (সাঃ)
            </h3>
            <h2 className="border-2 text-[#522DAD] border-black p-2 text-2xl font-bold">
              ব্যবসা-বাণিজ্য ও পেশা-ক্যারিয়ারে সফল হওয়ার গাইডলাইন
            </h2>
            <p className="text-[#522DAD] text-xl font-bold">
              সারাদেশে ক্যাশ অন হোম ডেলিভারি
            </p>
            <p className="border-2 text-[#522DAD] border-black p-2 text-2xl font-bold">
              ৩০% ছাড়ে হাদিয়া ৪৮০/- টাকা
            </p>
            <button className="bg-[#08B01F] hover:bg-red-500 w-full text-white text-2xl rounded-md px-4 py-3">
              অর্ডার করতে এখানে ক্লিক করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
