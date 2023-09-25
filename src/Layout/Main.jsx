import { Outlet } from "react-router-dom";
import Navber from "../Pages/SharedPage/Navber/Navber";
import Footer from "../Pages/SharedPage/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;