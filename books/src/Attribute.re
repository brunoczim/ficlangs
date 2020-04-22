module InText = {
  [@react.component]
  let make = (~keyText, ~value) =>
    <div className="intext-attribute">
      <AttributeKey.InText contents=keyText />
      <span className="intext-equals"> {React.string("=")} </span>
      <AttributeValue.InText contents=value />
    </div>;
};

module Boxed = {
  [@react.component]
  let make = (~keyText, ~value) =>
    <div className="boxed-attribute">
      <AttributeKey.Boxed contents=keyText />
      <span className="boxed-equals"> {React.string("=")} </span>
      <AttributeValue.Boxed contents=value />
    </div>;
};
