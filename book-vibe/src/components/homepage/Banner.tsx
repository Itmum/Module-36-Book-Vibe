import React from "react";
import bannerimage from "@/assets/hero_img.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="container mx-auto my-8 px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-16 rounded-2xl items-center justify-between border border-slate-200/60 shadow-sm">
        {/* Left Side: Content Box */}
        <div className="flex flex-col gap-6 md:gap-8 justify-center items-start text-center md:text-left max-w-xl order-2 md:order-1">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-tight">
            Books to freshen up your{" "}
            <span className="text-emerald-600 block md:inline">bookshelf</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-md font-medium leading-relaxed">
            Discover your next favorite read, organize your collection, and dive
            into curated literary masterpieces.
          </p>

          <button className="btn btn-md md:btn-lg border-none bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 rounded-xl px-6 md:px-8">
            View The List
          </button>
        </div>

        {/* Right Side: Responsive Image Wrapper */}
        <div className="relative w-full md:w-1/2 min-h-[100px] md:min-h-[400px] self-stretch order-1 md:order-2 overflow-hidden rounded-2xl">
          <Image
            fill
            src={bannerimage}
            alt="Banner Image"
            className="object-cover object-center" // 🚀 object-cover forces the image to completely stretch and crop to fill the box
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
