import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { BiLogoRedux } from "react-icons/bi";
import { animate, easeIn, motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <>
      <div className="pb-24">
        <motion.h2
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarients(2.5)}
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarients(3)}
            className="p-4"
          >
            <TbBrandJavascript className="text-7xl" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarients(5)}
            className="p-4"
          >
            <SiMongodb className="text-7xl text-cyan-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarients(2)}
            className="p-4"
          >
            <BiLogoRedux className="text-7xl text-red-700" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarients(6)}
            className="p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarients(4)}
            className="p-4"
          >
            <GrMysql className="text-7xl text-sky-700" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Technologies;
