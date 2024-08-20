import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Flashcards from './components/Flashcards/Flashcards'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [flashcards, setFlashcards] = useState([{ 
    question:"What is React?",
    answer:"A JavaScript library for building user interfaces"

  }, {question: "What is JSX?",
      answer:"A syntax extension for JavaScript"

  },
  {
    question: "What is the virtual DOM?",
    answer:"A lightweight copy of the actual DOM"
  }
])

  return (
    <>
      <div className = "wrapper">
        <Header /> 
        <Form data ={flashcards} setCard={setFlashcards}/>
        <Flashcards data ={flashcards}/> 
        <Footer />
      </div>
    </>
  )
}

export default App
