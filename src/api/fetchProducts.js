import axios from "axios";

const fetchProducts = async (item) => {
  try {

    const fetchData = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${item}`);
    const data =  fetchData.data
    console.log(data)
    return data.results

  } catch (error) {
    console.log("Erro", error)
  }

}
export default fetchProducts;