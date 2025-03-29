import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../Auth'
import AuthForm from '../components/AuthForm'
import '../styles.css'

function RegisterPage() {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (email, password) => {
    try {
      await register(email, password)
      navigate('/todos')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="auth-page">
      <AuthForm 
        type="register"
        onSubmit={handleSubmit}
        error={error}
      />
      <p className="auth-switch">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  )
}

export default RegisterPage