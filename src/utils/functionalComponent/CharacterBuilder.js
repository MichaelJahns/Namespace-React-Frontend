import React from "react";
import "../../resources/css/character.css";
import useFifthEdition from "../useFifthEdition";
import validateFifthEdition from "../validateFifthEdition";

const INITIAL_STATE = {
  name: ""
  // title: 'Spectral Thief',
  // description: 'Wind Worn Man of moderate height, Black hair and tired features.',
  // allegiance: null,
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

  const Form = props => {
    return (
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
      </form>
    );
  };

  return (
    <div className="characterBuilder">
      <aside>
        <h2> Character Builder </h2>
        <ul>
          {/* eventually will render from a collection pulled from firebase as part of a loop */}
          <li>
            <div></div>
            <p> Remaford </p>
          </li>
          <li>
            <div></div>
            <p> Frann Fars </p>
          </li>
          <li>
            <div></div>
            <p> Frann Fars </p>
          </li>
          <li>
            <div></div>
            <p> Frann Fars </p>
          </li>
          <li>
            <div></div>
            <p> Frann Fars </p>
          </li>


          <li>
            <div></div>
            <p> Frann Fars </p>
          </li>

        </ul>
      </aside>
      <section>
        <article className="characterCardUpper">
          <div className="characterPortrait">
            <img
              src="https://img.fireden.net/tg/image/1448/74/1448748623668.png"
              alt="characterPortrait"
            />
          </div>
          <div className="characterDemographics">
            <h3> Remaford </h3>
          </div>
        </article>
        <article className="characterCardLower">
          <div>
            <h4>Quirks and Fun Facts </h4>
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
    </div>
  );
}
