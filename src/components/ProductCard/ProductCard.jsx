import { BsFillCartPlusFill } from 'react-icons/bs'
import PropTypes from 'prop-types';
import './ProductCard.css';
import { useContext } from 'react';
import { Context } from '../../contexts/Contex';

const ProductCard = ({ data }) => {

  const resultThumbnail = data.thumbnail.replace(/\w\.jpg/gi, 'W.jpg');
  const resultPrice = data.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

  const { cartItems , setCartItems } = useContext(Context)

  const handleAddCart = () => setCartItems([...cartItems , data ])

  return (
    <section className='product-card'>
      <img src={resultThumbnail} alt="product" className='card__image' />

      <div className="card__infos">
        <h2 className="card__price">{resultPrice}</h2>
        <h2 className="card__title">{data.title}</h2>
      </div>

      <button type='button' className='button__add-cart' onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

ProductCard.prototype = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired
}

export default ProductCard;