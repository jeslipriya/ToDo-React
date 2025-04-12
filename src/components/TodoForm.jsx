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

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="todo-select"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select
        value={importance}
        onChange={(e) => setImportance(e.target.value)}
        className="todo-select"
      >
        {importanceLevels.map(level => (
          <option key={level} value={level}>{level}</option>
        ))}
      </select>

      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;