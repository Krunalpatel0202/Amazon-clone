import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { useRouteMatch } from 'react-router-dom';
function Checkout() {
  const [{basket,user},dispatch] = useStateValue();  
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                src='https://www-cdn.bigcommerce.com/assets/collage-person-device-social-shopping-instagram-amazon.jpg?mtime=20210224181905'
                alt=''
                />
                <div>
                    <h3>Hello,</h3>
                        <h3>{user?.email}</h3>
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
/>
                ))}
                {/*Checkout Product*/}
                {/*Checkout Product*/}
                {/*Checkout Product*/}
                {/*Checkout Product*/}
                
                </div>
               
            </div>
            <div className='checkout__right'>
                  <Subtotal />
            </div>
        </div>
        
    )
}

export default Checkout;
