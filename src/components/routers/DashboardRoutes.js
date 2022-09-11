import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import FiltrosScreen from '../Filtros/FiltrosScreen';


import InicioScreen from '../Inicio/InicioScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <div className="m-2">
                <CustomNavbar />
            </div>

            <div className="container-fluid mt-2">
                <Routes>
                    <Route exact path="/noticias" element={<InicioScreen />} />
                    <Route exact path="/configuracion" element={<FiltrosScreen />} />
                    <Route path="/*" element={<Navigate replace to="/noticias" />}/>

                    
                </Routes>
            </div>


        </>
    )
}
