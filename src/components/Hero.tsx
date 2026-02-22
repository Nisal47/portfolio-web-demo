'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center h-screen overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-tr from-deep-purple via-electric-blue to-transparent rounded-full filter blur-3xl"
        style={{ width: '800px', height: '800px', top: '-20%', left: '-20%' }}
      />
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white mb-4"
        >
          Your Name
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-300 mb-8"
        >
          UX Researcher | Human-Centered Design | VR & Emerging Tech
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-gray-400 mb-12"
        >
          A short personal value statement about your passion for user experience, innovation, and creating meaningful digital products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }} 
          className="flex justify-center gap-4"
        >
          <Link href="#case-studies">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 191, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-electric-blue to-deep-purple text-white font-semibold rounded-full shadow-lg"
            >
              View Case Studies
            </motion.button>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/20"
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
