import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getCurrentUser } from './Auth';
import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async auth check (even if getCurrentUser is synchronous)
    const checkAuth = async () => {
      const user = getCurrentUser();
      setCurrentUser(user);
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter /* basename="/" optional, only if you serve from root */>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={
          !currentUser ? <LoginPage /> : <Navigate to="/todos" replace />
        } />
        <Route path="/register" element={
          !currentUser ? <RegisterPage /> : <Navigate to="/todos" replace />
        } />
        
        {/* Protected route */}
        <Route path="/todos" element={
          currentUser ? <TodoPage /> : <Navigate to="/login" replace />
        } />
        
        {/* Default redirect */}
        <Route path="/" element={
          <Navigate to={currentUser ? "/todos" : "/login"} replace />
        } />
        <Route path="*" element={
          <Navigate to={currentUser ? "/todos" : "/login"} replace />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;