# To-Do List App

A simple and user-friendly **To-Do List App** built with **React.js** and Vite.

## Features 🚀
- ✅ Add new tasks with Catergory and level of importance
- ✏️ Edit tasks (optional)
- ❌ Delete tasks
- 🎯 Mark tasks as completed
- 🔍 Filter tasks (All, Completed, Pending)
- 🔒 User authentication (Login & Register) (optional)
- 💾 Stores tasks in **localStorage**
- 🌙 Dark Mode

## Project Structure 📂
```
my-todo-app/
├── public/                   # Static files
│   ├── favicon.ico           # App icon
│   ├── index.html            # Main HTML file
│
├── src/                      # Source files
│   ├── components/           # Reusable components
│   │   ├── AuthForm.jsx      # Authentication form component
│   │   ├── FilterButtons.jsx # Todo filter buttons
│   │   ├── TodoForm.jsx      # Todo input form
│   │   ├── TodoItem.jsx      # Single todo item
│   │   └── TodoList.jsx      # List of todos
│   │
│   ├── pages/                # Page components
│   │   ├── LoginPage.jsx     # Login page
│   │   ├── RegisterPage.jsx  # Registration page
│   │   └── TodoPage.jsx      # Main todo page
│   │
│   ├── utils/                # Utility functions
│   │   └── auth.js           # Authentication logic
│   │
│   ├── App.jsx               # Main app router
│   ├── main.jsx              # App entry point
│   └── styles.css            # Global styles
│
├── .gitignore                # Git ignore rules
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Lockfile
├── README.md                 # Project documentation
└── vite.config.js            # Vite configuration
```

## Installation & Setup 🛠
1. **Clone the repo**
```sh
git clone https://github.com/yourusername/my-todo-app.git
cd my-todo-app
```

2. **Install dependencies**
```sh
npm install
```

3. **Run the app**
```sh
npm run dev
```

## Technologies Used 🛠
- **React.js** - Frontend framework
- **Vite** - Build tool
- **CSS** - Styling
- **localStorage** - Data persistence

## Future Improvements ✨
- 🗑 Undo Task Deletion
- 📱 Mobile Responsive UI
- 📊 Task Statistics

## License 📜
This project is **MIT Licensed**.

---
Made by **Jesli** 🚀

