import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useParams,useNavigate} from 'react-router'
import {updatecontact,getOneContact} from '../api/contactapi'

const Updatelist = () => {
const {id} = useParams()
let navigate = useNavigate()


// the states mta3na li bch ne5dmou bihom l update
const [name,setName]=useState('');
const [age,setAge]=useState('');
const [email,setEmail]=useState('');
 
const getOneUser =async(id)=>{
const data = await getOneContact(id)
setName(data.oneContact.name)
setAge(data.oneContact.age)
setEmail(data.oneContact.email)
}
useEffect(()=>{
  getOneUser(id)
},[id])


// function l 3malna beha l'update
const handleupdate = async(iduser,value)=>{
 await updatecontact(iduser,value) 
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
      
      
      value={name}
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
        
        value={age}
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
        
        value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
    </InputGroup>
  
  <button onClick={()=>handleupdate(id,{name,age,email})} >update</button>
    </div>

    </div>
  )
}

export default Updatelist
