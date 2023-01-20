import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { StateContext } from "../../contexts/AuthProvider";

const WishList = () => {
  const { user } = useContext(StateContext);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/wishlist/${user?.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }).then((res) => res.json()),
  });

  console.log(data?.data);

  return <div>WishList</div>;
};

export default WishList;
