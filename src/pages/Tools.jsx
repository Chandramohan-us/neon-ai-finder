import { useEffect, useState } from 'react'
import ToolCard from '../components/ToolCard'

const Tools = () => {
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')

  useEffect(() => {
    // Simulate API fetch
    const fetchTools = () => {
      setLoading(true)
      setTimeout(() => {
        setTools([
          {
            id: 1,
            name: "ChatGPT",
            emoji: "🤖",
            category: "Writing",
            description: "Advanced AI chatbot that helps with essay writing, research, and coding.",
            link: "https://chat.openai.com",
            rating: 4.8
          },
          {
            id: 2,
            name: "GitHub Copilot",
            emoji: "💻",
            category: "Coding",
            description: "AI pair programmer that suggests code in real-time.",
            link: "https://github.com/features/copilot",
            rating: 4.7
          },
          {
            id: 3,
            name: "Elicit",
            emoji: "🔍",
            category: "Research",
            description: "AI research assistant that helps find and summarize academic papers.",
            link: "https://elicit.org",
            rating: 4.5
          },
          {
            id: 4,
            name: "Notion AI",
            emoji: "📝",
            category: "Productivity",
            description: "AI-powered workspace for notes, tasks, and databases.",
            link: "https://www.notion.so/product/ai",
            rating: 4.6
          },
          {
            id: 5,
            name: "Midjourney",
            emoji: "🎨",
            category: "Design",
            description: "AI art generator for creating stunning visuals from text prompts.",
            link: "https://www.midjourney.com",
            rating: 4.4
          },
          {
            id: 6,
            name: "Grammarly",
            emoji: "✍️",
            category: "Writing",
            description: "AI writing assistant that checks grammar and suggests improvements.",
            link: "https://www.grammarly.com",
            rating: 4.3
          }
        ])
        setLoading(false)
      }, 1000)
    }

    fetchTools()
  }, [])

  const categories = ['All', ...new Set(tools.map(tool => tool.category))]
  
  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'All' || tool.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2 neon-text-blue font-orbitron">
          AI Tools Explorer
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Discover the best AI tools for your academic needs
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-3 top-3.5 text-gray-500">
              🔍
            </span>
          </div>
          
          <select
            className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-purple transition-all duration-300"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="h-64 bg-gray-900/50 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl text-gray-400 mb-2">No tools found</h3>
            <p className="text-gray-500">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Tools
