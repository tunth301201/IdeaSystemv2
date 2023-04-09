import 'flowbite';
import React from "react";
import {
    HiCog,
    HiHome,
    HiTag,
    HiUser
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
export default function SideBar() {
    const location = useLocation();
    const data = [
        {
            icon: <HiHome size='1.3rem'/>,
            label: "Home",
            path: "/"
        }, 
        {
            icon: <HiTag size='1.3rem'/>,
            label: "Tags",
            path: "/tag"
        },
        {
            icon: <HiUser size='1.4rem'/>,
            label: "Profile",
            path: "/profile"
        }, 
        {
            icon: <HiCog size='1.2rem'/>,
            label: "Setting",
            path: "/setting"
        },
        {
            icon: <HiHome size='1.3rem'/>,
            label: "Dashboard",
            path: "/dashboard"
        },
    ]

    const sideBarHeading = data.map((val, index) => {
        return (
            <li className=
            { val.path === location.pathname 
                ? "bg-gray-100 dark:bg-gray-700" 
                : ""
            }>
                <Link to={val.path} key={index}>
                    <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            { val.icon }
                        </svg>
                        <span className="ml-3">{ val.label }</span>
                    </a>
                </Link>
            </li>
        )
    }) 

    return( 
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2">
                    {sideBarHeading}
                </ul>
            </div>
        </aside>
    )
}