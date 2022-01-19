import React from 'react';
import App from './App';
import Food from './Food';
import './index.css';
import { Routes ,Route } from 'react-router-dom';






const Foodview=()=>{
    return (
            <>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/food" element={<Food/>}/>
        </Routes>
    </>
    );
  
  };
export default Foodview;