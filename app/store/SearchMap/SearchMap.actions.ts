export function setSearch(origin: object, destination: object) {
  return {
    type: "SET_SEARCH",
    payload: { origin, destination },
  };
}
