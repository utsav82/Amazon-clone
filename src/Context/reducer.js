export const initialState = {
  loading: false,
  basket: [],
  user: null,
  error: null,
  secret: "",
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "REGISTER_START":
      return {
        ...state,
        loading: true,
      };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case "REGISTER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_START":
      return {
        ...state,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_FAILED":
      return {
        ...state,
        error: action.payload,
      };
    case "ADD_TO_BASKET":
      const newBasket = [...state.basket, action.payload];
      window.localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_BASKET":
      return {
        ...state,
        basket: action.payload,
      };
    case "REMOVE_FROM_BASKET":
      const updatedBasket = [...state.basket];
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        updatedBasket.splice(index, 1);
      }
      window.localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return {
        ...state,
        basket: updatedBasket,
      };
    case "SET_SECRET":
      return {
        ...state,
        secret: action.payload,
      };

    default:
      return { ...state };
  }
};
export default reducer;
