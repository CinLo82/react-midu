
import { useState } from 'react'
import './App.css'

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <a href="/about">Ir a sobre nosotros</a>
    </>
  )
}


function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <img src="https://pbs.twimg.com/profile_images/1552781324120797189/4teiG-tX_400x400.jpg" alt="foto cinlo" />
      <p>Hola! Me llamo CinLo y estoy creando un clon de React Router</p>
      <a href="/">Ir a la home</a>
    </>
  )
}


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
