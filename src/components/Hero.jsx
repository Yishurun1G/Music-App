import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";

const Hero = () => {
  const albumImage = "/images/hero-album.jpg";
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-r from-black via-pink-900 to-black rounded-2xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between mb-12 shadow-2xl"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Text Section */}
      <motion.div
        className="text-center lg:text-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <h4 className="text-xs uppercase text-pink-400 tracking-widest mb-2 animate-pulse">
          New Release!
        </h4>
        <h1 className="text-5xl font-extrabold text-white drop-shadow-xl mb-2">
          Light Downs Low
        </h1>
        <p className="text-lg text-gray-300 font-medium">By MAX</p>
        <motion.button
          className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transition transform hover:scale-105"
          whileHover={{ scale: 1.08 }}
        >
          ▶ Play Now
        </motion.button>
      </motion.div>

      {/* Image / Fallback Icon */}
      <motion.div
        className="mt-10 lg:mt-0 lg:w-1/3 flex justify-center items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.9 }}
      >
        <div className="rounded-xl overflow-hidden h-48 w-48 shadow-xl border border-zinc-600 bg-black flex items-center justify-center relative group">
          {!imageError ? (
            <img
              src={albumImage}
              alt="Album Cover"
              className="object-cover w-full h-full"
              onError={() => setImageError(true)}
            />
          ) : (
            <motion.div
              className="text-pink-400"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              <FaMusic className="text-6xl drop-shadow-lg" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
