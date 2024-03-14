import React from 'react';
import Login from './landing-pages/Login';
import Register from './landing-pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import DashboardFull from './Dashboard/DashboardFull';


type AppProps = {
    title: string;
  };
  
  const App: React.FC<AppProps> = ({ title }) => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" >
                <Route index  element={<Login  title=''/>} />
                <Route path="/Register" element={<Register title='' />} />
                <Route path="/Dashboard" element={<Dashboard title='' />} />
                <Route path="/DashboardFull" element={<DashboardFull title='' />} />


                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;