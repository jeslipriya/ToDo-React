// Mock authentication functions
export async function login(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || []
  const user = users.find(u => u.email === email && u.password === password)
  if (!user) {
    throw new Error("Invalid email or password")
  }

  // Save logged in user
  localStorage.setItem("user", JSON.stringify(user))  // 👈 THIS IS IMPORTANT
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
    const user = localStorage.getItem('user'); // or your actual auth check
    return user ? JSON.parse(user) : null;
  }