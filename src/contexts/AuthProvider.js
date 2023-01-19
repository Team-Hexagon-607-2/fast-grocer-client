import { createContext, useState, useEffect } from "react";
import { useQuery, } from "@tanstack/react-query";
export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [searchText, setSearchText] = useState("");
  const [quantity, setQuantity] = useState(1);
  
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
  const {data: categories} = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch('https://fg-server.vercel.app/categories')
    .then(res => res.json())
    .then(data => {
      return data;
    })
  });

  console.log(categories);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        searchText,
        setSearchText,
        AllProducts,
        handleDecrement,
        handleIncrement,
        isLoading,
        isError,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
