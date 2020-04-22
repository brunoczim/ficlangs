module InText = {
  [@react.component]
  let make = (~contents) =>
    <span className="intext-attribute-key"> {React.string(contents)} </span>;
};

module Boxed = {
  [@react.component]
  let make = (~contents) =>
    <span className="boxed-attribute-key"> {React.string(contents)} </span>;
};
