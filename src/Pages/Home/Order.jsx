import { useForm } from "react-hook-form";
import logo from "../../assets/EM-min-300x300.png";
import { IoMdArrowDropup } from "react-icons/io";
import { FaLock } from "react-icons/fa";

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#fbe1d3] mt-8 ">
      <div className="max-w-screen-lg mx-auto px-6 pt-8 pb-16">
        <h1 className="p-2 text-3xl font-bold text-center ">
          নিচের ফর্মে আপনার নাম, ঠিকানা, মোবাইল নাম্বার সম্পূর্ন লিখে অর্ডার
          করুন
        </h1>

        {/* order page  */}
        <div className="flex flex-col gap-8 justify-between mt-8 ">
          <div className="">
            <h2 className="font-bold text-xl">Billing details</h2>
            {/* form Start  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার নাম <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline rounded py-3 px-4 block text-sm w-full appearance-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="নাম লিখুন"
                  id="name"
                  name="name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-red-600">Name is Required</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার ঠিকানা <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline rounded py-3 px-4 block  text-sm w-full appearance-none"
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                  id="address"
                  name="address"
                  autoComplete="text"
                />
                {errors.address && (
                  <p className="text-red-600">ঠিকানার তথ্যটি প্রয়োজনীয়</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  মোবাইল নাম্বার
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline  rounded py-3 px-4 block text-sm w-full appearance-none"
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ফোন নম্বর লিখুন"
                  id="phone"
                  name="phone"
                  autoComplete="number"
                />
                {errors.phone && (
                  <p className="text-red-600">
                    আপনার সম্পূর্ণ ফোন নম্বর তথ্যটি প্রয়োজনীয়
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Your Products */}
          <div className="mt-8">
            <h1 className="text-xl font-bold">Your Products</h1>
            <div className="bg-[#f3f3f3] rounded-t-md mt-8 p-7 font-bold text-start flex ">
              <div className="flex-1">
                <h1>Product</h1>
              </div>
              <div className="flex-1 flex justify-between">
                <p>Quantity</p>
                <p>Price</p>
              </div>
            </div>
            <hr className=" border-black " />
            <div className="bg-[#f3f3f3] rounded-b-md p-7 font-bold text-start flex ">
              <div className="flex-1">
                <h1 className="text-sm">দ্য গ্রেটেস্ট অন্ট্রাপ্রেনর মুহাম্মাদ (#29531)</h1>
              </div>
              <div className="flex-1 flex justify-between cursor-pointer">
                <div className="flex items-center">
                  <p className="border px-3">-</p>
                  <p className="border px-3">1</p>
                  <p className="border px-3">+</p>
                </div>
                <p>480.00৳</p>
              </div>
            </div>
          </div>

          {/*Your  order  */}
          <div className="">
            <h2 className="font-bold text-xl">Your order</h2>
            <div className="flex font-bold justify-between items-center gap-3 mt-5">
              <p>Product</p>
              <p>SubTotal</p>
            </div>
            <p className="border-b-2 border-dashed mt-2"></p>
            <div className="mt-5 flex items-center justify-between gap-3  text-sm font-semibold">
              <div className="flex items-center gap-3">
                <img className="w-20 rounded" src={logo} alt="" />
                <p>দ্য গ্রেটেস্ট অন্ট্রাপ্রেনর মুহাম্মাদ</p>
              </div>
              <div>
                <p>× 1 480.00৳ </p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5"></p>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>SubTotal</p>
              <div>
                <p>480.00৳</p>
              </div>
            </div>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Shopping</p>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <input
                    className="accent-red-500"
                    type="radio"
                    name=""
                    id=""
                  />
                  <p>Outside Dhaka: 90.00৳</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="accent-red-500"
                    type="radio"
                    name=""
                    id=""
                  />
                  <p>Inside Dhaka: 50.00৳ </p>
                </div>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5 "></p>
            <div className="flex text-sm font-bold justify-between items-center gap-3 mt-5">
              <p>Total</p>
              <p>2,670.00 ৳</p>
            </div>
            <div className="bg-[#f4f8fa] relative p-4 mt-5 rounded">
              <div className="flex items-center gap-3">
                <p>ক্যাশ অন ডেলিভারি</p>
              </div>
              <div className="absolute top-6 left-6">
                <IoMdArrowDropup className="text-6xl text-[#eaeaea]" />
              </div>
              <p className="p-4 bg-[#eaeaea] mt-4 text-sm">
                পণ্য হাতে পেয়ে সম্পূর্ণ মূল্য পরিশোধ করতে হবে।
              </p>
            </div>
            <p className="mt-2 text-[#777] text-[12px]">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
              <span className="text-red-500">privacy policy.</span>
            </p>
            <div className="text-center mt-12 md:mt-12">
              <button className="px-6 w-full gap-3 py-3 font-bold text-white rounded-lg bg-[#f16334] hover:bg-[#b11111]">
                অর্ডার সম্পূর্ণ করুন ৳ 2,670.00
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
