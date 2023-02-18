import { useState } from "react";
import { useEffect } from "react";
import { StateContext } from "../contexts/AuthProvider";

const useDBUserData = (email) => {
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
      })
        .then(res => res.json())
        .then(data => {
          setDbUser(data)
        })
    }
  }, [email]);

  return [dbUser];
};

export default useDBUserData;