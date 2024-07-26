import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import './Navbar.css'
export const Sidebardata = [
    {
        title:"Home",
        path:"/",
        icon: <FaHome />,
        CName: 'nav-text'
    },
    {
        title:"Todolists",
        path:"/todolists",
        icon: <LuListTodo />,
        CName: 'nav-text'
    },
    {
        title:"About me",
        path:"/about",
        icon: <MdOutlinePermContactCalendar />,
        CName: 'nav-text'
    },
]