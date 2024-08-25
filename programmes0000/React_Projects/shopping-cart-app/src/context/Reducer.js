
export const Cartreducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, Cart: [...state.Cart, { ...action.payload, qty: 1 }] };
    case 'REMOVE_FROM_CART':
      return { ...state, Cart: state.Cart.filter(c => c.id !== action.payload.id) }
    case 'CHANGE_CART_QTY':
      return { ...state, Cart: state.Cart.filter(c => c.id === action.payload.id ? c.qty = action.payload.qty : c.qty) }
    default:
      return state;
  }
}
