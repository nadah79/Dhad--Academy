const router=require('express').Router()
const auth=require("../midleware/authentication")

const contact = require('../controller/contactController')





router.get('/',auth.isAdmin,contact.getContactMessages)
router.post('/sendMessage',contact.contactMessages)
router.delete('/deleteMessage/:id',auth.isAdmin,contact.DeleteContactMessages)
router.delete('/deleteMessage',auth.isAdmin,contact.Deleteall)




module.exports=router




















