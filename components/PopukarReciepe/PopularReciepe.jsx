"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import sandwitch from "../../assets/food/sandwitch.png";
import idli from "../../assets/food/idli.png";
import eggs from "../../assets/food/eggs.png";
import { SlidesUp } from "../../app/page";
const popularItems = [
  {
    id: 1,
    name: "Sandwitch",
    image: sandwitch,
    price: "150rs",
    width: 90,
    delay: 0.1,
  },
  {
    id: 2,
    name: "Idli",
    image: idli,
    price: "60rs",
    width: 80,
    delay: 0.2,
  },
  {
    id: 3,
    name: "Boiled Eggs",
    image: eggs,
    price: "30rs",
    width: 90,
    delay: 0.3,
  },
];
export default function PopularReciepe() {
  return (
    <motion.section className="my-4 ">
      {/* heading */}
      <div className="my-8">
        <motion.h1
          variants={SlidesUp(0.3)}
          initial="initial"
          whileInView="animate"
          className="text-3xl uppercase font-bold text-center"
        >
          Our Popular Reciepe
        </motion.h1>
      </div>
      {/* menu section */}
      <div className="flex md:flex-row flex-col items-center justify-center gap-15">
        {popularItems.map((item) => {
          return (
            <motion.div
              variants={SlidesUp(item.delay)}
              initial="initial"
              whileInView="animate"
              className="w-35 h-55 p-2 mb-2 flex-col items-center justify-center shadow-xl"
              key={item.id}
            >
              {/* image section */}
              <div className="h-[40%] flex items-center justify-center p-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={item.width}
                  loading="eager"
                  className="drop-shadow-[0_5px_4px_rgba(0,0,0,0.6)] hover:scale-115 hover:translate-x-10 hover:-translate-y-10 hover:rotate-25 duration-75"
                ></Image>
              </div>
              {/* text-area */}

              <div className="h-[60%] p-2 flex-col items-center justify-center">
                <div className="h-7 w-20 text-xs text-black rounded-3xl bg-lime-500 flex items-center justify-center  p-3 mx-3 font-bold  opacity-0 hover:opacity-100">
                  Buy Now
                </div>
                <h3 className=" text-lg font-bold flex items-center justify-center">
                  {item.name}
                </h3>
                <p className="text-emerald-800 font-bold flex items-center justify-center">
                  {item.price}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
