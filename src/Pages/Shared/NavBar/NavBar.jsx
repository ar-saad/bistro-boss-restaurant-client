import { Link } from "react-router-dom";
import NavCartIcon from "../../../assets/icon/shopping-cart.png";
import NavProfileIcon from "../../../assets/icon/profile-icon.png";

const NavBar = () => {
    const navbarItems = (
        <>
            <li>
                <Link
                    to="/home"
                    className="font-bold xl:text-lg hover:text-[#EEFF25]"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/contactUs"
                    className="font-bold xl:text-lg hover:text-[#EEFF25]"
                >
                    Contact Us
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard"
                    className="font-bold xl:text-lg hover:text-[#EEFF25]"
                >
                    Dashboard
                </Link>
            </li>
            <li>
                <Link
                    to="/menu"
                    className="font-bold xl:text-lg hover:text-[#EEFF25]"
                >
                    Our Menu
                </Link>
            </li>
            <li>
                <Link
                    to="/shop"
                    className="font-bold xl:text-lg hover:text-[#EEFF25]"
                >
                    Our Shop
                    <img
                        className="w-8 h-8 bg-white rounded-full"
                        src={NavCartIcon}
                        alt=""
                    />
                </Link>
            </li>
            <li>
                <Link
                    to="/profile"
                    className="font-bold xl:text-lg hover:text-[#EEFF25]"
                >
                    Profile
                </Link>
            </li>
            <li>
                <Link
                    to="/profile"
                    className="font-bold xl:text-lg hover:text-[#EEFF25]"
                >
                    <img
                        className="w-8 h-8 bg-white rounded-full"
                        src={NavProfileIcon}
                        alt=""
                    />
                </Link>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-[#151515] bg-opacity-50 fixed z-10 text-white">
                <div className="w-[20%] justify-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 text-black uppercase"
                        >
                            {navbarItems}
                        </ul>
                    </div>
                    <p className="text-xl uppercase title-font lg:ml-10">
                        <span className="block text-2xl font-black">
                            Bistro boss
                        </span>
                        <span className="block text-xl tracking-[4.1px] font-bold">
                            restaurant
                        </span>
                    </p>
                </div>
                <div className="w-[80%] justify-end hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1 uppercase">
                        {navbarItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
