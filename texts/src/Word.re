type t = {
  orthography: string,
  romanization: string,
  broad: string,
  narrow: string,
  literal: string,
  attributes: list((string, string)),
};

let make =
    (
      ~orthography,
      ~romanization=?,
      ~broad,
      ~narrow=?,
      ~literal,
      ~attributes=[],
      (),
    ) => {
  orthography,
  romanization:
    switch (romanization) {
    | Some(roman) => roman
    | None => orthography
    },
  broad,
  narrow:
    switch (narrow) {
    | Some(narrow) => narrow
    | None => broad
    },
  literal,
  attributes,
};

let orthography = word => word.orthography;
let romanization = word => word.romanization;
let broad = word => word.broad;
let narrow = word => word.narrow;
let literal = word => word.literal;
let attributes = word => word.attributes;

module Boxed = {
  [@react.component]
  let make = (~word, ~onClose=_ => ()) =>
    <div className="boxed-word">
      <Orthography.Boxed key="orthography" contents={word.orthography} />
      <Romanization.Boxed key="romanization" contents={word.romanization} />
      <Broad.Boxed key="broad" contents={word.broad} />
      <Narrow.Boxed key="narrow" contents={word.narrow} />
      <Literal.Boxed key="literal" contents={word.literal} />
      <Attributes.Boxed key="attributes" pairs={word.attributes} />
      <Button key="close" onClick=onClose contents="Close" />
    </div>;
};

module InText = {
  type action =
    | OpenBox
    | CloseBox;

  type state = {showBox: bool};

  [@react.component]
  let make = (~word, ~settings) => {
    let (state, dispatch) =
      React.useReducer(
        (_state, action) =>
          switch (action) {
          | OpenBox => {showBox: true}
          | CloseBox => {showBox: false}
          },
        {showBox: false},
      );

    <div
      className={
                  if (state.showBox) {
                    "word word-has-boxed";
                  } else {
                    "word word-no-boxed";
                  }
                }>
      <div
        onClick={
          _ =>
            dispatch(
              if (state.showBox) {
                CloseBox;
              } else {
                OpenBox;
              },
            )
        }
        className="intext-word">
        {
          if (Settings.showOrthography(settings)) {
            <Orthography.InText
              key="orthography"
              contents={word.orthography}
            />;
          } else {
            React.null;
          }
        }
        {
          if (Settings.showRomanization(settings)) {
            <Romanization.InText
              key="romanization"
              contents={word.romanization}
            />;
          } else {
            React.null;
          }
        }
        {
          if (Settings.showBroad(settings)) {
            <Broad.InText key="broad" contents={word.broad} />;
          } else {
            React.null;
          }
        }
        {
          if (Settings.showNarrow(settings)) {
            <Narrow.InText key="narrow" contents={word.narrow} />;
          } else {
            React.null;
          }
        }
        {
          if (Settings.showLiteral(settings)) {
            <Literal.InText
              key="literal"
              contents={word.literal}
            />;
          } else {
            React.null;
          }
        }
        {
          if (Settings.showAttributes(settings)) {
            <Attributes.InText key="attributes" pairs={word.attributes} />;
          } else {
            React.null;
          }
        }
      </div>
      {
        if (state.showBox) {
          <Boxed word key="boxed" onClose={_ => dispatch(CloseBox)} />;
        } else {
          React.null;
        }
      }
    </div>;
  };
};
