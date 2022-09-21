import React from "react";

export default function Synonyms(props) {
    // console.log('PROPS',props);
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map( function(synonym, id) {
          return <li key={id}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}