import React from "react";
import styles from './Form.module.css';

export default function Form() {
  return(
    <form>
      <label for="question">Question:</label>
      <input type="text" id="question" name="question"></input>
      <label for="answer">Answer:</label>
      <input type="text" id="answer" name="answer"></input>
      <input type="submit" value="Add"></input>
    </form>
  )
}