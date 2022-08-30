import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>                 
                    <Route path="/*" element={ <DashboardRoutes/> } />
                </Routes>
            </div>
        </Router>
    )
}
