'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer 
      className="bg-[#333] py-8 mt-16 text-center text-[#f2f2f2]/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <p className="mb-4">
          Built with ❤️ for the developer community
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <motion.a 
            href="#" 
            className="hover:text-[#007acc] transition-colors"
            whileHover={{ y: -2 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#" 
            className="hover:text-[#007acc] transition-colors"
            whileHover={{ y: -2 }}
          >
            Terms
          </motion.a>
          <motion.a 
            href="#" 
            className="hover:text-[#007acc] transition-colors"
            whileHover={{ y: -2 }}
          >
            Privacy
          </motion.a>
          <motion.a 
            href="https://github.com" 
            className="hover:text-[#007acc] transition-colors"
            whileHover={{ y: -2 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
} 