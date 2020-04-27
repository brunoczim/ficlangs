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
let make: (~contents: t, ~settings: Settings.t) => React.element;
