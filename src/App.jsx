import { useState } from "react";
import logo from "./assets/logoMobile.svg";
import viteLogo from "/vite.svg";
import {
  HiMiniBars3,
  HiMiniUser,
  HiMiniMagnifyingGlass,
  HiMiniHeart,
  HiArrowRight,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import "./App.css";
import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";
import MobileSearchbar from "./components/MobileSearchbar";
import DesktopTagline from "./components/DesktopTagline";
import MobileScrollingImages from "./components/MobileScrollingImages";
import DesktopMidSection from "./components/DesktopMidSection";
import MobileMidSection from "./components/MobileMidSection";
import MobileFooter from "./components/MobileFooter";
import DesktopFooter from "./components/DesktopFooter";

function App() {
  const imageList = [
    {
      id: 1,
      bigText: "Explore the future of electronics.",
      smallText: "Upgrade your life, one gadget at a time.",
      image:
        "https://plus.unsplash.com/premium_photo-1705262413765-5fe7a310d4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      bigText: "Explore the future of electronics.",
      smallText: "Upgrade your life, one gadget at a time.",
      image:
        "https://plus.unsplash.com/premium_photo-1705262413765-5fe7a310d4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      bigText: "Explore the future of electronics.",
      smallText: "Upgrade your life, one gadget at a time.",
      image:
        "https://plus.unsplash.com/premium_photo-1705262413765-5fe7a310d4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      id: 4,
      bigText: "Explore the future of electronics.",
      smallText: "Upgrade your life, one gadget at a time.",
      image:
        "https://plus.unsplash.com/premium_photo-1705262413765-5fe7a310d4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
  ];

  const numbersList = [1, 10, 11, 12, 13, 14, 15, 16, "..."];

  const categoryItemsList = ["Electronics", "Appliances", "Showroom"];
  return (
    <>
      <MobileHeader />

      <DesktopHeader />

      <MobileSearchbar />

      <DesktopTagline />

      <MobileScrollingImages imageList={imageList} />

      <DesktopMidSection
        numbersList={numbersList}
        categoryItemsList={categoryItemsList}
      />

      <MobileMidSection numbersList={numbersList} />

      <MobileFooter />

      <DesktopFooter />
    </>
  );
}

export default App;
