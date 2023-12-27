"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Icons } from "@/lib/Icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const FAQ = () => {
  return (
    <section className="rounded-t-[49px] bg-darkGreen py-[40px] md:py-[40px] lg:py-[50px] xl:py-[50px] 2xl:py-[50px] 3xl:py-[80px] 4xl:py-[100px]">
      <div className="max-w px-4 4xl:px-0">
        <h2 className="section-heading salome-large text-bgGreenGrey">
          Men say
        </h2>
        <div className="testimonials mx-auto max-w-[1169px] py-[40px] md:py-[40px] lg:py-[50px] xl:py-[50px] 2xl:py-[50px] 3xl:py-[80px] 4xl:py-[100px]">
          <Swiper
            slidesPerView={1}
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="testimonial x-[160px] relative"
          >
            <div className="mx-auto max-w-[1050px]">
              <SwiperSlide className="">
                <div className="slide">
                  <div className="testimony-product flex flex-wrap items-center border-b border-b-white pb-[18px]">
                    <div className="img mr-[18px]">
                      <img src="/assets/images/prod.png" alt="product" />
                    </div>
                    <div className="prod-content">
                      <div className="stars flex items-center justify-start gap-1">
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                      </div>
                      <p className="pt-3 font-dmSans text-[22px] font-bold leading-none text-white">
                        Awsome
                      </p>
                      <h3 className="py-4 font-dmSans text-[24px] font-bold leading-none text-white">
                        OPMS Kratom Liquid Extract
                      </h3>
                      <p className="font-dmSans text-[16px] leading-none text-white ">
                        (Shot 8.8ml)
                      </p>
                    </div>
                  </div>
                  <p className="py-7 font-dmSans text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[22px]  4xl:text-[22px] leading-none text-white">
                    This is my main go to. Every morning I take 2 with a cup of
                    coffee. Takes me all the way through the work day with lots
                    of energy and mental clarity. I highly recommend these OPMS
                    Gold capsules.
                  </p>
                  <h3 className="w-fit border-b border-b-lightGreen pb-3 pt-[38] font-salome text-[18px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px]  4xl:text-[30px] leading-none text-lightGreen">
                    Vonnestine J.
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="slide">
                  <div className="testimony-product flex flex-wrap items-center border-b border-b-white pb-[18px]">
                    <div className="img mr-[18px]">
                      <img src="/assets/images/prod.png" alt="product" />
                    </div>
                    <div className="prod-content">
                      <div className="stars flex items-center justify-start gap-1">
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                      </div>
                      <p className="pt-3 font-dmSans text-[22px] font-bold leading-none text-white">
                        Awsome
                      </p>
                      <h3 className="py-4 font-dmSans text-[24px] font-bold leading-none text-white">
                        OPMS Kratom Liquid Extract
                      </h3>
                      <p className="font-dmSans text-[16px] leading-none text-white ">
                        (Shot 8.8ml)
                      </p>
                    </div>
                  </div>
                  <p className="py-7 font-dmSans text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[22px]  4xl:text-[22px] leading-none text-white">
                    This is my main go to. Every morning I take 2 with a cup of
                    coffee. Takes me all the way through the work day with lots
                    of energy and mental clarity. I highly recommend these OPMS
                    Gold capsules.
                  </p>
                  <h3 className="w-fit border-b border-b-lightGreen pb-3 pt-[38] font-salome text-[18px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px]  4xl:text-[30px] leading-none text-lightGreen">
                    Vonnestine J.
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="slide">
                  <div className="testimony-product flex flex-wrap items-center border-b border-b-white pb-[18px]">
                    <div className="img mr-[18px]">
                      <img src="/assets/images/prod.png" alt="product" />
                    </div>
                    <div className="prod-content">
                      <div className="stars flex items-center justify-start gap-1">
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                      </div>
                      <p className="pt-3 font-dmSans text-[22px] font-bold leading-none text-white">
                        Awsome
                      </p>
                      <h3 className="py-4 font-dmSans text-[24px] font-bold leading-none text-white">
                        OPMS Kratom Liquid Extract
                      </h3>
                      <p className="font-dmSans text-[16px] leading-none text-white ">
                        (Shot 8.8ml)
                      </p>
                    </div>
                  </div>
                  <p className="py-7 font-dmSans text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[22px]  4xl:text-[22px] leading-none text-white">
                    This is my main go to. Every morning I take 2 with a cup of
                    coffee. Takes me all the way through the work day with lots
                    of energy and mental clarity. I highly recommend these OPMS
                    Gold capsules.
                  </p>
                  <h3 className="w-fit border-b border-b-lightGreen pb-3 pt-[38] font-salome text-[18px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px]  4xl:text-[30px] leading-none text-lightGreen">
                    Vonnestine J.
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="slide">
                  <div className="testimony-product flex flex-wrap items-center border-b border-b-white pb-[18px]">
                    <div className="img mr-[18px]">
                      <img src="/assets/images/prod.png" alt="product" />
                    </div>
                    <div className="prod-content">
                      <div className="stars flex items-center justify-start gap-1">
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                      </div>
                      <p className="pt-3 font-dmSans text-[22px] font-bold leading-none text-white">
                        Awsome
                      </p>
                      <h3 className="py-4 font-dmSans text-[24px] font-bold leading-none text-white">
                        OPMS Kratom Liquid Extract
                      </h3>
                      <p className="font-dmSans text-[16px] leading-none text-white ">
                        (Shot 8.8ml)
                      </p>
                    </div>
                  </div>
                  <p className="py-7 font-dmSans text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[22px]  4xl:text-[22px] leading-none text-white">
                    This is my main go to. Every morning I take 2 with a cup of
                    coffee. Takes me all the way through the work day with lots
                    of energy and mental clarity. I highly recommend these OPMS
                    Gold capsules.
                  </p>
                  <h3 className="w-fit border-b border-b-lightGreen pb-3 pt-[38] font-salome text-[18px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px]  4xl:text-[30px] leading-none text-lightGreen">
                    Vonnestine J.
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="slide">
                  <div className="testimony-product flex flex-wrap items-center border-b border-b-white pb-[18px]">
                    <div className="img mr-[18px]">
                      <img src="/assets/images/prod.png" alt="product" />
                    </div>
                    <div className="prod-content">
                      <div className="stars flex items-center justify-start gap-1">
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                        <Star className="h-[18px] w-[18px] fill-golden text-golden" />
                      </div>
                      <p className="pt-3 font-dmSans text-[22px] font-bold leading-none text-white">
                        Awsome
                      </p>
                      <h3 className="py-4 font-dmSans text-[24px] font-bold leading-none text-white">
                        OPMS Kratom Liquid Extract
                      </h3>
                      <p className="font-dmSans text-[16px] leading-none text-white ">
                        (Shot 8.8ml)
                      </p>
                    </div>
                  </div>
                  <p className="py-7 font-dmSans text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[22px]  4xl:text-[22px] leading-none text-white">
                    This is my main go to. Every morning I take 2 with a cup of
                    coffee. Takes me all the way through the work day with lots
                    of energy and mental clarity. I highly recommend these OPMS
                    Gold capsules.
                  </p>
                  <h3 className="w-fit border-b border-b-lightGreen pb-3 pt-[38] font-salome text-[18px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px]  4xl:text-[30px] leading-none text-lightGreen">
                    Vonnestine J.
                  </h3>
                </div>
              </SwiperSlide>
            </div>
            <div className="mx-auto mt-[30px] flex w-fit items-center gap-4">
              <div className="arrow-left left-0 top-[45%] z-10 flex  h-[68px]  w-[68px] cursor-pointer items-center justify-center rounded-full bg-bgGreenGrey ">
                <Icons.chevronLeft className="arrow  text-[18px] text-white" />
              </div>
              <div className="arrow-right right-0 top-[45%] z-10 flex h-[68px]   w-[68px] cursor-pointer items-center justify-center rounded-full bg-bgGreenGrey">
                <Icons.chevronRight className="arrow  arrow-right text-[18px] text-white" />
              </div>
            </div>
            {/* <div className="arrow-left absolute left-0 top-[45%] z-[9999999999] flex  h-[68px]  w-[68px] cursor-pointer items-center justify-center rounded-full bg-bgGreenGrey ">
                <Icons.chevronLeft className="arrow  text-[18px] text-white" />
              </div>
              <div className="arrow-right absolute right-0 top-[45%] z-[9999999999] flex h-[68px]   w-[68px] cursor-pointer items-center justify-center rounded-full bg-bgGreenGrey">
                <Icons.chevronRight className="arrow  arrow-right text-[18px] text-white" />
              </div> */}
          </Swiper>
        </div>
        <div className="faq flex flex-col xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row mt-[40px] rounded-[50px] bg-bgGreenGrey md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px] 3xl:mt-[80px] 4xl:mt-[95px]">
          <div className="questions px-[16px] py-[50px] 4xl:pl-[80px] 4xl:pt-[80px] xl:w-[60%] 2xl:w-[60%] 3xl:w-[60%] 4xl:w-[60%]">
            <h2 className="section-heading salome-small text-white">
              Common Kratom Questions
            </h2>
            <div className="accordion mt-[50px]">
                <Accordion type="single" collapsible className="w-full space-y-3">
                    <AccordionItem value="item-1" className="border-0 text-white bg-accordionBg rounded-[35px] px-4">
                        <AccordionTrigger className="no-underline hover:no-underline font-dmSans text-[20px] 2xl:text-[22px] 3xl:text-[24px] 4xl:text-[25px] text-left">What is Kratom?</AccordionTrigger>
                        <AccordionContent className="text-[16px] 2xl:text-[18px] 3xl:text-[18px] 4xl:text-[18px]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sequi voluptatibus quis qui, id cupiditate culpa laborum numquam odio modi tenetur cumque aspernatur, pariatur doloribus sed, voluptatem delectus in! Perferendis aut facilis amet similique perspiciatis optio excepturi, ex sint deserunt delectus incidunt nisi eos fugit earum aliquid sunt quasi eius.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-0 text-white bg-accordionBg rounded-[35px] px-4">
                        <AccordionTrigger className="no-underline hover:no-underline font-dmSans text-[20px] 2xl:text-[22px] 3xl:text-[24px] 4xl:text-[25px] text-left">What Does Kratom Do?</AccordionTrigger>
                        <AccordionContent className="text-[16px] 2xl:text-[18px] 3xl:text-[18px] 4xl:text-[18px]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sequi voluptatibus quis qui, id cupiditate culpa laborum numquam odio modi tenetur cumque aspernatur, pariatur doloribus sed, voluptatem delectus in! Perferendis aut facilis amet similique perspiciatis optio excepturi, ex sint deserunt delectus incidunt nisi eos fugit earum aliquid sunt quasi eius.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-0 text-white bg-accordionBg rounded-[35px] px-4">
                        <AccordionTrigger className="no-underline hover:no-underline font-dmSans text-[20px] 2xl:text-[22px] 3xl:text-[24px] 4xl:text-[25px] text-left">Is Kratom Legal?</AccordionTrigger>
                        <AccordionContent className="text-[16px] 2xl:text-[18px] 3xl:text-[18px] 4xl:text-[18px]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sequi voluptatibus quis qui, id cupiditate culpa laborum numquam odio modi tenetur cumque aspernatur, pariatur doloribus sed, voluptatem delectus in! Perferendis aut facilis amet similique perspiciatis optio excepturi, ex sint deserunt delectus incidunt nisi eos fugit earum aliquid sunt quasi eius.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-0 text-white bg-accordionBg rounded-[35px] px-4">
                        <AccordionTrigger className="no-underline hover:no-underline font-dmSans text-[20px] 2xl:text-[22px] 3xl:text-[24px] 4xl:text-[25px] text-left">What Are the Benefits of Kratom?</AccordionTrigger>
                        <AccordionContent className="text-[16px] 2xl:text-[18px] 3xl:text-[18px] 4xl:text-[18px]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sequi voluptatibus quis qui, id cupiditate culpa laborum numquam odio modi tenetur cumque aspernatur, pariatur doloribus sed, voluptatem delectus in! Perferendis aut facilis amet similique perspiciatis optio excepturi, ex sint deserunt delectus incidunt nisi eos fugit earum aliquid sunt quasi eius.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="border-0 text-white bg-accordionBg rounded-[35px] px-4">
                        <AccordionTrigger className="no-underline hover:no-underline font-dmSans text-[20px] 2xl:text-[22px] 3xl:text-[24px] 4xl:text-[25px] text-left">Is Kratom Addictive?</AccordionTrigger>
                        <AccordionContent className="text-[16px] 2xl:text-[18px] 3xl:text-[18px] 4xl:text-[18px]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sequi voluptatibus quis qui, id cupiditate culpa laborum numquam odio modi tenetur cumque aspernatur, pariatur doloribus sed, voluptatem delectus in! Perferendis aut facilis amet similique perspiciatis optio excepturi, ex sint deserunt delectus incidunt nisi eos fugit earum aliquid sunt quasi eius.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
          </div>
          <div className="xl:flex 2xl:flex 3xl:flex 4xl:flex items-center justify-end hidden xl:w-[40%] 2xl:w-[40%] 3xl:w-[40%] 4xl:w-[40%]">
            <img src="/assets/images/leaves.png" alt="leaves" className=" w-[70%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
