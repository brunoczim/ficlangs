type state = {settings: Settings.t};

type action =
  | ToggleOrthography
  | ToggleRomanization
  | ToggleBroad
  | ToggleNarrow
  | ToggleTranslation
  | ToggleAttributes;

[@react.component]
let make = (~text) => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | ToggleOrthography => {
            settings:
              Settings.setShowOrthography(
                !Settings.showOrthography(state.settings),
                state.settings,
              ),
          }
        | ToggleRomanization => {
            settings:
              Settings.setShowRomanization(
                !Settings.showRomanization(state.settings),
                state.settings,
              ),
          }
        | ToggleBroad => {
            settings:
              Settings.setShowBroad(
                !Settings.showBroad(state.settings),
                state.settings,
              ),
          }
        | ToggleNarrow => {
            settings:
              Settings.setShowNarrow(
                !Settings.showNarrow(state.settings),
                state.settings,
              ),
          }
        | ToggleTranslation => {
            settings:
              Settings.setShowTranslation(
                !Settings.showTranslation(state.settings),
                state.settings,
              ),
          }
        | ToggleAttributes => {
            settings:
              Settings.setShowAttributes(
                !Settings.showAttributes(state.settings),
                state.settings,
              ),
          }
        },
      {settings: Settings.defaultSettings},
    );
  let mapped =
    List.mapi(
      (index, elem) =>
        <Element
          key={string_of_int(index)}
          contents=elem
          settings={state.settings}
        />,
      text,
    );

  <div className="screen-wrapper">
    <a href="../index.html"> {React.string("Go to Index of Texts")} </a>
    <div className="buttons-wrapper">
      <ToggleButton
        key="orthography"
        contents="Orthography"
        onClick={(_, _) => dispatch(ToggleOrthography)}
        active={Settings.showOrthography(state.settings)}
      />
      <ToggleButton
        key="romanization"
        contents="Romanization"
        onClick={(_, _) => dispatch(ToggleRomanization)}
        active={Settings.showRomanization(state.settings)}
      />
      <ToggleButton
        key="broad"
        contents="Broad Phonetic"
        onClick={(_, _) => dispatch(ToggleBroad)}
        active={Settings.showBroad(state.settings)}
      />
      <ToggleButton
        key="narrow"
        contents="Narrow Phonetic"
        onClick={(_, _) => dispatch(ToggleNarrow)}
        active={Settings.showNarrow(state.settings)}
      />
      <ToggleButton
        key="translation"
        contents="Translation"
        onClick={(_, _) => dispatch(ToggleTranslation)}
        active={Settings.showTranslation(state.settings)}
      />
      <ToggleButton
        key="attributes"
        contents="Attributes"
        onClick={(_, _) => dispatch(ToggleAttributes)}
        active={Settings.showAttributes(state.settings)}
      />
    </div>
    <div className="text-wrapper">
      {React.array(Array.of_list(mapped))}
    </div>
  </div>;
};
