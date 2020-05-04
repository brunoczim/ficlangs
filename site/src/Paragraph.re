[@react.component]
let make = (~words, ~translation, ~settings) => {
  let mapped =
    List.mapi(
      (index, word) =>
        <Word.InText key={string_of_int(index)} word settings />,
      words,
    );
  <div className="paragraph-wrapper">
    <div className="paragraph"> {React.array(Array.of_list(mapped))} </div>
    {
      if (Settings.showTranslation(settings)) {
        <Translation contents=translation />;
      } else {
        React.null;
      }
    }
  </div>;
};
