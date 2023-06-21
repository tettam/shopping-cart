import { AiOutlineShoppingCart } from 'react-icons/ai'
import './CartButton.css'
import { useContext } from 'react'
import { Context } from '../../contexts/Contex'

const CartButton = () => {

  const { cartItems , setIsCartVisible, isCartVisible } = useContext(Context);
  const totalCart = cartItems.length


  return (
    <button type="button" className="cart__button"
    onClick={() => setIsCartVisible(!isCartVisible)}>
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <span className='cart-status'>{totalCart}</span>}
    </button>
  )
}

export default CartButton;