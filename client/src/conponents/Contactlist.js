import React, { useEffect } from 'react';
import Cards from './Cards';
import {updatingcontact} from '../store/contactSlice';
import {fetchcontacts} from '../api/contactapi'
import {useDispatch,useSelector} from 'react-redux';



const Contactlist = () => {

  //tw jebna l7ajet li nest7a9ouhom f rabtan m3a redux
  const dispatch = useDispatch()

   const Contacts = useSelector(state=>state.contact)

   // tw bch norbtou bl BD mta3na bch njibou les data mta3na


   const getcontact = async()=>{
    const data = await fetchcontacts()
    dispatch(updatingcontact(data.contactList))
   }

   useEffect(()=>{
    getcontact()
   },[])



    
  return (
    <div className='cards' >
     {
      Contacts.map((e)=>( <Cards contact={e} getcontact={getcontact} /> ))
     }
    </div>
  )
}

export default Contactlist
