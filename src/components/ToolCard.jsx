const ToolCard = ({ tool }) => {
  const glowColor = {
    'Writing': 'var(--neon-blue)',
    'Coding': 'var(--neon-green)',
    'Research': 'var(--neon-pink)',
    'Productivity': 'var(--neon-purple)',
    'Design': 'var(--neon-orange)'
  }[tool.category]

  return (
    <div 
      className="relative bg-black/50 rounded-xl p-6 h-full flex flex-col border border-gray-800 hover:border-opacity-50 transition-all duration-300 group overflow-hidden"
      style={{
        boxShadow: `0 0 15px ${glowColor}`,
        borderColor: glowColor
      }}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)`
        }}
      />
      
      <div className="flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              background: `rgba(${glowColor.replace(')', ', 0.1)').replace('var(', '')}`,
              boxShadow: `0 0 10px ${glowColor}`
            }}
          >
            <span className="text-2xl">{tool.emoji}</span>
          </div>
          <h3 className="text-xl font-bold" style={{ color: glowColor }}>
            {tool.name}
          </h3>
        </div>
        
        <p className="text-gray-300 mb-6">{tool.description}</p>
      </div>
      
      <div className="flex justify-between items-center">
        <span 
          className="px-3 py-1 rounded-full text-xs font-medium"
          style={{
            background: `rgba(${glowColor.replace(')', ', 0.2)').replace('var(', '')}`,
            color: glowColor
          }}
        >
          {tool.category}
        </span>
        
        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
          style={{
            background: glowColor,
            color: 'black',
            boxShadow: `0 0 10px ${glowColor}`
          }}
        >
          Visit
        </a>
      </div>
    </div>
  )
}

export default ToolCard
