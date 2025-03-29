// Mock authentication functions
export const login = async (email, password) => {
    // In a real app, this would call your backend
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(u => u.email === email && u.password === password)
    
    if (!user) throw new Error('Invalid credentials')
    
    localStorage.setItem('currentUser', JSON.stringify(user))
    return user
  }
  
  export const register = async (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    
    if (users.some(u => u.email === email)) {
      throw new Error('User already exists')
    }
    
    const newUser = { email, password, id: Date.now() }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('currentUser', JSON.stringify(newUser))
    
    return newUser
  }
  
  export const logout = () => {
    localStorage.removeItem('currentUser')
  }
  
  export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'))
  }