import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import myImage from "../assets/contact.jpg"; // Update this with the path to your image

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_iixrozh", "template_x0wgbi2", form.current, {
        publicKey: "g_UYx3vo816J_2HGl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Starts small and invisible
    visible: { opacity: 1, scale: 1 }, // Grows to full size and becomes visible
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <motion.h2
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact Me
      </motion.h2>
      <div className="flex items-center justify-center ">
        {/* Left Image */}
        <motion.img
          src={myImage}
          height={450}
          width={450}
          alt="Contact"
          className="object-cover mr-8 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 0.8 }}
        />

        {/* Right Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2, duration: 0.8 }}
          className="p-6 max-w-lg space-y-4 bg-black bg-opacity-0 rounded-lg shadow-lg"
        >
          <motion.label
            htmlFor="from_name"
            variants={formVariants}
            transition={{ duration: 0.5 }}
            className="block text-lg font-medium text-white"
          >
            Name
          </motion.label>
          <motion.input
            type="text"
            name="from_name"
            variants={formVariants}
            transition={{ duration: 0.5 }}
            className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <motion.label
            htmlFor="from_email"
            variants={formVariants}
            transition={{ duration: 0.5 }}
            className="block text-lg font-medium text-white"
          >
            Email
          </motion.label>
          <motion.input
            type="email"
            name="from_email"
            variants={formVariants}
            transition={{ duration: 0.5 }}
            className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <motion.label
            htmlFor="message"
            variants={formVariants}
            transition={{ duration: 0.5 }}
            className="block text-lg font-medium text-white"
          >
            Message
          </motion.label>
          <motion.textarea
            name="message"
            variants={formVariants}
            transition={{ duration: 0.5 }}
            className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <motion.button
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-4 py-2 bg-white text-black  rounded-full hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </>
  );
};

export default Contact;
