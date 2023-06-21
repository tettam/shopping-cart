import { useEffect, useContext } from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import { Context } from '../../contexts/Contex'

const Products = () => {
  const {products , setProducts} = useContext(Context)
  const {loading , setLoading} = useContext(Context)
  useEffect(() => {

    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false)
    })

  }, [])

  return(
    (loading && <Loading />) || (
      <section className='container products'> 
        {products.map((product) => <ProductCard key={product.id} data={ product }/>)}
      </section>
    ) 
  )
}

export default Products;