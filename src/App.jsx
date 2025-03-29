import { Routes, Route, Navigate } from 'react-router-dom'
import { getCurrentUser } from './Auth'
import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  const currentUser = getCurrentUser()

  return (
    <Routes>
      <Route path="/login" element={
        !currentUser ? <LoginPage /> : <Navigate to="/todos" />
      } />
      <Route path="/register" element={
        !currentUser ? <RegisterPage /> : <Navigate to="/todos" />
      } />
      <Route path="/todos" element={
        currentUser ? <TodoPage /> : <Navigate to="/login" />
      } />
      <Route path="*" element={
        <Navigate to={currentUser ? "/todos" : "/login"} />
      } />
    </Routes>
  )
}

export default App