import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { logout } from '../Auth'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import FilterButtons from '../components/FilterButtons'
import '../styles.css'

function TodoPage() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Add this edit function
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed
    if (filter === 'pending') return !todo.completed
    return true
  })

  const handleLogout = () => {
    logout()
    window.location.href = '/login'
  }

  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Todo App
        </motion.h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      
      <TodoForm addTodo={addTodo} />
      
      <FilterButtons 
        filter={filter}
        setFilter={setFilter}
      />
      
      <AnimatePresence>
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo} 
        />
      </AnimatePresence>
    </motion.div>
  )
}

export default TodoPage