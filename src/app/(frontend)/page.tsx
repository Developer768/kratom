import CustomButton from "@/components/CustomUI/CustomButton";
import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <div className="progress"></div>
      <div className="bg-red-500">
        <CustomButton>Button</CustomButton>
        <CustomButton variant={"white"}>Button</CustomButton>
        <CustomButton variant={"blackOutline"}>Button</CustomButton>
        <CustomButton variant={"whiteOutline"}>Button</CustomButton>
      </div>
    </div>
  );
};

export default Home;
