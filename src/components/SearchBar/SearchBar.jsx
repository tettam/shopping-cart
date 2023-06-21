import { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts';
import { Context } from '../../contexts/Contex';

const SearchBar =  () => {
  const [searchValue, setSearchValue] = useState('');

  const { setProducts, setLoading } = useContext(Context)

  const searchProduct = async (event) => {
    event.preventDefault();
    setLoading(true)
    const products = await fetchProducts(searchValue)
    
    setProducts(products)
    setLoading(false)
    setSearchValue('')
  }


  return (
    <form className='search-bar' onSubmit={searchProduct}>
      <input 
        type="search"
        value={searchValue}
        placeholder="Buscar produtos" 
        className="search__input"
        onChange={(e) => setSearchValue(e.target.value)}
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar;