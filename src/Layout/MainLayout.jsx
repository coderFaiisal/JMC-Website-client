import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../Pages/Shared/Navbar/Navigationbar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;