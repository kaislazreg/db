import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {postcontact} from '../api/contactapi';
import {useNavigate} from 'react-router';


const Add = () => {

const [name,setName]=useState('')
const [age,setAge]=useState('')
const [email,setEmail]=useState('')


let navigate = useNavigate()

const handleAdd=async(value)=>{
  await postcontact(value);
  navigate('/contacts')
}


  return (
    <div className="row" >
    <div className="col-sm-4"></div>
    <div className="col-sm-4">
    <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">
      name
    </InputGroup.Text>
    <Form.Control
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      onChange={(e)=>setName(e.target.value)}
      
      
    />
  </InputGroup>
    <br />
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">
        age
      </InputGroup.Text>
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        onChange={(e)=>setAge(e.target.value)}
       
      />
    </InputGroup>
    <br />
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">
        email
      </InputGroup.Text>
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        onChange={(e)=>setEmail(e.target.value)}
       
      />
    </InputGroup>
  
  <button onClick={()=>handleAdd({name,age,email})} >add contact</button>
    </div>

    </div>
  )
}

export default Add
