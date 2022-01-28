import React from 'react';
import App from './App';
import Food from './Food';
import './index.css';
import { Routes ,Route } from 'react-router-dom';
import ShowFoodList from './ShowFoodList';

const Foodview=()=>{
    return (
            <>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/food" element={<Food/>}/>
            <Route path="/foodlist" element={<ShowFoodList/>}/>
        </Routes>
    </>
    );
  
  };
export default Foodview;