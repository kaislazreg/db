const express = require('express')
const contactSchema = require('../model/contactm')
const conRouter = require('../routes/contactr')


const getting = async(req,res)=>{

    try{
        const ajoutlist = await contactSchema.find()
        res.status(200).send({msg:"hedhi list mta3ek",ajoutlist})

    }catch(err){

        res.status(400).send({msg:"matnajemch tchouf lista barra thabet f 5edmtak ya msatek"})

    }
}



const posting = async(req,res)=>{
    try{

        const newcontact = await new contactSchema(req.body)
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
        const baddeluser = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send({msg:"c bn tbaddel",baddeluser})



    }catch(err){

        send.status(500).send({msg:"matbadel chey"})

    }
    
}

const addeingone = async(req,res)=>{

    try{
        const {id} = req.params
        const jibwahed = await contactSchema.findById (id)
        res.status(200).send({msg:"hak jit wa7dek",jibwahed})



    }catch(err){
        res.status(400).send({msg:"chbik majitch"})



    }
    
}




module.exports = {getting,posting,deleting,putting,addeingone}
