import { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const StateContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({});
  const [address, setAddress] = useState({});

  // all products
  const {
    data: AllProducts,
    isLoading,
    isError,
    refetch,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/products`).then((res) => res.json()),
    keepPreviousData: true,
  });

  // all product categories name
  const { data: categories = [], isLoading: isCategoryLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://fg-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });

  //wishList
  const {
    data: wishListData,
    isLoading: wishlistLoading,
    refetch: wishlistRefetch,
  } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/wishlist/${user?.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }).then((res) => res.json()),
    keepPreviousData: true,
  });

  // Coupon
  const { data: coupons } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await fetch("https://fg-server.vercel.app/get-coupons");
      const data = await res.json();
      return data;
    },
  });

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

  //for firebase authentition

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const logOut = () => {
    setLoading(true);
    toast.success("Logout Successfully");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

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
        isCategoryLoading,
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
        createUser,
        signIn,
        googleSignIn,
        updateUser,
        resetPassword,
        loading,
        logOut,
        wishListData,
        wishlistLoading,
        wishlistRefetch,
        order,
        setOrder,
        refetch,
        coupons,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
