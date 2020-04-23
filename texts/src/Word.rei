type t;

let make:
  (
    ~orthography: string,
    ~romanization: string=?,
    ~broad: string,
    ~narrow: string=?,
    ~translation: string,
    ~attributes: list((string, string))=?,
    unit
  ) =>
  t;

let orthography: t => string;
let romanization: t => string;
let broad: t => string;
let narrow: t => string;
let translation: t => string;
let attributes: t => list((string, string));

module Boxed: {
  [@react.component]
  let make:
    (~word: t, ~onClose: ReactEvent.Mouse.t => unit=?) => React.element;
};

module InText: {
  [@react.component]
  let make: (~word: t, ~settings: Settings.t) => React.element;
};
