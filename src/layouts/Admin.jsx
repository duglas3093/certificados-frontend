import { Outlet, Link, useLocation } from 'react-router-dom'
// import { Switch, Route, Redirect } from "react-router-dom";

// components
import Sidebar from '../components/Sidebar/Sidebar'
import AdminNavbar from "../components/Navbars/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";
import FooterAdmin from "../components/Footers/FooterAdmin";

// views

import Dashboard from "../views/admin/Dashboard";
import Maps from "../views/admin/Maps";
import Settings from "../views/admin/Settings";
import Tables from "../views/admin/Tables";



export const Admin = () => {
    return (
        // <div className="md:flex md:min-h-screen">
        //     <aside className="md:w-1/4 bg-blue-800 px-5 py-10">
        //         <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
        //         <nav className="mt-10" >
        //             <Link className={`${ location.pathname === '/admin/dashboard' ? 'text-blue-300':'text-white'} text-2xl block mt-2 hover:text-blue-300`} to="/admin/dashboard">Clientes</Link>
        //             <Link className={`${ location.pathname === '/admin/student/new' ? 'text-blue-300':'text-white'} text-2xl block mt-2 hover:text-blue-300`} to="/admin/student/new">Nuevo Clientes</Link>
        //         </nav>
        //     </aside>
        //     <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        //         <Outlet/>
        //     </div>
        // </div>
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                
                <Link to="/admin/dashboard" exact component={Dashboard} />
                <Link to="/admin/maps" exact component={Maps} />
                <Link to="/admin/settings" exact component={Settings} />
                <Link to="/admin/tables" exact component={Tables} />
                {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
                
                {/* <Switch>
                    <Route path="/admin/dashboard" exact component={Dashboard} />
                    <Route path="/admin/maps" exact component={Maps} />
                    <Route path="/admin/settings" exact component={Settings} />
                    <Route path="/admin/tables" exact component={Tables} />
                    <Redirect from="/admin" to="/admin/dashboard" />
                </Switch> */}
                <FooterAdmin />
                </div>
            </div>
        </>
    )
}