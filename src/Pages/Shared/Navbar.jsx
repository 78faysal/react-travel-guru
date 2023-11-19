import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err.message))
    }

    const navlinks = <>
        <li><NavLink to='/news'>News</NavLink></li>
        <li><NavLink to='/destination'>Destination</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {
            user ?
                <>
                    <li><NavLink className='' to='/blog'>{user?.email}</NavLink></li>
                    <li className='btn btn-warning py-2' onClick={handleLogOut} >LogOut</li>
                </>
                :
                <NavLink className='btn btn-warning py-1' to='/login' >Login</NavLink>
        }
    </>

    return (
        <div>
            <div className="navbar bg-transparent p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 max-sm:text-black rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <NavLink className='max-sm:navbar-end' to='/'><img className="w-28 text-white brightness-200" src={logo} alt="" /></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <input type="text" placeholder="Search Your Destination.." className="input input-bordered w-24 md:w-auto bg-transparent border border-inherit" />

                </div>
                <div className="navbar-end max-sm:hidden">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;