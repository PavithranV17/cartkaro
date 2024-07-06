import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initState = {
    cartList: JSON.parse(localStorage.getItem("cartList")) || [],
    total: JSON.parse(localStorage.getItem("total")) || 0,
}

const CartContext = createContext(initState);

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initState);

    const add = (addProd) => {
        const addCart = state.cartList.concat(addProd);
        updateTotal(addCart);

        dispatch(
            {
                type: "ADD",
                payload: {
                    add: addCart,
                }
            }
        )
    }

    const removeCart = (removeProd) => {
        const removeFromCart = state.cartList.filter(items => items.id !== removeProd.id);
        updateTotal(removeFromCart);

        dispatch(
            {
                type: "REMOVE",
                payload: {
                    sub: removeFromCart,
                }
            }
        )
    }

    const updateTotal = (getTotal) => {
        let total = 0;
        getTotal.forEach(sum => total = total + sum.price);

        dispatch(
            {
                type: "SUM",
                payload: {
                    total
                }
            }
        )
    }

    useEffect(() => {
        localStorage.setItem("cartList", JSON.stringify(state.cartList));
        localStorage.setItem("total", JSON.stringify(state.total));
    },[state.cartList, state.total]);

    const value = {
        cartList: state.cartList,
        total: state.total,
        add,
        removeCart,
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);