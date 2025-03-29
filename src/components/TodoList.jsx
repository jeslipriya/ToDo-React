import TodoItem from './TodoItem.jsx'

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  )
}

export default TodoList