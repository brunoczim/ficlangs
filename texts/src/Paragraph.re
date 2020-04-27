[@react.component]
let make = (~words, ~translation, ~settings) => {
  let mapped = List.map(word => <Word.InText word settings />, words);
  <div className="paragraph-wrapper">
    <p className="paragraph"> {React.array(Array.of_list(mapped))} </p>
    {
      if (Settings.showTranslation(settings)) {
        <Translation contents=translation />;
      } else {
        React.null;
      }
    }
  </div>;
};
