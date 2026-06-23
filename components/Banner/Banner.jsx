"use client";
import banner from "../../assets/food/banner.png";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { SlidesUp } from "../../app/page";

export default function Banner() {
  return (
    <section className="m-10 mt-20 md:flex flex:col items-center justify-center ">
      {/* image section */}
      <div className="md:w-[50%] flex items-center justify-center mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-70 h-70 rounded-full bg-amber-300"
        >
          <motion.div
            initial={{ opacity: 0, x: -100, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{ scale: 1.07, rotate: 20, x: 50, y: -50 }}
            transition={{ duration: 0.6, delay: 0.5, scale: 0.5 }}
          >
            <Image
              src={banner}
              alt="banner image"
              className="w-65 relative left-4 top-3 z-10 img-shadow"
            ></Image>
          </motion.div>
        </motion.div>
      </div>
      {/* text section */}
      <div className="md:w-[50%] p-3 md:flex flex-col items-baseline justify-center">
        <motion.h1
          variants={SlidesUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="m-3 text-4xl font-bold"
        >
          THE BEST YUMMY FOOD IN THE TOWN
        </motion.h1>
        <motion.p
          variants={SlidesUp(0.5)}
          initial="initial"
          whileInView="animate"
          // viewport={{ once: true }}
          className="text-sm m-3"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          eius commodi totam adipisci quas eos delectus blanditiis impedit cum,
          earum odio temporibus vel nobis iusto! Placeat ratione dolores nisi
          amet?
        </motion.p>
        <motion.div
          variants={SlidesUp(0.6)}
          initial="initial"
          whileInView="animate"
          // viewport={{ once: true }}
          className="h-10 w-34 text-sm text-black rounded-3xl bg-lime-500 flex items-center justify-center gap-2 p-3 m-4 font-bold  hover:scale-110"
        >
          {/* button */}
          <div>
            {/* cart */} <IoCartOutline />
          </div>
          <div>Order Now</div>
        </motion.div>
      </div>
    </section>
  );
}
