"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/food/logo.png";
import { motion } from "framer-motion";
import { IoCartOutline } from "react-icons/io5";

const menu = [
  { id: 1, name: "Home", path: "/", delay: 0.1 },
  { id: 2, name: "About", path: "/about", delay: 0.4 },
  { id: 3, name: "Menu", path: "/menu", delay: 0.7 },
  { id: 4, name: "Contact Us", path: "/contact", delay: 1 },
];

const SlideDown = (delay) => {
  return {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, delay: delay } },
  };
};
export default function NavBar() {
  return (
    <div className="h-17 md:h-20 w-full   flex items-center justify-between p-2 pt-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* logo */}
        <Image src={logo} alt="Logo" loading="eager" className="w-20 md:w-30" />
      </motion.div>
      <div>
        {/* menu */}
        <ul className="flex items-center gap-3 md:gap-15 ">
          {menu.map((item) => {
            return (
              <motion.li
                variants={SlideDown(item.delay)}
                initial="initial"
                animate="animate"
                // data-delay={item.delay}
                key={item.id}
                className="text-m md:text-xl font-bold "
              >
                <Link href={item.path}> {item.name}</Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <motion.div
        variants={SlideDown(1.4)}
        initial="initial"
        animate="animate"
        // initial={{ y: "-100% ", opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        className="h-7 w-7 md:h-9 md:w-9 md:m-4 rounded-full bg-black font-semibold text-white flex items-center justify-center gap-3"
      >
        {/* cart */}
        <IoCartOutline />
      </motion.div>
    </div>
  );
}
