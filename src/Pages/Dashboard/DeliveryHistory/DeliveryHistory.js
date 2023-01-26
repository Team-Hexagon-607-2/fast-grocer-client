import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { StateContext } from '../../../contexts/AuthProvider';

const DeliveryHistory = () => {
  const {user} = useContext(StateContext);
  const {data: deliveredOrder = []} = useQuery({
    queryKey: ["delivered"],
    queryFn: async () =>{
      const res = await fetch(`http://localhost:5000/delivered-orders?email=${user?.email}`)
      const data = res.json();
      return data;
    }
  })

  console.log(deliveredOrder);

  return (
    <div>
      
    </div>
  );
};

export default DeliveryHistory;