import React from 'react';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router';
import {deletCont} from '../api/contactapi'





const Cards = ({contact,getcontact}) => {


  let navigate = useNavigate()

  const navigation=()=>{
    navigate(`/update/${contact._id}`)
  }

  


  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    
      <Card.Title>{ contact.name}</Card.Title>
      <Card.Link href="#">{contact.email}</Card.Link>
      <Card.Link href="#">{contact.age}</Card.Link>
      
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
       <br />

      <button onClick={async()=>{await deletCont (contact._id) ; getcontact() }} >delete</button>
    <button onClick={()=>navigation()} >update</button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Cards
