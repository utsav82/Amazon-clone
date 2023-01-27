export const addToBasket = (item, dispatch) => {
  dispatch({
    type: "ADD_TO_BASKET",
    payload: item,
  });
};

export const removeFromBasket = (item, dispatch) => {
  dispatch({
    type: "REMOVE_FROM_BASKET",
    payload: item,
  });
};
