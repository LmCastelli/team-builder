import './App.css';
import React, {useState} from 'react';
import Form from "./Form"



// Make list of team members for initializing 

const teamMembers = [
  { name: "Dwight", email: "dwight@dwight.com", role: "Assistant to the Regional Manager" } ,
  { name: "Jim", email: "jim@jim.com", role: "Paper Salesman"},
  { name: "Micheal", email: "michael@micheal.com", role: "Regional Manager"},
]

const initialFormValues = {name: "", email: "", role: "",}




function App() {
  const [members, setMembers] = useState(teamMembers);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:inputValue})
  }  

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    // if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
    //   return;
    // }
    teamMembers.push(newTeamMember);
    setMembers(teamMembers)
    setFormValues(initialFormValues);
  }






  return (
    <div className="App">
      <h2>Will it Load </h2>
      
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      
      {members.map((member, idx) => (
        <div key={idx}>
          Name: {member.name} --- Role: {member.role} --- email: {member.email} 
        </div>
      ))}
    </div>
  );
}

export default App;
