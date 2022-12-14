const express = require('express')
const {getting,posting,deleting,putting,addeingone} = require('../controllers/contactc')


// heka wallina wallina ne3rfou elli 3ndna route bel express.Router wl fonction sammineha conRouter
const conRouter = express.Router()

//tw lazem njibou schema mta3na li hiya l9aleb li bch ne5dmou 3lih
const contactSchema = require('../model/contactm')






// tawa bch njibou lusers mta3na lkoll w mna3d kol haja wa7ad'ha w lahna najmou na3mlou "/" khw wella na3mlou ay haja o5ra ka path lmohem man3awdouhech mba3d
conRouter.get('/',getting)



//tawa bch na3lou post ya3ni ki n7ebou nzidou haja fl db mta3na
conRouter.post('/',posting)


//tawa bch na3mlou delete ya3ni k n7ebou nfas5ou haja ml db mta3na et bien sur tkoun by id
conRouter.delete('/:id',deleting)



//tawa l update ya3ni ki n7ebou nbadlou haja fl db mta3na w kifkif bch tkoun by id
conRouter.put('/:id',putting)


// tawa kn n7ebou njibou haja mou3ayna ml db mta3na njibouha bl .get ama by id
conRouter.get('/:id',addeingone)







module.exports = conRouter