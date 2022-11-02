import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning.definitions[0].example) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          <strong>Definition:</strong> {props.meaning.definitions[0].definition}
        </p>
        <p>
          <strong>Example:</strong>{" "}
          <em>{props.meaning.definitions[0].example}</em>
        </p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          <strong>Definition:</strong> {props.meaning.definitions[0].definition}
        </p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}
