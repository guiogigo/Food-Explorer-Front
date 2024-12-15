import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext({});

function CartProvider({ children }) {
    
    const [cartItems, setCartItems] = useState(0);
    const [cartDishes, setCartDishes] = useState([]);

    function addDish(dish, qtd) {

        const newAddDish = {...dish, quantity: qtd};
        
        setCartDishes(prev => [...prev, newAddDish])
        setCartItems(prev => prev + qtd)

        toast(`Adicionado: ${qtd} x ${dish.name}`);
    }

    return(
        <CartContext.Provider value={{
            cartItems, addDish, cartDishes
        }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext)
    return context;
}

export {
    CartProvider,
    useCart
}