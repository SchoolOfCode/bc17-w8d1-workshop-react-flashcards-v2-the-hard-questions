import React from "react";
import styles from './Flashcards.module.css';
import Flashcard from "../Flashcard/Flashcard";

export default function Flashcards() {
  return (
    <section className={styles.flashcards}>
      <Flashcard />
      <Flashcard />
      <Flashcard />

    </section>
  )
}