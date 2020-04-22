[@react.component]
let make = (~words, ~settings) => {
  let mapped = List.map(word => <Word.InText word settings />, words);
  <p className="paragraph"> {React.array(Array.of_list(mapped))} </p>;
};
