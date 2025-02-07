'use client'

import { motion } from 'framer-motion'
import { DeveloperList } from '../components/DeveloperList'
import { SearchBar } from '../components/SearchBar'
import { Header } from '../components/Header'
import { TechFilters } from '../components/TechFilters'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f2f2f2] flex flex-col">
      <Header />
      <main className="flex-grow">
        <SearchBar />
        <TechFilters />
        <DeveloperList />
      </main>
      <Footer />
    </div>
  )
} 