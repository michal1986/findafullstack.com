import { Developer } from '@/types/developer'
import { NextResponse } from 'next/server'

const developers: Developer[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    skills: ['JavaScript', 'React', 'Node.js'],
    techStack: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Docker'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=sarah-chen',
    donation: {
      amount: 250,
      date: '2024-03-15'
    }
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    skills: ['Python', 'Django', 'PostgreSQL'],
    techStack: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=marcus-rodriguez',
    donation: {
      amount: 500,
      date: '2024-03-20'
    }
  },
  {
    id: 3,
    name: 'Emily Thompson',
    skills: ['Java', 'Spring Boot', 'MySQL'],
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Redis'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=emily-thompson'
  },
  {
    id: 4,
    name: 'David Kim',
    skills: ['JavaScript', 'React', 'Python'],
    techStack: ['React', 'Python', 'Django', 'JavaScript', 'TypeScript'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=david-kim'
  },
  {
    id: 5,
    name: 'Lisa Patel',
    skills: ['React Native', 'TypeScript', 'Firebase'],
    techStack: ['React', 'TypeScript', 'Firebase', 'Node.js', 'MongoDB'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=lisa-patel'
  },
  {
    id: 6,
    name: 'James Wilson',
    skills: ['Go', 'Docker', 'Kubernetes'],
    techStack: ['Go', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=james-wilson'
  },
  {
    id: 7,
    name: 'Maria Garcia',
    skills: ['Vue.js', 'Node.js', 'MongoDB'],
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Docker', 'JavaScript'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=maria-garcia'
  },
  {
    id: 8,
    name: 'Alex Turner',
    skills: ['Ruby', 'Rails', 'PostgreSQL'],
    techStack: ['Ruby', 'Rails', 'PostgreSQL', 'Redis', 'Docker'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=alex-turner'
  },
  {
    id: 9,
    name: 'Sophie Anderson',
    skills: ['Angular', 'TypeScript', 'Node.js'],
    techStack: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=sophie-anderson'
  },
  {
    id: 10,
    name: 'Michael Chang',
    skills: ['Rust', 'WebAssembly', 'Docker'],
    techStack: ['Rust', 'WebAssembly', 'Docker', 'PostgreSQL', 'Redis'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=michael-chang'
  },
  {
    id: 11,
    name: 'Emma Davis',
    skills: ['PHP', 'Laravel', 'MySQL'],
    techStack: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Docker'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=emma-davis'
  },
  {
    id: 12,
    name: 'Ryan Murphy',
    skills: ['Swift', 'iOS', 'Firebase'],
    techStack: ['Swift', 'iOS', 'Firebase', 'MongoDB', 'Node.js'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=ryan-murphy'
  },
  {
    id: 13,
    name: 'Olivia Brown',
    skills: ['C#', '.NET', 'SQL Server'],
    techStack: ['C#', '.NET', 'SQL Server', 'Docker', 'Redis'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=olivia-brown'
  },
  {
    id: 14,
    name: 'Daniel Lee',
    skills: ['Kotlin', 'Android', 'Firebase'],
    techStack: ['Kotlin', 'Android', 'Firebase', 'MongoDB', 'Node.js'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=daniel-lee'
  },
  {
    id: 15,
    name: 'Isabella Martinez',
    skills: ['Scala', 'Akka', 'PostgreSQL'],
    techStack: ['Scala', 'Akka', 'PostgreSQL', 'Docker', 'Redis'],
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=isabella-martinez'
  }
]

export async function GET() {
  return NextResponse.json(developers)
} 