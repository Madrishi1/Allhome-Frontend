import React from 'react';
import Login from './landing-pages/Login';
import Register from './landing-pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;