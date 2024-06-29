import SideBar from "./components/sidebar/SideBar"
import Product from "./pages/product/Product"

const App = () => {
  return (
    <>
      <div className="appContanier">
        <SideBar />
        <Product />
      </div>
    </>
  )
}

export default App