[@react.component]
let make = (~contents, ~onClick=_ => ()) =>
  <button className="button" onClick> {React.string(contents)} </button>;
