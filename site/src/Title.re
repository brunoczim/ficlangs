[@react.component]
let make = (~words, ~translation, ~settings) => {
  let mapped =
    List.mapi(
      (index, word) =>
        <Word.InText key={string_of_int(index)} word settings />,
      words,
    );
  <div className="title-wrapper">
    <h1 className="title"> {React.array(Array.of_list(mapped))} </h1>
    {
      if (Settings.showTranslation(settings)) {
        <Translation contents=translation />;
      } else {
        React.null;
      }
    }
  </div>;
};
