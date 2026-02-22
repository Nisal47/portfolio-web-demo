'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'VR Cardiac Training System',
      problem: 'Surgeons lacked a realistic, risk-free environment to practice complex cardiac procedures.',
      tools: ['Unity', 'Oculus Quest 2', 'C#', 'Blender'],
      impact: 'Reduced training time by 40% and improved surgical accuracy by 25%.',
      href: '/case-study/vr-cardiac-training',
    },
    {
      title: 'Electrophysiology Data Visualization',
      problem: 'Researchers struggled to interpret massive, multi-dimensional electrophysiology datasets.',
      tools: ['D3.js', 'React', 'Python', 'Jupyter'],
      impact: 'Enabled new discoveries by providing an intuitive way to explore and analyze complex neural data.',
      href: '/case-study/ep-data-visualization',
    },
    {
      title: 'AI-Based Interaction Study',
      problem: 'Understanding how users interact with AI-powered systems to improve user trust and adoption.',
      tools: ['Python', 'TensorFlow', 'React', 'Figma'],
      impact: 'Developed a framework for designing more transparent and user-friendly AI systems.',
      href: '/case-study/ai-interaction-study',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="case-studies" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Featured Case Studies</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-400 mb-4 h-24 overflow-hidden">{study.problem}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map(tool => (
                        <span key={tool} className="bg-electric-blue/20 text-electric-blue text-xs font-bold px-2 py-1 rounded-full">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6"><span className="font-semibold">Impact:</span> {study.impact}</p>
                  <Link href={study.href}>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-electric-blue to-deep-purple text-white font-semibold rounded-lg shadow-md"
                    >
                      View Case Study
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
