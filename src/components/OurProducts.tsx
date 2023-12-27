"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Icons } from "@/lib/Icons";
import CustomButton from "./CustomUI/CustomButton";


const OurProducts: React.FC = () => {
  return (
    <section className="our-products rounded-tl-[49px] bg-darkGreen">
      <div className="max-w relative py-[100px] md:py-[100px] lg:py-[100px] xl:py-[100px] 2xl:py-[100px] 3xl:py-[100px] 4xl:py-[220px]">
        <div className="absolute left-[40px] top-[20px] ">
          <img src="/assets/images/arrow.png" alt="arrow" className=" w-[50%] " />
        </div>
        <div className="product-categories-slider">
        <div className="title flex items-center justify-between border-b  border-b-lightGreen pb-[20px] mb-[35px]">
            <h2 className="section-heading salome-small text-white">
                Our Products
            </h2>
            <div className="navigations flex w-fit items-center gap-4">
              <div className="arrow-left  flex   cursor-pointer items-center justify-center rounded-full bg-bgGreenGrey h-[28px]  w-[28px] md:h-[38px]  md:w-[38px] lg:h-[48px]  lg:w-[48px] xl:h-[48px]  xl:w-[48px] 2xl:h-[48px]  2xl:w-[48px] 3xl:h-[48px]  3xl:w-[48px] 4xl:h-[55px]  4xl:w-[55px]">
                <Icons.chevronLeft className="arrow  text-[18px] text-white" />
              </div>
              <div className="arrow-right  flex cursor-pointer items-center justify-center rounded-full bg-bgGreenGrey h-[28px]  w-[28px] md:h-[38px]  md:w-[38px] lg:h-[48px]  lg:w-[48px] xl:h-[48px]  xl:w-[48px] 2xl:h-[48px]  2xl:w-[48px] 3xl:h-[48px]  3xl:w-[48px] 4xl:h-[55px]  4xl:w-[55px]">
                <Icons.chevronRight className="arrow  arrow-right text-[18px] text-white" />
              </div>
            </div>
            </div>
        <Swiper
            slidesPerView={1}
            spaceBetween={25}
            loop
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
                350: {
                    slidesPerView: 1,
                  spaceBetween: 25,
                },
                550: {
                    slidesPerView: 2,
                  spaceBetween: 25,
                },
                1025: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1600: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
              }}
            modules={[Navigation, Autoplay]}
            className="testimonial x-[160px] relative"
          >
            <div className="mx-auto max-w-[1050px]">
              <SwiperSlide className="">
                <div className="slide  bg-white rounded-[21px] px-[35px] py-[54px] h-[500px]  border-[3px]  hover:border-lightGreen  bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-capsule.png)"}}>
                    <h3 className="text-black font-dmSans text-[22px] lg:text-[26px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[32px] 4xl:text-[35px] font-medium mb-[25px]">Kratom Capsule</h3>
                    <CustomButton arrowed variant={"default"} className="hidden group-hover:flex ">Shop Now</CustomButton>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="slide bg-white rounded-[21px] px-[35px] py-[54px] h-[500px]  border-[3px]  hover:border-lightGreen  bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-gummies.png)"}}>
                    <h3 className="text-black font-dmSans text-[22px] lg:text-[26px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[32px] 4xl:text-[35px] font-medium mb-[25px]">Kratom Gummies</h3>
                    <CustomButton arrowed variant={"default"} className="hidden group-hover:flex">Shop Now</CustomButton>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="slide bg-white rounded-[21px] px-[35px] py-[54px] h-[500px]  border-[3px]  hover:border-lightGreen  bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-liquid-shot.png)"}}>
                    <h3 className="text-black font-dmSans text-[22px] lg:text-[26px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[32px] 4xl:text-[35px] font-medium mb-[25px]">Kratom Liquid Shot</h3>
                    <CustomButton arrowed variant={"default"} className="hidden group-hover:flex">Shop Now</CustomButton>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="slide bg-white rounded-[21px] px-[35px] py-[54px] h-[500px]  border-[3px]  hover:border-lightGreen  bg-no-repeat bg-right-bottom group" style={{backgroundImage:"url(/assets/images/kratom-powder.png)"}}>
                    <h3 className="text-black font-dmSans text-[22px] lg:text-[26px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[32px] 4xl:text-[35px] font-medium mb-[25px]">Kratom Powder</h3>
                    <CustomButton arrowed variant={"default"} className="hidden group-hover:flex">Shop Now</CustomButton>
                </div>
              </SwiperSlide>
            </div>
            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
