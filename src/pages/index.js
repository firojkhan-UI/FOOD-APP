import Image from "next/image";
import localFont from "next/font/local";
import CarouselComponent from "./components/home/Carousel";
import Card from "./components/home/Cards";
import FoodCardContainer from "./components/home/FoodCardContainer";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [data, setData] = useState([])

  useEffect( () => {
    ( async () => {
      const foodData = await fetch('https://dummyjson.com/recipes')
      const res = await foodData.json()
      setData(res?.recipes)
    } )()
  }, [] )

  console.log(data,"res::")

  return (
   <>
    <CarouselComponent />
    <FoodCardContainer foodData= {data} />
   </>
  );
}
