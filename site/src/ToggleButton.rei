[@react.component]
let make:
  (
    ~contents: string,
    ~active: bool,
    ~onClick: (ReactEvent.Mouse.t, bool) => unit=?
  ) =>
  React.element;
