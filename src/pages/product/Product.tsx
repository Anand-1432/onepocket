import "./product.scss"
import three from "../../assets/three.svg"
import notify from "../../assets/notifications_unread.svg"
import user from "../../assets/user.svg"
import { Button } from "@mui/material"
import search from "../../assets/search.svg"
import camera from "../../assets/camera.svg"
import { useState } from "react"

const Product = () => {

  const [state, setState] = useState(false);

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
            <Button variant="outlined" style={{ width: "40px", minWidth: "40px", height: "34px" }}><img src={search} alt="" /></Button>
            <Button variant="outlined" className={state ? "btnActive" : ""} onClick={() => setState(true)}>Add Product</Button>
            <Button variant="outlined">Multiple Product</Button>
            <Button variant="outlined">QR Batch</Button>
            <Button variant="outlined">Filter</Button>
          </div>
        </div>

        <div className="credit">Total Credits left : 2000/2000</div>

        {!state ? <table>
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
          :
          <div className="addForm">
            <h5>Add New Product</h5>
            <section className="title">Basic Information</section>

            <div className="formSection">

              <div>
                <div className="form-group">
                  <label>Product name</label>
                  <input type="text" className="form-control" placeholder="Product name" />
                </div>
                <div className="form-group">
                  <label>Model number</label>
                  <input type="text" className="form-control" placeholder="Model number" />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" rows={4} placeholder="Description" />
                </div>

                <div className="checkGrid">
                  <div className="form-check form-switch">
                    <section>Show Manufacture Date</section>
                    <input className="form-check-input" type="checkbox" role="switch" />
                  </div>
                  <div className="form-check form-switch">
                    <section>Installation Details</section>
                    <input className="form-check-input" type="checkbox" role="switch" />
                  </div>
                </div>

                <div className="additionalInfo">
                  <section>Additional information</section>
                  <hr />
                  <div className="add"> + Add Section</div>
                </div>

                <div className="purchaseBox">
                  <section>Purchase Options</section>
                  <div className="innerBox">
                    <div className="form-group">
                      <label>Store Name</label>
                      <input type="text" className="form-control" placeholder="Store Name" />
                    </div><div className="form-group">
                      <label>Product Review Link</label>
                      <input type="text" className="form-control" placeholder="Product Review Link" />
                    </div>
                    <p>Delete Section</p>
                  </div>
                  <div className="add"> + Add Section</div>
                </div>

                <div className="warranty">
                  <section>Warranty</section>
                  <div className="warrantyGrid">
                    <div className="form-group">
                      <label>Years</label>
                      <input type="text" className="form-control" placeholder="Years" />
                    </div><div className="form-group">
                      <label>Months</label>
                      <input type="text" className="form-control" placeholder="Months" />
                    </div>
                  </div>
                </div>

                <div className="purchaseBox mt-5">
                  <section>Product Videos Link</section>
                  <div className="innerBox">
                    <div className="form-group">
                      <label>Link</label>
                      <input type="text" className="form-control" placeholder="Link" />
                    </div>
                  </div>
                  <div className="add"> + Add Section</div>
                </div>

                <div className="productDescription">
                  <section>Product  Description for Customers</section>
                  <div className="form-group">
                    <textarea className="form-control" rows={4} placeholder="Description" />
                  </div>
                </div>

                <div className="qrGenerate">
                  <section>Generate QR</section>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Number Of Copies" />
                    <select className="form-control form-control-sm mt-2">
                      <option>Choose Template</option>
                    </select>
                    <div className="text-center mt-3">
                      <Button variant="contained">Generate</Button>
                    </div>
                  </div>
                </div>

              </div>

              <div>

                <div className="productImage">
                  <label>Product Image</label>
                  <div className="innerDiv">
                    <img src={camera} alt="" />
                    <div>Drop your image here, or <span style={{ color: "#0052CC" }}>browse</span></div>
                    <pre>Support: jpeg, png</pre>
                  </div>
                </div>

                <div className="category">
                  <label>Select Category</label>
                  <div className="innerDiv">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" />
                      <label className="form-check-label">TWS</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" />
                      <label className="form-check-label">Smart Wearables</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" />
                      <label className="form-check-label">Cooktop</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" />
                      <label className="form-check-label">Light</label>
                    </div>
                    <div className="add mb-3"> + Add New Category</div>
                  </div>
                </div>

                <div className="logo">
                  <label>Logo</label>
                  <div className="innerDiv">
                    <div className="form-group">
                      <select className="form-control form-control-sm mt-2">
                        <option>Select Logo</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        }


      </div >
    </>
  )
}

export default Product