module InText = {
  [@react.component]
  let make = (~contents) =>
    <div className="intext-romanization"> {React.string(contents)} </div>;
};

module Boxed = {
  [@react.component]
  let make = (~contents) =>
    <div className="boxed-romanization"> {React.string(contents)} </div>;
};
