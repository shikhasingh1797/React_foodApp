import React from 'react';
import App from './App';
import Food from './Food';
import './index.css';
import { Routes ,Route } from 'react-router-dom';
import ShowFoodList from './ShowFoodList';
import CreateFood from './CreateFood';
import UpdateFoodInfo from './UpdateFoodInfo';
// import UpdateFoodInfoCard from './UpdateFoodCard';
// import UpdateFood from './Update1';
const Foodview=()=>{
    return (
            <>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/food" element={<Food/>}/>
            <Route path="/foodlist" element={<ShowFoodList/>}/>
            <Route path="/createfood" element={<CreateFood/>}/>
            <Route path="/updatefood" element={<UpdateFoodInfo/>}/>
            {/* <Route path="/update1" element={<UpdateFood/>}/> */}
            <Route
            exact
            // path="/updatefoodcard/:foodId"
            // render={(props) => <UpdateFoodInfoCard {...props} />}
          />
        </Routes>
    </>
    );
  
  };
export default Foodview;