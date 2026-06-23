"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import leaf from "../assets/food/leaf.png";
import food from "../assets/food/food.png";
import banana from "../assets/food/banana2.png";
import spoon from "../assets/food/spoon.png";
import { IoCartOutline } from "react-icons/io5";

export const SlidesUp = (delay: number) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

export default function Home() {
  return (
    <main className="w-full lg:h-115 md:h-115 h-190 relative overflow-hidden ">
      <div className=" md:h-115 h-190 w-full     flex-2 md:flex ">
        <div className=" md:h-115  h-70 w-full md:w-[50%]  flex flex-col items-center justify-center md:items-baseline-last   space-y-4">
          {/* text section  */}
          <motion.div
            variants={SlidesUp(0.3)}
            initial="initial"
            whileInView="animate"
            className="flex gap-1 "
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl [-webkit-text-stroke:2px_black] text-transparent text font-bold">
              YUMMY
            </h1>
            <div>
              {/* leaf */}
              <Image src={leaf} alt="leaf" width={24}></Image>
            </div>
          </motion.div>
          <motion.div
            variants={SlidesUp(0.4)}
            initial="initial"
            whileInView="animate"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
              BREAKFAST
            </h1>
          </motion.div>
          <motion.div
            variants={SlidesUp(0.5)}
            initial="initial"
            whileInView="animate"
            className="text-xs "
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </motion.div>
          <motion.div
            variants={SlidesUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="h-10 w-34 text-sm text-black rounded-3xl bg-lime-500 flex items-center justify-center gap-2 p-3  font-bold  hover:scale-110"
          >
            {/* button */}
            <div>
              {/* cart */} <IoCartOutline />
            </div>
            <div>Order Now</div>
          </motion.div>
        </div>
        <div className=" md:h-115 h-100 w-full md:w-[50%] aspect-square mx-auto  relative flex items-baseline-last justify-center z-20 ">
          {/* image section */}
          <div className="lg:w-[500px] lg:h-[400px] lg:ml-55   w-[300px] h-[300px] absolute ">
            <motion.div
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {" "}
              <Image
                src={food}
                alt="food"
                className="lg:w-70 w-50  absolute  left-15 z-2  rotate-[-5deg] drop-shadow-[0_5px_7px_rgba(0,0,0,0.6)]"
              ></Image>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {" "}
              <Image
                src={spoon}
                alt="spoon"
                className="lg:w-62.5  w-45 absolute  
                lg:-bottom-4 bottom-1 -rotate-85 z-2 drop-shadow-[0_5px_7px_rgba(0,0,0,0.6)]"
              ></Image>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {" "}
              <Image
                src={banana}
                alt="banana"
                className="lg:w-54 w-35 absolute lg:left-55 left-45  z-2   drop-shadow-[0_5px_7px_rgba(0,0,0,0.6)]"
              ></Image>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
        whileInView={{
          opacity: 1,
          rotate: 0,
          x: 0,
          y: 0,
          transition: { duration: 0.8 },
        }}
        className="h-[2500px] w-[2500px] absolute   md:-top-20 -top-30 left-45 md:left-75 lg:left-155 rotate-47 md:rotate-49 lg:rotate-55 bg-amber-300 z-0 "
      ></motion.div>
    </main>
  );
}
