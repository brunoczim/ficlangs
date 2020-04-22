module InText = {
  [@react.component]
  let make = (~contents) =>
    <div className="intext-translation"> {React.string(contents)} </div>;
};

module Boxed = {
  [@react.component]
  let make = (~contents) =>
    <div className="boxed-translation"> {React.string(contents)} </div>;
};
