import React from "react";
import styles from './Flashcard.module.css';

export default function flashcard(props){
  return(
    <div className="card">
      <button className="card--btn">
        x
      </button>

     <p> 🤔 </p>
     <h2>{props.question}</h2>


    </div>
  )
}