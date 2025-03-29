import { useState } from 'react'
import { motion } from 'framer-motion'

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)

  const handleEdit = () => {
    if (editedText.trim()) {
      editTodo(todo.id, editedText)
      setIsEditing(false)
    }
  }

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
        style={{ accentColor: 'var(--primary)' }}
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
          autoFocus
          className="edit-input"
        />
      ) : (
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: todo.completed ? 5 : 0 }}
          transition={{ type: 'spring', stiffness: 500 }}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </motion.span>
      )}
      
      <div className="todo-actions">
        {!isEditing && (
          <motion.button 
            onClick={() => setIsEditing(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="edit-btn"
          >
            ✏️
          </motion.button>
        )}
        <motion.button 
          onClick={() => deleteTodo(todo.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🗑️
        </motion.button>
      </div>
    </motion.div>
  )
}

export default TodoItem