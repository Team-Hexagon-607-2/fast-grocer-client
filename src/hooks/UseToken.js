import { useEffect, useState } from 'react';

const UseToken = email => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if(email) {
      console.log('vai useToken emai paice', email)
    }

  }, [email]);

  return [token]
};

export default UseToken;