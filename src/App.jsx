import { useState, useEffect } from 'react';  // Add this import
import { Routes, Route, Navigate } from 'react-router-dom';
import { getCurrentUser } from './Auth';
import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status when component mounts
    const user = getCurrentUser();
    setCurrentUser(user);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading state while checking auth
  }

  return (
    <Routes>
      <Route path="/login" element={
        !currentUser ? <LoginPage /> : <Navigate to="/todos" replace />
      } />
      <Route path="/register" element={
        !currentUser ? <RegisterPage /> : <Navigate to="/todos" replace />
      } />
      <Route path="/todos" element={
        currentUser ? <TodoPage /> : <Navigate to="/login" replace />
      } />
      <Route path="*" element={
        <Navigate to={currentUser ? "/todos" : "/login"} replace />
      } />
    </Routes>
  );
}

export default App;