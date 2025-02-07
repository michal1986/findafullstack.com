'use client'

import { motion } from 'framer-motion'

export function SearchBar() {
  return (
    <motion.div 
      className="text-center my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <input
        type="text"
        placeholder="Search developers by skill, location, etc."
        className="w-[80%] max-w-xl px-4 py-3 rounded-lg bg-[#222] border border-[#444] text-[#f2f2f2] focus:outline-none focus:border-[#007acc] transition-colors"
      />
    </motion.div>
  )
} 