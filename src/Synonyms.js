import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <p>
          <strong>Synonyms:</strong>
        </p>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
