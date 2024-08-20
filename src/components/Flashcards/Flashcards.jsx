import React from "react";
import styles from './Flashcards.module.css';
import Flashcard from "../Flashcard/Flashcard";

export default function Flashcards({data}) {
  return (
    <>
      <section className={styles.flashcards}>
      {data.map((flashcard) => { 
        return <Flashcard question={flashcard.question} answer={flashcard.answer}/>})}
      </section>
    </>
  )
}