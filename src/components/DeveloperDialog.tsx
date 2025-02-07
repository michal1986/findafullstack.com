'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Developer } from './DeveloperList'

interface Props {
  developer: Developer | null
  onClose: () => void
}

export function DeveloperDialog({ developer, onClose }: Props) {
  if (!developer) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-[#333] rounded-xl w-full max-w-2xl overflow-hidden"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <motion.button
              className="absolute right-4 top-4 text-[#f2f2f2]/60 hover:text-[#f2f2f2] p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              ✕
            </motion.button>
            
            <div className="p-8">
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src={developer.avatar} 
                  alt={developer.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-2">{developer.name}</h2>
                  <p className="text-[#f2f2f2]/60">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Main Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {developer.skills.map(skill => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-[#007acc] rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {developer.techStack.map(tech => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-[#444] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-[#f2f2f2]/80 leading-relaxed">
                    Experienced full-stack developer with a passion for building scalable applications.
                    Specialized in {developer.skills.join(', ')} with extensive knowledge of modern development practices.
                  </p>
                </div>

                <div className="border-t border-[#444] pt-6">
                  <h3 className="text-lg font-semibold mb-4">Support This Developer</h3>
                  <p className="text-[#f2f2f2]/80 mb-4">
                    Help keep this platform free by supporting our developers. Top donors get priority placement in the list.
                  </p>
                  <div className="flex gap-2">
                    {[5, 10, 25, 50, 100].map(amount => (
                      <motion.button
                        key={amount}
                        className="flex-1 bg-[#444] hover:bg-[#555] py-2 rounded-lg text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          // Here you would integrate with a payment provider like Stripe
                          alert(`Donate $${amount} to ${developer.name}`)
                        }}
                      >
                        ${amount}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="w-full bg-[#007acc] text-white py-3 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Developer
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 