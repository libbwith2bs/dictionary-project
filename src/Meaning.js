import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definitions[0].definition}
        <br />
        <br />
        <span className="example">{props.meaning.definitions[0].example}</span>
      </p>
    </div>
  );
}
