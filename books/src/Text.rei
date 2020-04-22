type t =
  | Title(list(Word.t))
  | Paragraph(list(Word.t));

[@react.component]
let make: (~contents: t, ~settings: Settings.t) => React.element;
