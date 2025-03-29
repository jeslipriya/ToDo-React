import { motion } from 'framer-motion'

const FilterButtons = ({ filter, setFilter }) => {
  const buttons = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: 'Pending' },
    { id: 'completed', label: 'Completed' }
  ]

  return (
    <div className="filter-buttons">
      {buttons.map((button) => (
        <motion.button
          key={button.id}
          onClick={() => setFilter(button.id)}
          className={filter === button.id ? 'active' : ''}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {button.label}
        </motion.button>
      ))}
    </div>
  )
}

export default FilterButtons