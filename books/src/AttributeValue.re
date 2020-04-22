module InText = {
  [@react.component]
  let make = (~contents) =>
    <span className="intext-attribute-val"> {React.string(contents)} </span>;
};

module Boxed = {
  [@react.component]
  let make = (~contents) =>
    <span className="boxed-attribute-val"> {React.string(contents)} </span>;
};
