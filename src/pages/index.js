import Image from "next/image";
import localFont from "next/font/local";
import CarouselComponent from "./components/home/Carousel";
import Card from "./components/home/Cards";
import FoodCardContainer from "./components/home/FoodCardContainer";
import useSWR from "swr";

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

const url = 'https://dummyjson.com/recipes'


export default function Home() {
  const fetcher = url => fetch(url).then(r => r.json())
  const {data, error, isLoading } = useSWR(url, fetcher)


     
     
   


  console.log(data,"res::")

  return (
   <>
    <CarouselComponent />
    <FoodCardContainer foodData= {data?.recipes} />
   </>
  );
}
