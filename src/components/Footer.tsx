import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="3xl:py-[70px] 4xl:py-[90px] w-full bg-darkGreen py-[40px] font-dmSans text-white md:py-[40px] lg:py-[50px] xl:py-[50px] 2xl:py-[50px]">
    <div className="footer max-w 4xl:px-0 flex flex-col gap-[30px] border-b border-b-white px-4 py-[25px] xl:flex-wrap xl:flex-row xl:justify-between 2xl:flex-wrap 2xl:flex-row 3xl:flex-wrap 3xl:flex-row 3xl:justify-between  4xl:flex-row">
        {/* Info */}
        <div className="info mr-auto 3xl:mr-0 4xl:mr-0 4xl:w-[35%]">
          <div className="mb-[40px] w-fit">
            <Link href={"/"}>
              <img
                src="/assets/images/whiteLogo.png"
                alt="Kratom"
                className="3xl:w-[250px] 4xl:w-[250px] w-[200px] max-w-[250px] md:w-[200px] xl:w-[250px] 2xl:w-[250px]"
              />
            </Link>
          </div>
          <div className="mb-[8px] flex items-center gap-3">
            <div className="icon bg-bgGreenGrey flex aspect-square w-[44px] items-center justify-center rounded-full">
              <img src="/assets/svgs/phone-icon.svg" alt="phone" />
            </div>
            <p className="w-fit font-dmSans text-[18px]">
              <Link href={"#"}>(+1) 000 000 0000</Link>
            </p>
          </div>
          <div className="mb-[8px] flex items-center gap-3">
            <div className="icon bg-bgGreenGrey flex aspect-square w-[44px] items-center justify-center rounded-full">
              <img src="/assets/svgs/mail-icon.svg" alt="phone" />
            </div>
            <p className="w-fit font-dmSans text-[18px]">
              <Link href={"#"}>kratom@gmail.com</Link>
            </p>
          </div>
          <div className="flex items-center gap-3 ">
            <div className="icon bg-bgGreenGrey flex aspect-square w-[44px] items-center justify-center rounded-full">
              <img src="/assets/svgs/location-icon.svg" alt="phone" />
            </div>
            <p className="w-fit font-dmSans text-[18px]">
              <Link href={"#"}>
                Lorem Ipsum is simply dummy text of the printing
              </Link>
            </p>
          </div>
        </div>
        {/*  Quick Links */}
        <div className="quick-links flex flex-col min-w-[260px] 4xl:w-[15%]">
          <h3 className="mb-[32px] text-[24px] text-lightGreen">Quick Links</h3>
          <p className="mb-4 w-fit text-[18px] text-white">
            <Link href={"/"}>Home</Link>
          </p>
          <p className="mb-4 w-fit text-[18px] text-white">
            <Link href={"/about-us"}>About Us</Link>
          </p>
          <div className="socials flex items-center gap-3">
            <Link href={"#"}>
              <div className="icon bg-bgGreenGrey flex aspect-square w-[44px] items-center justify-center rounded-full">
                <img src="/assets/svgs/facebook-icon.svg" alt="facebook" />
              </div>
            </Link>
            <Link href={"#"}>
              <div className="icon bg-bgGreenGrey flex aspect-square w-[44px] items-center justify-center rounded-full">
                <img src="/assets/svgs/instagram-icon.svg" alt="instagram" />
              </div>
            </Link>
          </div>
        </div>
        {/* Our Products */}
        <div className="our-product flex flex-col min-w-[320px] 4xl:w-[20%]">
          <h3 className="mb-[32px] text-[24px] text-lightGreen">
            Our Products
          </h3>
          <p className="mb-4 w-fit text-[18px] text-white">
            <Link href={"/products/kratom-capsule"}>Kratom Capsule</Link>
          </p>
          <p className="mb-4 w-fit text-[18px] text-white">
            <Link href={"/products/kratom-gummies"}>Kratom Gummies</Link>
          </p>
          <p className="mb-4 w-fit text-[18px] text-white">
            <Link href={"/products/kratom-liquid-shot"}>
              Kratom Liquid Shot
            </Link>
          </p>
          <p className="mb-4 w-fit text-[18px] text-white">
            <Link href={"/products/kratom-powder"}>Kratom Powder</Link>
          </p>
        </div>
        {/* Newsletter */}
        <div className="newsletter flex flex-col min-w-[320px] 4xl:w-[30%]">
          <h3 className="mb-[32px] text-[24px] text-lightGreen">
            Join Our Community
          </h3>
          <p className="mb-4 w-fit text-[18px] text-white">
            Become a valued member of our community and unlock a world of
            inspiration, latest updates and exclusive rewards.
          </p>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="copyright-footer max-w 4xl:px-0 3xl:flex-row 4xl:flex-row flex flex-col items-center justify-between gap-[12px] px-4 py-[25px] lg:flex-row xl:flex-row 2xl:flex-row">
        <ul className="3xl:flex-row 4xl:flex-row flex flex-col flex-wrap items-center gap-[12px] font-dmSans text-[16px] lg:flex-row xl:flex-row 2xl:flex-row">
          <li className="w-fit ">
            <Link href={"/terms-of-services"}>Terms of Services</Link>
          </li>
          <li className="w-fit ">
            <Link href={"/terms-and-conditions"}>Terms and Conditions</Link>
          </li>
          <li className="w-fit ">
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </li>
        </ul>
        <p className="font-dmSans text-[16px] ">
          © 2023 All Right Reserved by Kratom
        </p>
      </div>
    </footer>
  );
};

export default Footer;
