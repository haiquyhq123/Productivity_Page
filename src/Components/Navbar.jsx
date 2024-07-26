import React, { createContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Sidebardata } from "./Sidebardata";
import { IconContext } from "react-icons";
import { CiTimer } from "react-icons/ci";
import "./Navbar.css"
export const MyContext = createContext();
function Navbar() {
    const [sidebar,setSidebar] = useState(false);
    function handlesidebar(){
        setSidebar(!sidebar);
    }
    return (
        <>
            <IconContext.Provider value={{color:'#FFF'}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaBars onClick={handlesidebar} />
                    </Link>
                    <a href="/" className="icon-web"><h1><CiTimer className="icon"/>Productivity</h1></a>
                </div>
                <nav className={sidebar?"nav-menu active":"nav-menu"}>
                    <ul className="nav-menu-item" onClick={handlesidebar}>
                        <li className="nav-bar-toggle">
                            <Link to='#' className="menu-bars">
                                <IoMdClose />
                            </Link>
                        </li>
                        {Sidebardata.map((item,index)=>{
                            return(
                                <li key={index} className={item.CName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;