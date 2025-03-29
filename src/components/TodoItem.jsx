import { motion } from 'framer-motion'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <motion.div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      whileHover={{ scale: 1.01 }}
    >
      <motion.input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        whileTap={{ scale: 0.9 }}
      />
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: todo.completed ? 5 : 0 }}
        transition={{ type: 'spring', stiffness: 500 }}
      >
        {todo.text}
      </motion.span>
      <motion.button 
        onClick={() => deleteTodo(todo.id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Delete
      </motion.button>
    </motion.div>
  )
}

export default TodoItem