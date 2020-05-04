[@react.component]
let make = (~contents) =>
  <div className="translation">
    {String.concat("", ["translation: ", contents]) |> React.string}
  </div>;
