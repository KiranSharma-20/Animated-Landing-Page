"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri";
import combo from "../../assets/food/combo.png";
import { SlidesUp } from "../../app/page";
export default function Review() {
  return (
    <section className="my-10 mx-5">
      <div className="md:flex-row flex-col flex items-center justify-center ">
        {/* reviewsection  */}
        <div className="md:w-[50%] w-full  mx-10">
          {/* review */}
          <div>
            <div className="relative text-amber-300 text-8xl opacity-70 z-0">
              <RiDoubleQuotesR />
            </div>
            <motion.p
              variants={SlidesUp(0.4)}
              initial="initial"
              whileInView="animate"
              className=" px-9 text-lg font-semibold relative  -top-14 z-10"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              commodi repudiandae nisi doloribus facilis incidunt soluta
              sapiente ut, ullam aspernatur, in hic dolores. Quidem fugit facere
              deserunt sapiente itaque consequatur!{" "}
            </motion.p>
          </div>
          {/* prifile */}
          <motion.div
            variants={SlidesUp(0.5)}
            initial="initial"
            whileInView="animate"
            // viewport={{ once: true }}
            className="mx-5 mb-5 flex items-center justify-baseline"
          >
            <div className="px-3">
              <div className="w-12 h-12 border-1 rounded-full bg-amber-700"></div>
            </div>
            <div>
              <h4 className="font-bold">Kim Tae Hyong</h4>
              <p>Delicious</p>
            </div>
          </motion.div>
        </div>
        {/* image section */}
        <div className="md:w-[40%] w-full  py-5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-70 h-70 rounded-full relative bg-amber-300 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.2, x: 30, y: -30, rotate: 25 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-60 h-60 rounded-full flex items-center justify-center"
            >
              <Image
                src={combo}
                alt="Combo Food"
                // width={140}
                className="w-55 rounded-full  drop-shadow-[0_5px_4px_rgba(0,0,0,0.6)]"
              ></Image>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
