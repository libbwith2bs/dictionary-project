import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definitions[0].definition}
        <br />
        <strong>Example: </strong>
        {props.meaning.definitions[0].example}
        <br />
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
