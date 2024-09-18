// import Image from "next/image";
import Navbar from "../sections/Navbar";
import { Hero } from '../sections/Hero';
import { Details } from '../sections/Details';

export default function Home() {
  return (
    <div className="bg-black mt-[100px] ml-[200px] mr-[200px]">
        <Navbar />
        <Details />
        <Hero />
    </div>
  );
}
