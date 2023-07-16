import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../Pages/Shared/Navbar/Navigationbar';
import Footer from '../Pages/Shared/Footer/Footer';
import SecondaryNavbar from '../Pages/Shared/Navbar/SecondaryNavbar';

const MainLayout = () => {
    return (
        <div>
            <SecondaryNavbar></SecondaryNavbar>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;