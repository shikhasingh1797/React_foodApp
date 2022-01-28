import React, { Component } from 'react';
import axios from 'axios';
class ShowFoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/food')
      .then(res => {
        this.setState({
          foods:res.data
        })
        console.log(res)
      })
      .catch(err =>{
          console.log(err)
        console.log('Error from ShowFoodList');
      })
  };
render() {
  return (
    <div className="Food App">
      <h1> Fetch data from an api in react </h1>  {
        this.state.foods.map((e) => {
          return (
            <h1 style={{color:"skyblue"}}key={e.id} >
              User_Calories: {e.calories}
              Full_Id: {e.id},
              User_Name: {e.name},
              User_V:{e.v}

            </h1>
          )
        }
        )
      }
    </div>
  );
}
}
export default ShowFoodList;