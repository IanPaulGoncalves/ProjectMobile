const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.payload;
    default:
      return state;
  }
};
