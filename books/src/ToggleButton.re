type action =
  | Toggle(ReactEvent.Mouse.t);

[@react.component]
let make = (~contents, ~active, ~onClick=(_, _) => ()) => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Toggle(evt) =>
          let new_state = !state;
          new_state;
        },
      active,
    );
  <button
    className={if (state) {"active-button"} else {"inactive-button"}}
    onClick={
      evt => {
        onClick(evt, !state);
        dispatch(Toggle(evt));
      }
    }>
    {React.string(String.concat("", ["Toggle ", contents]))}
  </button>;
};
