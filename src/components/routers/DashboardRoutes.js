import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from '../CustomNavbar/CustomNavbar';


import InicioScreen from '../Inicio/InicioScreen';
import PersonalScreen from '../Personal/PersonalScreen';
import TiendasScreen from '../Tiendas/TiendasScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <div className="m-2">
                <CustomNavbar />
            </div>
            {/* <Navbar /> */}

            <div className="container-fluid mt-2">
                <Routes>
                    <Route exact path="/inicio" element={<InicioScreen />} />
                    <Route exact path="/tiendas" element={<TiendasScreen />} />
                    <Route exact path="/personal" element={<PersonalScreen />} />
                    <Route path="/*" element={<Navigate replace to="/inicio" />}/>

                    
                </Routes>
            </div>


        </>
    )
}
