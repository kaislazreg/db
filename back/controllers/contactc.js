const express = require('express')
const contactSchema = require('../model/contactm')
const conRouter = require('../routes/contactr')


const getting = async(req,res)=>{

    try{
        const contactList = await contactSchema.find({},'-updatedAt -createdAt -__v').sort({updatedAt:-1})
        res.status(200).send({message:"hedhi list mta3ek",contactList})

        
    }catch(err){

        res.status(500).json({error: err.message})

    }
}



const posting = async(req,res)=>{
    try{
        let body= req.body
        body["name"]=body["name"][0].toUpperCase() + body["name"].slice(1);
        const newcontact = await new contactSchema(body)
        newcontact.save()
        res.status(200).send({msg:'contact added',newcontact})

    }catch(err){
        console.log(err)
        res.status(500).send('connot add user')

    }
}


const deleting = async(req,res)=>{

    try{
        const {id} = req.params
        const fassa5user = await contactSchema.findByIdAndDelete(id)
        res.status(200).send({msg:"c bn tfassa5"})


    }catch(err){
        res.status(500).send("matfasa5 chy ya bhim")
    }
    
}

const putting = async(req,res)=>{

    try{
        const {id} = req.params
        await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        const updated_item= await contactSchema.findById(id)
        res.status(200).json({message:'contact successfully uptated', item:updated_item})
    }catch(err){
        res.status(500).send({error: err.message})
    }
    
}

const addeingone = async(req,res)=>{
    try{
        const {id} = req.params
        const oneContact = await contactSchema.findById (id)
        res.status(200).send({msg:"hak jit wa7dek",oneContact})



    }catch(err){
        res.status(400).send({msg:"chbik majitch"})



    }
    
}




module.exports = {getting,posting,deleting,putting,addeingone}
