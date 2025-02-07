'use client'

import { motion } from 'framer-motion'
import { create } from 'zustand'

interface FilterStore {
  selectedTechs: string[]
  toggleTech: (tech: string) => void
  clearFilters: () => void
}

export const useFilterStore = create<FilterStore>((set) => ({
  selectedTechs: [],
  toggleTech: (tech) => 
    set((state) => ({
      selectedTechs: state.selectedTechs.includes(tech)
        ? state.selectedTechs.filter(t => t !== tech)
        : [...state.selectedTechs, tech]
    })),
  clearFilters: () => set({ selectedTechs: [] })
}))

const techStacks = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'Go',
  'Rust',
  'Ruby',
  'PHP',
  'C#',
  'Scala',
  'Swift',
  'Kotlin',
  'React',
  'Vue.js',
  'Angular',
  'Node.js',
  'Django',
  'Spring Boot',
  'Rails',
  'Laravel',
  '.NET',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Firebase',
  'Redis',
  'Docker',
  'Kubernetes',
  'WebAssembly',
  'iOS',
  'Android'
]

export function TechFilters() {
  const { selectedTechs, toggleTech, clearFilters } = useFilterStore()

  return (
    <motion.div 
      className="max-w-3xl mx-auto px-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex flex-wrap gap-2 justify-center">
        {techStacks.map((tech, index) => (
          <motion.button
            key={tech}
            className={`px-4 py-2 rounded-full border border-[#444] text-sm transition-colors
              ${selectedTechs.includes(tech) 
                ? 'bg-[#007acc] border-[#007acc]' 
                : 'hover:bg-[#444]'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            onClick={() => toggleTech(tech)}
          >
            {tech}
          </motion.button>
        ))}
      </div>
      {selectedTechs.length > 0 && (
        <motion.div 
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
            onClick={clearFilters}
            className="text-sm text-[#007acc] hover:text-[#005f99]"
          >
            Clear filters
          </button>
        </motion.div>
      )}
    </motion.div>
  )
} 