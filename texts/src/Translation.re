[@react.component]
let make = (~contents) =>
  <p className="translation">
    {String.concat("", ["translation: ", contents]) |> React.string}
  </p>;
