import { BsFillCartDashFill } from 'react-icons/bs'
import PropTypes from 'prop-types'
import './CartItem.css'
import { useContext } from 'react';
import { Context } from '../../contexts/Contex';

const CartItem = ({ data }) => {
  
  const { thumbnail, title, price } = data;
  const { cartItems , setCartItems} = useContext(Context)

  const handleRemoveCartItem = () => {
    const filterArray = cartItems.filter((item) => {
      return item.id !== data.id;
    })

    setCartItems(filterArray)
  }

  const resultPrice = price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

  return(
    <section className="cart-item">
      <img src={thumbnail} alt="imagem do produto" className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{resultPrice}</h3>

        <button type="button" className="button__remove-item" onClick={handleRemoveCartItem}>
          <BsFillCartDashFill />
        </button>
      </div>
    </section>
  )
}

export default CartItem;

CartItem.PropTypes = {
  data: PropTypes.object
}.isRequired;