import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
import { Context } from '../../contexts/Contex';

const Cart = () => {
  const { cartItems , isCartVisible } = useContext(Context)
  const totalPrice = cartItems.reduce((acc , item) => {
    return item.price + acc
  }, 0)
  const resultPrice = totalPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((item) => <CartItem key={item.id} data={item}/>)}
      </div>

      <div className="cart-resume">{resultPrice}</div>
    </section>
  )
}

export default Cart;