import React from 'react';

const Guide = () => {
    return (
        <div>
            <div className='bannerImage flex items-center justify-center'>
                <div className='text-white font-semibold '>
                    <h1 className='text-5xl md:text-6xl'>How To Place An Order <br/>On<br/> Fast Grocer?</h1>                  
                </div>
            </div>
            <div className='mt-10 px-5'>
                <p>Placing a order in Fast Grocer is just like to open a candy can. Just follow few simple steps mentioned below:</p> 
              <div className='px-5'>
              <ul className='list-disc list-outside'>
                    <li>
                    Find your desired product from our Fast Grocer website or App.
                    </li>
                    <li>
                    From the product page click on "Buy Now" if you just want a single product to order
                    </li>
                    <li>
                    Click on "Add To Cart" if you want to add more products to the cart.
                    </li>
                    <li>
                    After adding all of your desired products in Cart then Go to the cart then select the products you want to order.
                    </li>
                    <li>
                    Click on the “Proceed to Checkout” button
                    </li>
                    <li>
                    Choose your preferred delivery method (Home Delivery/Collection Point) & use coupon voucher code if you have any.
                    </li>
                    <li>
                    To proceed for payment click on the “Proceed to Pay” button. Then Select a payment option before clicking the "Confirm order".
                    </li>
                    
                </ul>
               
              </div>
              <p className='py-5'> After confirming the order and completing the payment, you will get a confirmation notification from the App and by SMS/email to let you know that the order is successfully placed.</p>
            </div>
        </div>
    );
};

export default Guide;