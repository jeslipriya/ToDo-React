import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../Auth'
import AuthForm from '../components/AuthForm'
import '../styles.css'

function LoginPage() {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (email, password) => {
    try {
      await login(email, password)
      window.location.href = "/todos";
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="auth-page">
      <AuthForm 
        type="login"
        onSubmit={handleSubmit}
        error={error}
      />
      <p className="auth-switch">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  )
}

export default LoginPage