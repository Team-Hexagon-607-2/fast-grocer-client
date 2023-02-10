import { useEffect, useState } from 'react';

const UseToken = email => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (email) {
      fetch(`https://fg-server.vercel.app/jwt/${email}`)
        .then(res => res.json())
        .then(data => {
          if (data.accessToken) {
            localStorage.setItem('accessToken', data.accessToken)
            setToken(data.accessToken);
          }
        })
    }
  }, [email]);

  return [token]
};

export default UseToken;