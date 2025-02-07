export interface Developer {
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