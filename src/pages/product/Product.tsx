import "./product.scss"
import three from "../../assets/three.svg"
import notify from "../../assets/notifications_unread.svg"
import user from "../../assets/user.svg"
import { Button } from "@mui/material"
import search from "../../assets/search.svg"

const Product = () => {
  return (
    <>
      <div className="product">

        <div className="topbar">
          <img src={three} alt="" />
          <div className="profileSection">
            <img src={notify} alt="" />
            <span>Ujjwal Kumar</span>
            <img className="user" src={user} alt="" />
          </div>
        </div>

        <div className="optionBar">
          <div style={{ fontWeight: 600, color: "#0052CC", fontSize: "22px" }}>Products</div>
          <div className="productOption">
            <Button variant="outlined"><img src={search} alt="" /></Button>
            <Button variant="outlined">Add Product</Button>
            <Button variant="outlined">Multiple Product</Button>
            <Button variant="outlined">QR Batch</Button>
            <Button variant="outlined">Filter</Button>
          </div>
        </div>

        <div className="credit">Total Credits left : 2000/2000</div>

        <table>
          <thead>
            <th>Created</th>
            <th>Name</th>
            <th>Category</th>
            <th>Warranty</th>
          </thead>
          <tbody>
            <tr>
              <td>19-06-2024</td>
              <td>Iphone15 Pro</td>
              <td>Smartphone</td>
              <td>1year 10 months</td>
            </tr>
            <tr>
              <td>19-06-2024</td>
              <td>Iphone15 Pro</td>
              <td>Smartphone</td>
              <td>1year 10 months</td>
            </tr>
            <tr>
              <td>19-06-2024</td>
              <td>Iphone15 Pro</td>
              <td>Smartphone</td>
              <td>1year 10 months</td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  )
}

export default Product