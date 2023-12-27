import CustomButton from "@/components/CustomUI/CustomButton";
import FAQ from "@/components/Faq";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import OurProducts from "@/components/OurProducts";
import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <OurProducts />
      <section className="what-is-kratom">
        <div className="max-w bg-green rounded-b-[24px] grid grid-cols-1 lg:grid-cols- xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 4xl:grid-cols-2">
          <div className="img">
            <img src="/assets/images/powder-bowel.png" alt="Powder" className="-mt-[30px] lg:mx-auto xl:-mt-[80px] 2xl:-mt-[80px] 3xl:-mt-[80px] 4xl:-mt-[100px]" />
          </div>
          <div className="content p-4 2xl:p-[25px] 3xl:p-[60px] 4xl:px-[60px] 4xl:py-[70px]">
          <h2 className="section-heading salome-small text-white mb-[20px] 4xl:mb-[55px]">
                What is Kratom?
            </h2>
            <p className="text-white font-dmSans text-[16px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[22px] mb-[15px] 4xl:mb-[48px]">Kratom, scientifically known as Mitragyna speciosa, is a tropical evergreen tree native to Southeast Asia, particularly Indonesia, Malaysia, Thailand, and Papua New Guinea. It belongs to the coffee family and has been traditionally used for centuries in the region for its potential medicinal properties.</p>
            <p className="text-white font-dmSans text-[16px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[22px] mb-[15px] 4xl:mb-[48px]">Kratom leaves contain active compounds, including alkaloids such as mitragynine and 7-hydroxymitragynine, which interact with receptors in the brain, producing various effects. Depending on the strain and dosage, kratom can have stimulating or sedating properties, and it is commonly used for relaxation, mood enhancement, pain relief, and as an energy booster.</p>
            <CustomButton arrowed variant={"white"}>Shop Now</CustomButton>
          </div>
        </div>
      </section>
      <FeaturedProducts />
      <div className="progress"></div>
      <div className="bg-red-500">
        <CustomButton>Button</CustomButton>
        <CustomButton variant={"white"}>Button</CustomButton>
        <CustomButton variant={"blackOutline"}>Button</CustomButton>
        <CustomButton variant={"whiteOutline"}>Button</CustomButton>
      </div>
      <FAQ />
    </div>
  );
};

export default Home;
