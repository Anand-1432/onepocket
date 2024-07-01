import SideBar from "./components/sidebar/SideBar"
import Product from "./pages/product/Product"

const App = () => {
  return (
    <>
      <div className="appContanier">
        <div>
          <SideBar />
        </div>
        <Product />
      </div>
    </>
  )
}

export default App