module InText = {
  [@react.component]
  let make = (~contents) =>
    <div className="intext-orthography"> {React.string(contents)} </div>;
};

module Boxed = {
  [@react.component]
  let make = (~contents) =>
    <div className="boxed-orthography"> {React.string(contents)} </div>;
};
