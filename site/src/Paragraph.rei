[@react.component]
let make:
  (~words: list(Word.t), ~translation: string, ~settings: Settings.t) =>
  React.element;
