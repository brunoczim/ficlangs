module InText = {
  [@react.component]
  let make = (~contents) =>
    <div className="intext-translation">
      {String.concat("", ["literal: ", contents]) |> React.string}
    </div>;
};

module Boxed = {
  [@react.component]
  let make = (~contents) =>
    <div className="boxed-translation">
      {String.concat("", ["literal: ", contents]) |> React.string}
    </div>;
};
