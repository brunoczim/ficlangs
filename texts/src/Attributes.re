module InText = {
  [@react.component]
  let make = (~pairs) => {
    let mapped =
      List.mapi(
        (index, (key, value)) =>
          <Attribute.InText key={string_of_int(index)} keyText=key value />,
        pairs,
      );
    <div className="intext-attributes">
      {React.array(Array.of_list(mapped))}
    </div>;
  };
};
module Boxed = {
  [@react.component]
  let make = (~pairs) => {
    let mapped =
      List.mapi(
        (index, (key, value)) =>
          <Attribute.Boxed key={string_of_int(index)} keyText=key value />,
        pairs,
      );
    <div className="boxed-attributes">
      {React.array(Array.of_list(mapped))}
    </div>;
  };
};
