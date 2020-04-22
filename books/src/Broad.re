module InText = {
  [@react.component]
  let make = (~contents) =>
    <div className="intext-broad">
      {String.concat("", ["/", contents, "/"]) |> React.string}
    </div>;
};

module Boxed = {
  [@react.component]
  let make = (~contents) =>
    <div className="boxed-broad">
      {String.concat("", ["/", contents, "/"]) |> React.string}
    </div>;
};
