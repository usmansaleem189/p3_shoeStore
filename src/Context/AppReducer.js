export default (state,action) => {
    switch (action.type) {
        case "addToCart":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };

        case "removeFromCart":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };

        case "increaseItem":
            
            const requiredIndex = state.cart.findIndex(item => item.id === action.payload);
            ++state.cart[requiredIndex].quantity;
            return {
                ...state,
                cart: [...state.cart]
            };

        case "decreaseItem":
            const requiredInd = state.cart.findIndex(item => item.id === action.payload);
            --state.cart[requiredInd].quantity;
            return {
                ...state,
                cart: [...state.cart]
            }

        case "emptyCart":
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }
}