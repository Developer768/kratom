"use client"
import React from "react";
import CustomButton from "./CustomUI/CustomButton";
import { useRouter } from 'next/navigation';

type Props = {
  image: string;
  name: string;
  desc: string;
  price: string;
  link: string;
};

const Products: React.FC<Props> = ({
  image = "",
  name = "",
  desc = "",
  price = "",
  link = "",
}) => {
    const { push } = useRouter();
  return (
    <div className="group w-[350px] rounded-[21px] h-[580px] border-2 bg-grey p-[25px] hover:border-lightGreen flex flex-col ">
      <div className="image flex items-center justify-center h-[350px]">
        <img src={image} alt={name} />
      </div>
      <div className="flex justify-between mt-auto">
        <div className="title w-[80%]">
          <h3 className="font-dmSans text-[24px] font-bold">{name}</h3>
          <p className="text-textGrey font-dmSans text-[16px] font-medium">
            {desc}
          </p>
        </div>
        <div className="w-[20%]">
          <h3 className="font-dmSans text-[24px] font-bold text-lightGreen">
            ${price}
          </h3>
        </div>
      </div>
      <CustomButton variant={"default"} width={"full"} className="group-hover:flex hidden mt-[20px]" onClick={()=> push(link)}>See Product</CustomButton> 
    </div>
  );
};

export default Products;
