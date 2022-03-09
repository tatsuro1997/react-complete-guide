import CartContext from "./cart-context";

const CartProvider = props => {
    const addItemToCarthandler = item => { };

    const removeItemFromCarthandler = id => { };

    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCarthandler,
        removeItem: removeItemFromCarthandler
    }

    return <CartContext.Provider value={CartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;
