import React from "react";
import styles from './Flashcards.module.css';
import Flashcard from "../Flashcard/Flashcard";

export default function Flashcards({data}) {
  return (
    
    <section className={styles.flashcards}>
     for (let i=0;i<data.length;i++){
      <>
      <Flashcard />
      <Flashcard />
      <Flashcard />
      </>
     }
    
    </section>
  )
}