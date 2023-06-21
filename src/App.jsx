import Cart from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import Products from "./components/Products/Products";
import { ContextProvider } from "./contexts/Contex";

function App() {
  return (
    <ContextProvider >
      <Header />  
      <Products />
      <Cart />
    </ContextProvider>  
  )
}
export default App;

