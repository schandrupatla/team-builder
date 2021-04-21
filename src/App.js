//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
//sree
import Form from './Form'

const teamData =[
  {username:"Sri",
  email:"sriluanil@yahoo.com",
  role:"Student"},
  {username:"Anil",
  email:"anil@yahoo.com",
  role:"Software Engineer"},
  {username:"Savi",
  email:"savi@yahoo.com",
  role:"Student"},
  {username:"Ansh",
  email:"ansh@yahoo.com",
  role:"Student"}
]
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  role: '',
}
 //sree

function App() {
  //sree states
  // const [teams, setTeams] = useState({username:"",email:"", role:""})
  const [teams, setTeams] = useState(teamData)
  const [formValues, setFormValues] = useState(initialFormValues) 

  // useEffect(() => {
  //   setTeams(teamData);
  // }, [])
  
  

const updateForm =(inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue})
}

  const submitForm =(evt) => {
    evt.preventDefault();
    const newTeam ={
      username:formValues.username.trim(),
      email:formValues.email.trim(),
      role:formValues.role,
    }
    setFormValues({username:"",email:"", role:""});
    setTeams([...teams, newTeam])
  }
  //sree
  return (
    <div className="App">
      <h1>Sree TeamList</h1>
     <Form
     values={formValues}
     update={updateForm}
     submit={submitForm}
   />
   {
     teams.map((team, idx) => {
       return( 
        <div className="member-card" key={idx}>
          <p>Name:{team.username}</p>
          <p>Email:{team.email}</p>
          <p>Role:{team.role}</p>
        </div>
       )
    })
    
   }
  
      {/* sree */}
    </div>
  );
}

export default App;
