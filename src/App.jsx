import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Flashcards from './components/Flashcards/Flashcards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "wrapper">
        <Header /> 
        <Form />
        <Flashcards />
      </div>
    </>
  )
}

export default App
