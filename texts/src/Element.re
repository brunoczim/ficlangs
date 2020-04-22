type t =
  | Title(list(Word.t))
  | Paragraph(list(Word.t));

[@react.component]
let make = (~contents, ~settings) =>
  switch (contents) {
  | Title(words) => <Title settings words />
  | Paragraph(words) => <Paragraph settings words />
  };
