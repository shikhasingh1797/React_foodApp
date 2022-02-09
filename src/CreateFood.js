import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';


class CreateFood extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      calories: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      calories: this.state.calories
        };
    console.log(data)
    console.log("**************")

    axios
      .post('http://localhost:3000/food', data)
      .then(res => {
        this.setState({
          name: "",
          calories: ""
        })
        this.props.history.push('/');
        console.log("Data has posted..")
      })
      .catch(err => {
        console.log("Error in CreateFood!");
      })
  };

  render() {
    return (
      <div className="CreateFood">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Food List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Food</h1>
              <p className="lead text-center">
                  Create new food
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Food'
                    name='name'
                    className='form-control'
                    value={this.state.food}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Calories'
                    name='calories'
                    className='form-control'
                    value={this.state.calories}
                    onChange={this.onChange}
                  />
                </div>

              
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFood;