module InText = {
  [@react.component]
  let make = (~contents) =>
    <div className="intext-romanization">
      {String.concat("", ["roman: ", contents]) |> React.string}
    </div>;
};

module Boxed = {
  [@react.component]
  let make = (~contents) =>
    <div className="boxed-romanization">
      {String.concat("", ["roman: ", contents]) |> React.string}
    </div>;
};
