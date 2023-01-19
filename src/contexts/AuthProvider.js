import { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
export const StateContext = createContext();
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState(cartFromLocalStorage);

  // all products
  const {
    data: AllProducts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/products`).then((res) => res.json()),
  });

  // all product categories name
  const { data: categories = [], isLoading: categoryProductLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('https://fg-server.vercel.app/categories');
      const data = await res.json();
      return data;
    }
  })

  const handleDecrement = (e, id) => {
    e.preventDefault();
    // Find the index of the item in the cart
    let index = cart.findIndex((item) => item._id === id);

    // check if quantity is greater than 0
    if (cart[index].qunatity > 1) {
      // Create a new cart with the updated item
      const newCart = [...cart];
      newCart[index].qunatity--;

      // Update the cart state
      setCart(newCart);
      // Update the cart in local storage
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const handleIncrement = (e, id) => {
    e.preventDefault();
    // Find the index of the item in the cart
    let index = cart.findIndex((item) => item._id === id);

    // Create a new cart with the updated item
    const newCart = [...cart];
    newCart[index].qunatity++;

    // Update the cart state
    setCart(newCart);
    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleAddToCart = (e, product) => {
    const isExist = cart?.find((p) => p._id === product._id);
    if (isExist) {
      const p = cart?.map((item) =>
        item._id === product._id
          ? { ...isExist, qunatity: item.qunatity + 1 }
          : item
      );
      setCart(p);
    } else {
      setCart([...cart, { ...product, qunatity: 1 }]);
    }

    toast.success("Product added successfully");
  };

  const handleRemove = (e, id) => {
    e.preventDefault();
    const remain = cart.filter((item) => item._id !== id);
    setCart(remain);
    toast.success("Product deleted successfully");
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    toast.success("Cart Clear successfully");
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const totalQuantity = cart?.reduce((total, item) => total + item.qunatity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qunatity * item.price,
    0
  );
  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        searchText,
        setSearchText,
        AllProducts,
        categories,
        categoryProductLoading,
        isLoading,
        isError,
        handleDecrement,
        handleIncrement,
        handleAddToCart,
        handleRemove,
        cart,
        totalQuantity,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
