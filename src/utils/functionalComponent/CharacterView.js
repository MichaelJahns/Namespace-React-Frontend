import React from "react";
import CharacterStream from "./CharacterStream";
import CharacterFocus from "./CharacterFocus";
import CharacterBuilder from "./CharacterBuilder";
import "../../resources/css/character.css";

export default function CharacterView() {
  // an event from Stream has to trigger a state change in Focus
  // need we bubble? with props?
  // can we use webHooks? Does useSelectiveRendering work well?
  return (
    <div className="characterBuilder">
      <h2> Character </h2>
      <main className="characterBuilder">
        <CharacterStream />
        <CharacterFocus />
        {/* <CharacterBuilder /> */}
      </main>
      <h2> Footer </h2>
    </div>
  );
}

