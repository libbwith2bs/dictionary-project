import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Synonyms from "./Synonyms";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <Phonetics phonetics={props.results.phonetics[0]} />
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
        <section>
          <Synonyms synonyms={props.results.meanings[0].synonyms} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
