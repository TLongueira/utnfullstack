import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from '../CustomNavbar/CustomNavbar';


import InicioScreen from '../Inicio/InicioScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <div className="m-2">
                <CustomNavbar />
            </div>

            <div className="container-fluid mt-2">
                <Routes>
                    <Route exact path="/inicio" element={<InicioScreen />} />
                    <Route path="/*" element={<Navigate replace to="/inicio" />}/>

                    
                </Routes>
            </div>


        </>
    )
}
