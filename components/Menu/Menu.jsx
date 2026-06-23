"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import parathha from "../../assets/food/parathha.png";
import poha from "../../assets/food/poha.png";
import salad from "../../assets/food/salad.png";
import { SlidesUp } from "../../app/page";

const menuItems = [
  {
    id: 1,
    name: "Paratha",
    image: parathha,
    price: "120rs",
    width: 60,
    delay: 0.1,
  },
  {
    id: 2,
    name: "Poha",
    image: poha,
    price: "40rs",
    width: 50,
    delay: 0.2,
  },
  {
    id: 3,
    name: "Salad",
    image: salad,
    price: "80rs",
    width: 60,
    delay: 0.3,
  },
];
export default function Menu() {
  return (
    <section>
      {/* head-section */}
      <motion.div
        variants={SlidesUp(0.3)}
        initial="initial"
        whileInView="animate"
        className="h-10 w-80  md:m-15 m-10 my-18"
      >
        <motion.h3
          variants={SlidesUp(0.5)}
          initial="initial"
          whileInView="animate"
          className="text-2xl text-emerald-800 font-semibold"
        >
          What's on your mind?
        </motion.h3>
      </motion.div>
      <div className="mx-10  flex flex-col  md:flex-row md:flex-wrap items-center justify-center gap-5 mb-10 ">
        {menuItems.map((item) => {
          return (
            <motion.div
              variants={SlidesUp(item.delay)}
              initial="initial"
              whileInView="animate"
              key={item.id}
              className="w-60 h-20   shadow-xl flex items-center m-2 p-2 gap-3"
            >
              <div className="px-3">
                {" "}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={item.width}
                  loading="eager"
                  className=" rounded-full hover:rotate-35 transition-all duration-75 hover:scale-120 drop-shadow-[0_5px_4px_rgba(0,0,0,0.6)]"
                />
              </div>
              <div className="mx-2">
                <h4 className="text-md font-bold">{item.name}</h4>
                <p className="text-sm text-emerald-800 font-semibold ">
                  {item.price}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
