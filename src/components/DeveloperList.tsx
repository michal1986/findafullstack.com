'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DeveloperCard } from './DeveloperCard'
import { useFilterStore } from './TechFilters'
import { Developer } from '@/types/developer'

export function DeveloperList() {
  const [developers, setDevelopers] = useState<Developer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { selectedTechs } = useFilterStore()

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await fetch('/api/developers')
        const data = await response.json()
        setDevelopers(data)
      } catch (error) {
        console.error('Error fetching developers:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDevelopers()
  }, [])

  const filteredDevelopers = developers
    .filter(developer => {
      if (selectedTechs.length === 0) return true
      return selectedTechs.every(tech => 
        developer.techStack.includes(tech)
      )
    })
    .sort((a, b) => ((b.donation?.amount || 0) - (a.donation?.amount || 0)))

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.p 
          className="text-center text-[#f2f2f2]/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading developers...
        </motion.p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pb-8">
      {filteredDevelopers.length === 0 ? (
        <motion.p 
          className="text-center text-[#f2f2f2]/60 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No developers found matching selected filters
        </motion.p>
      ) : (
        filteredDevelopers.map((developer, index) => (
          <DeveloperCard 
            key={developer.id}
            developer={developer}
            index={index}
          />
        ))
      )}
    </div>
  )
} 