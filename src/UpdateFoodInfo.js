// import { Link, useParams } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from 'react'
function Update1() {
  const [users, setUser] = useState([""])
  const [data ,setdata] =useState([""])
  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:3000/food").then((result) => {
      result.json().then((resp) => {
        console.log("***")
        setUser(resp)
      })
    })
  }
  function deleteUser(id) {
    fetch(`http://localhost:3000/food/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function updateUser()
  {
    let food=document.getElementById("food").value
    let calories=document.getElementById("calories").value
    let item={name:food,calories:calories}
    let id=document.getElementById("H").value
    fetch(`http://localhost:3000/food/${id}`, {
      method: 'PATCH',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        document.getElementById("A").style.display="none"
        console.warn(resp)
        getUsers()
      })
    })
  }
  
  function form(id){

    users.map(val=> 
      val._id===id?setdata(val):""
    )

    document.getElementById("A").style.display="block"
    document.getElementById("H").value=id

  }
  function input(){
    let food=document.getElementById("food").value
    let calories=document.getElementById("calories").value
    setdata({name:food,calories:calories})

  }
  return (
    <div className="App">
      <h1>Update User Food With API </h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>Name</td>
            <td>Id</td>
            <td>V</td>
            
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.calories}</td>
                <td>{item.name}</td>
                <td>{item._id}</td>
                <td>{item.__v}</td>
                <td><button onClick={() => deleteUser(item._id)}>Delete</button></td>
                <td><button onClick={() => form(item._id)}>Update</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
      <div id="A" style={{display:"none"}}>
      <input  onChange={input} name="name" value={data.name} type="text" id="food"/> <br /><br />
      <input onChange={input} name="calories" value={data.calories} type="text" id="calories"/> <br /><br /> 
      <input style={{display:"none"}} name="H" type="text" id="H"/> 
      
      
      <button onClick={updateUser}>Update Data</button> 
      </div>
    </div>
  );
}

export default Update1;