const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      if (state[action.item.id]) {
        console.log()
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: state[action.item.id].quantity + 1,
          },
        };
      } else {
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: 1
          },
        };
      }
    }
    case "REMOVE_ITEM": {
      const stateCopy = { ...state };
      delete stateCopy[action.item.id];
      return {
        ...stateCopy,
      };
    }
    case "UPDATE_ITEM": {
      return {
        ...state,
        [action.id] : {
          ...state[action.id],
          quantity: action.quantity
        }
      };
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
