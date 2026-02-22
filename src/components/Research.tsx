'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Research = () => {
  const publications = [
    {
      title: 'The Impact of Haptic Feedback in VR Training',
      source: 'CHI Conference on Human Factors in Computing Systems',
      year: '2023',
      href: '#',
    },
    {
      title: 'Measuring Cognitive Load in Complex Data Visualization Tools',
      source: 'IEEE Transactions on Visualization and Computer Graphics',
      year: '2022',
      href: '#',
    },
    {
      title: 'User Trust in AI-Driven Recommendation Systems',
      source: 'Journal of Human-Computer Interaction',
      year: '2021',
      href: '#',
    },
    {
        title: 'An HCI Experiment on Gesture-based Controls in Augmented Reality',
        source: 'ACM Symposium on User Interface Software and Technology',
        year: '2020',
        href: '#',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="research" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Research & Publications</h2>
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <Link href={pub.href} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-semibold text-electric-blue hover:underline">{pub.title}</h3>
                    <p className="text-gray-400 mt-2">{pub.source}, {pub.year}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
