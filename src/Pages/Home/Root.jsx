import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import backgroundImg from '../../assets/images/Rectangle 1.png';

const Root = () => {
    return (
        <div className=" mx-auto relative">
            <img className="brightness-50 min-h-screen" src={backgroundImg} alt="" />
            <div className="absolute top-0 md:px-20 text-white w-full">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Root;




// https://i.ibb.co/6bvgbyk/Rectangle-1.png

// style={{ backgroundImage: `url("${backgroundImg}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}