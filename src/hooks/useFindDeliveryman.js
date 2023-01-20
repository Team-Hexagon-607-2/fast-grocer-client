import { useEffect, useState } from "react";

const useFindDeliveryman = email => {
    const [isDeliveryman, setIsDeliveryman] = useState(false);
    const [isDeliverymanLoading, setIsDeliverymanLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://fg-server.vercel.app/users/deliverymen/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsDeliveryman(data.isSeller);
                    setIsDeliverymanLoading(false);
                })
        }
    }, [email])
    return [isDeliveryman, isDeliverymanLoading]
};

export default useFindDeliveryman;