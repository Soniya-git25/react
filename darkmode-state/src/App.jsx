import './App.css'
import React from 'react'

function App() {

  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const mode = isDarkMode ? 'dark-mode' : 'light-mode'
  

  return (
    <>
      <div className={mode}>
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>

        <button onClick={ () => setIsDarkMode(!isDarkMode) }>Bytt til {isDarkMode ? "light" : "dark"} mode</button>

      </div>
    </>
  )
}

export default App
