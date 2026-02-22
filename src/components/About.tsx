'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const strengths = [
    'UX Research',
    'HCI',
    'VR Prototyping',
    'Data Visualization',
    'User Testing',
  ];

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <motion.div 
              className="md:col-span-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400">Photo</span>
              </div>
            </motion.div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-300 mb-8">
                A brief and engaging bio goes here. Talk about your passion for user-centered design, your experience in emerging technologies like VR, and what drives you as a UX researcher. Keep it concise and impactful.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Key Strengths</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-center text-center"
                  >
                    <span className="font-medium">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
