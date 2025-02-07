'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { DeveloperDialog } from './DeveloperDialog'

interface Developer {
  id: number
  name: string
  skills: string[]
  techStack: string[]
  avatar: string
  donation?: {
    amount: number
    date: string
  }
}

interface Props {
  developer: Developer
  index: number
}

function DonationBadge({ donation }: { donation?: Developer['donation'] }) {
  if (!donation) return null

  const formattedDate = new Date(donation.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <motion.div
      className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-yellow-600 px-2 py-1 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      Donated on {formattedDate}
    </motion.div>
  )
}

export function DeveloperCard({ developer, index }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <motion.div 
        className="bg-[#333] p-5 rounded-lg mb-4 flex items-center relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ x: 5 }}
      >
        <DonationBadge donation={developer.donation} />
        <img 
          src={developer.avatar} 
          alt={developer.name}
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{developer.name}</h3>
          <p className="text-[#f2f2f2]/80 text-sm mb-2">{developer.skills.join(' • ')}</p>
          <div className="flex flex-wrap gap-2">
            {developer.techStack.map(tech => (
              <span 
                key={tech}
                className="text-xs px-2 py-1 bg-[#444] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <motion.button 
          className="bg-[#007acc] text-white px-4 py-2 rounded-lg ml-4 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDialogOpen(true)}
        >
          View Profile
        </motion.button>
      </motion.div>

      <DeveloperDialog 
        developer={isDialogOpen ? developer : null}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  )
} 