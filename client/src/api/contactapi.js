import axios from 'axios';


// rbatna bl get mta3 lpartie back
export const fetchcontacts=async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/usr`);

    return data

}
 

// rbatna bl post mta3 lpartie back


export const postcontact=async(value)=>{

    const addcontact = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/usr`,{...value})

}


// partie put

export const updatecontact=async(id,value)=>{

    const setcontact = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/usr/${id}`,value)
}
// get by id
export const getOneContact=async(id)=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/usr/${id}`);
    return data
}

// delete
export const deletCont=async(id)=>{

    const deletecontact = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/usr/${id}`)
}