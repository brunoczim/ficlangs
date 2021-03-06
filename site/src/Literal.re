module InText = {
  [@react.component]
  let make = (~contents) =>
    <div className="intext-literal"> {React.string(contents)} </div>;
};

module Boxed = {
  [@react.component]
  let make = (~contents) =>
    <div className="boxed-literal">
      {String.concat("", ["literal: ", contents]) |> React.string}
    </div>;
};
