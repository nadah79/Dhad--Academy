const router=require('express').Router()
const auth=require("../midleware/authentication")

const contact = require('../controller/contactController')





router.get('/',contact.getContactMessages)
router.post('/sendMessage',contact.contactMessages)
router.delete('/deleteMessage/:id',contact.DeleteContactMessages)
router.delete('/deleteMessage',contact.Deleteall)




module.exports=router




















