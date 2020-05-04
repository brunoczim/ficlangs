type t =
  | Title{
      words: list(Word.t),
      translation: string,
    }
  | Paragraph{
      words: list(Word.t),
      translation: string,
    };

[@react.component]
let make = (~contents, ~settings) =>
  switch (contents) {
  | Title({words, translation}) => <Title settings words translation />
  | Paragraph({words, translation}) =>
    <Paragraph settings words translation />
  };
