import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {

    const navLinks = <>
        
        <li className="w-full border border-black  rounded-md p-3"> <NavLink to='/dashboardLayout/addProduct'>Add Product</NavLink></li>
        <li className="w-full border border-black  rounded-md p-3"> <NavLink to='/dashboardLayout/updateProduct'>Update Product</NavLink></li>
        <li className="w-full border border-black  rounded-md p-3"> <NavLink to='/dashboardLayout/addCategory'>Add Category</NavLink></li>
        <li className="w-full border border-black  rounded-md p-3"> <NavLink to='/dashboardLayout/updateCategory'>Update Category</NavLink></li>
    </>
    return (
        <>
            <Navbar></Navbar>
            <div className="grid grid-cols-12 gap-5  min-h-screen py-10">
                <div className="col-span-3">
                    <ul className="flex flex-col gap-5  p-5 dark:bg-slate-700 dark:text-white ">
                        {navLinks}
                    </ul>
                </div>
                <div className="col-span-9">
                  <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;