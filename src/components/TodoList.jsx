import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TodoList({ todos, toggleTodo, deleteTodo, editTodo, categories, importanceLevels }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editImportance, setEditImportance] = useState('');

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
    setEditCategory(todo.category);
    setEditImportance(todo.importance);
  };

  const saveEdit = (id) => {
    editTodo(id, editText, editCategory, editImportance);
    setEditingId(null);
  };

  return (
    <div className="todo-list-container">
      <AnimatePresence>
        {todos.length === 0 ? (
          <motion.div 
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No tasks found. Add one above!
          </motion.div>
        ) : (
          <ul className="todo-list">
            {todos.map(todo => (
              <motion.li
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                layout
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="todo-checkbox"
                />

                {editingId === todo.id ? (
                  <div className="edit-container">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="edit-input"
                    />
                    <select
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      className="edit-select"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <select
                      value={editImportance}
                      onChange={(e) => setEditImportance(e.target.value)}
                      className="edit-select"
                    >
                      {importanceLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    <button onClick={() => saveEdit(todo.id)} className="save-btn">
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="todo-content">
                    <span 
                      className="todo-text"
                      onClick={() => startEdit(todo)}
                    >
                      {todo.text}
                    </span>
                    <div className="todo-meta">
                      <span className={`category-badge ${todo.category}`}>
                        {todo.category}
                      </span>
                      <span className={`importance-badge ${todo.importance}`}>
                        {todo.importance}
                      </span>
                    </div>
                  </div>
                )}

                <div className="todo-actions">
                  {editingId !== todo.id && (
                    <button 
                      onClick={() => startEdit(todo)}
                      className="edit-btn"
                    >
                      ✏️
                    </button>
                  )}
                  <button 
                    onClick={() => deleteTodo(todo.id)}
                    className="delete-btn"
                  >
                    🗑️
                  </button>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TodoList;