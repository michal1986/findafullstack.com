'use client'

import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header 
      className="bg-[#333] py-12 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hire Full Stack Developers
      </motion.h1>
      <motion.p 
        className="text-[#f2f2f2]/80 max-w-2xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        In the era of AI, fullstack developers have become the 'one-man army' —
        <br />
        capable of building entire applications from start to finish.
        <span className="text-[#007acc] font-semibold block mt-2">
          Hire someone today.
        </span>
      </motion.p>
    </motion.header>
  )
} 