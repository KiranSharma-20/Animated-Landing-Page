"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../assets/food/logo.png";
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <div className="w-full  px-12  bg-amber-300  flex items-center justify-center flex-wrap md:gap-25 gap-2">
        <div className="md:w-[25%] h-70 md:basis-2.5 basis-0.5  px-5">
          {/* logo and details */}
          {/* logo */}
          <div>
            <Image src={logo} alt="Logo" className="w-30"></Image>
            <p className="text-sm py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              inventore quos repudiandae voluptatem id magni tempore.
            </p>
            <p className="font-bold">foodies@gmail.com</p>
          </div>
        </div>
        <div className="md:w-[25%] h-70 md:basis-2.5 basis-0.5  p-5 ">
          <h2 className="text-lg my-3 font-bold">Quick Links</h2>
          <ul className="p-2">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Contact</li>
            <li className="hover:text-white">Food</li>
          </ul>
        </div>
        <div className="md:w-[25%] h-70 md:basis-2.5 basis-0.5 p-5 ">
          <h2 className="text-lg font-bold my-3">Quick Links</h2>
          <ul className="p-2">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Contact</li>
            <li className="hover:text-white">Food</li>
          </ul>
        </div>
        <div className="md:w-[25%] h-70 md:basis-2.5 basis-0.5 p-5 ">
          <h2 className="text-lg my-3 font-bold">Quick Links</h2>
          <ul className="p-2">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Contact</li>
            <li className="hover:text-white">Food</li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}
