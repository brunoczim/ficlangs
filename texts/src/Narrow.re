module InText = {
  [@react.component]
  let make = (~contents) =>
    <div className="intext-narrow">
      {String.concat("", ["[", contents, "]"]) |> React.string}
    </div>;
};

module Boxed = {
  [@react.component]
  let make = (~contents) =>
    <div className="boxed-narrow">
      {String.concat("", ["[", contents, "]"]) |> React.string}
    </div>;
};
