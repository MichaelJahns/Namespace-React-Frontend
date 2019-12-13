import React from "react";
import "../../resources/css/character.css";
import useFifthEdition from "../useFifthEdition";
import validateFifthEdition from "../validateFifthEdition";
import { useFirestore } from "../useFirestore";
import CharacterStream from "./CharacterStream";

const INITIAL_STATE = {
  name: "",
  title: "",
  notes: "",
  relationships: ""
};

export default function CharacterBuilder() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFifthEdition(INITIAL_STATE, validateFifthEdition);

  const firestore = useFirestore();


  const Content = props => {
    return (
      <section className="scrollable">
        <article className="characterCardUpper">
          <div className="characterPortrait">
            <img
              src="https://img.fireden.net/tg/image/1448/74/1448748623668.png"
              alt="characterPortrait"
            />
          </div>
          <div className="characterDemographics">
            <h3> Remaford Juliar Berbeaxeon </h3>
          </div>
        </article>
        <article className="characterCardLower">
          <div>
            <h4> Notes </h4>
            <ul>
              <li> Secretly Percival Personson </li>
              <li> Speaks quickly in attempts to be convincing </li>
            </ul>
          </div>
          <div>
            <h4>Relationships</h4>
            <ul>
              <li> Best Friend to Tamlin </li>
              <li> </li>
            </ul>
          </div>

        </article>

      </section>
    )
  }

  return (
    <div className="characterBuilder">
      <h2> Character Builder </h2>
      <main className="characterBuilder">
        <CharacterStream />
        {/* <Content></Content> */}
        <section>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Character Name.. "
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={errors.name && "error-input"}
            />
            {errors.name && <p className="error-text"> {errors.name} </p>}
            <input
              type="text"
              name="title"
              placeholder="Character's Title or Role.. "
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className={errors.title && "error-input"}
            />
            {errors.title && <p className="error-text"> {errors.title} </p>}
            <input
              type="text"
              name="notes"
              placeholder="Character Notes.."
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.notes}
              className={errors.notes && "error-input"}
            />
            {errors.notes && <p className="error-text"> {errors.notes} </p>}
            <input
              type="text"
              name="relationships"
              placeholder="Character Relationships.. "
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.relationships}
              className={errors.relationships && "error-input"}
            />
            {errors.relationships && <p className="error-text"> {errors.relationships} </p>}

            <p onClick={() => firestore.Test(
              values.name,
              values.title,
              values.notes,
              values.relationships
            )}> TEST ME </p>


          </form>
        </section>
      </main>
      <h2> Footer </h2>
    </div>
  );
}

