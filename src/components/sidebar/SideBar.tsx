import "./sidebar.scss";
import { Button } from "@mui/material";
import logo from "../../assets/logo.svg";
import img1 from "../../assets/category.svg";
import img2 from "../../assets/account_circle.svg";
import img3 from "../../assets/Ellipse 216.svg";
import img4 from "../../assets/analytics.svg";
import img5 from "../../assets/chat_bubble.svg";
import img6 from "../../assets/contacts_product.svg";
import img7 from "../../assets/factory.svg";
import img8 from "../../assets/inventory_2.svg";

const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="btncontanier">
                    <Button className="but active" variant="contained"> <img src={img1} alt="" />Products</Button>
                    <Button className="but" variant="contained"> <img src={img4} alt="" />Analytics</Button>
                    <Button className="but" variant="contained"> <img src={img5} alt="" />Campaign</Button>
                    <Button className="but" variant="contained"> <img src={img8} alt="" />Inventory</Button>
                    <Button className="but" variant="contained"> <img src={img7} alt="" />Factory</Button>
                    <Button className="but" variant="contained"> <img src={img6} alt="" />Roles & Permissions</Button>
                    <Button className="but" variant="contained"> <img src={img3} alt="" />Service requests</Button>
                    <Button className="but" variant="contained"> <img src={img2} alt="" />Profile</Button>
                </div>
            </div>
        </>
    )
}

export default SideBar