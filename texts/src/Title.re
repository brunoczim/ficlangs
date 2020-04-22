[@react.component]
let make = (~words, ~settings) => {
  let mapped =
    List.mapi(
      (index, word) =>
        <Word.InText key={string_of_int(index)} word settings />,
      words,
    );
  <h1 className="title"> {React.array(Array.of_list(mapped))} </h1>;
};
