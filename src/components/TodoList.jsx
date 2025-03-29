import { AnimatePresence, motion } from 'framer-motion'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <div className="todo-list">
      <AnimatePresence>
        {todos.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No tasks found. Add one above!
          </motion.p>
        ) : (
          todos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <TodoItem
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  )
}

export default TodoList