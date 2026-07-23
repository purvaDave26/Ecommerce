import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { AppRoutes } from './router/AppRoutes'
import { AuthContext } from './AuthContext'
import { ThemeContext } from './components/user/ThemeContext'

function App() {
   const [theme, settheme] = useState(localStorage.getItem("theme")||"light")
    const [tokan, settokan] = useState("");
  const [count, setCount] = useState(0)

  return (
     <AuthContext.Provider value={{tokan,settokan}}>
     <ThemeContext.Provider value={{theme,settheme}}>  

       <div  style={{
          backgroundColor: theme == "light" ? "white" : "black",
          color: theme == "light" ? "black" : "white",
        }}>
    <div>
      <AppRoutes></AppRoutes>
    </div>
    </div>
      </ThemeContext.Provider>
           </AuthContext.Provider>
  )
}

export default App
