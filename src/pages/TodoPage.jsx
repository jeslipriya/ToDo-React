import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { logout } from '../Auth';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import '../styles.css';

function TodoPage() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Filter states
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [importanceFilter, setImportanceFilter] = useState('all');

  // Available options
  const categories = ['work', 'personal', 'shopping', 'health', 'other'];
  const importanceLevels = ['low', 'medium', 'high', 'urgent'];

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category, importance) => {
    const newTodo = {
      id: Date.now(),
      text,
      category,
      importance,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText, newCategory, newImportance) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { 
          ...todo, 
          text: newText,
          category: newCategory,
          importance: newImportance
        } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    // Status filter
    if (statusFilter === 'completed' && !todo.completed) return false;
    if (statusFilter === 'pending' && todo.completed) return false;
    
    // Category filter
    if (categoryFilter !== 'all' && todo.category !== categoryFilter) return false;
    
    // Importance filter
    if (importanceFilter !== 'all' && todo.importance !== importanceFilter) return false;
    
    return true;
  });

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="app" data-theme="pastel">
      <div className="header">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Todo App
        </motion.h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <TodoForm 
        addTodo={addTodo} 
        categories={categories}
        importanceLevels={importanceLevels}
      />

      <div className="filters-container">
        <div className="filter-group">
          <h3>Status</h3>
          <div className="filter-buttons">
            {['all', 'pending', 'completed'].map(filter => (
              <button
                key={filter}
                className={statusFilter === filter ? 'active' : ''}
                onClick={() => setStatusFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3>Category</h3>
          <div className="filter-buttons">
            {['all', ...categories].map(cat => (
              <button
                key={cat}
                className={categoryFilter === cat ? 'active' : ''}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3>Importance</h3>
          <div className="filter-buttons">
            {['all', ...importanceLevels].map(level => (
              <button
                key={level}
                className={importanceFilter === level ? 'active' : ''}
                onClick={() => setImportanceFilter(level)}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        categories={categories}
        importanceLevels={importanceLevels}
      />
    </div>
  );
}

export default TodoPage;