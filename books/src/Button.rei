[@react.component]
let make:
  (~contents: string, ~onClick: ReactEvent.Mouse.t => unit=?) => React.element;
