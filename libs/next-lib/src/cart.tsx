import React, { useContext } from 'react';
import { Launch } from '@space-explorer/graphql/react';

const cartContext = React.createContext<
  [Launch[], React.Dispatch<React.SetStateAction<Launch[]>>]
>([[], null]);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = React.useState<Launch[]>([]);
  return (
    <cartContext.Provider value={[cart, setCart]}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  const [cart, setCart] = useContext(cartContext);

  const isInCart = (launch: Launch) => {
    return cart.map((c) => c.id).includes(launch.id);
  };

  const addToCart = (launch: Launch) => {
    if (!isInCart(launch)) {
      setCart([...cart, launch]);
    }
  };

  const removeFromCart = (launch: Launch) => {
    setCart(cart.filter((c) => c.id !== launch.id));
  };

  const resetCart = () => setCart([]);

  return {
    cart,
    isInCart,
    addToCart,
    removeFromCart,
    resetCart,
  };
};
