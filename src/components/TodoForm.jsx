import { useState } from 'react';

function TodoForm({ addTodo, categories, importanceLevels }) {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [importance, setImportance] = useState(importanceLevels[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue, category, importance);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
      />

      <div className="select-group">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="todo-select"
        >
          {categories.map(cat => (
            <option 
              key={cat} 
              value={cat} 
              className={`option-${cat.toLowerCase()}`}
        >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        <span className="select-arrow">▼</span>
      </div>

      <div className="select-group">
        <select
          value={importance}
          onChange={(e) => setImportance(e.target.value)}
          className="todo-select"
        >
          {importanceLevels.map(level => (
            <option key={level} value={level}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </option>
          ))}
        </select>
        <span className="select-arrow">▼</span>
      </div>

      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;