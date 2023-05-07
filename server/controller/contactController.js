const contactmodel= require('../module/contactModel')

const response= require('../utils/response')



class contactMessages {

static contactMessages =async(req,res)=>{
    console.log('contactMessages')
    // console.log(req.body)
    const {error}= contactmodel.validatecontact(req.body)
    if (error) { 
     return   response(res,400,"Invalid Data Please Enter Valide Data","",error.details[0].message)
  }

try {
    
const addMessage= await new contactmodel.contactModel(req.body)
await addMessage.save();

response(res,201,"message send successfully",{addMessage},"") 





} catch (error) {
response(res,400,"an error",'',error.message) 
    
}



}
static DeleteContactMessages =async(req,res)=>{


    console.log("DeleteContactMessages")
    const _id = req.params.id

    try {
        const deletecontact = await contactmodel.contactModel.findByIdAndDelete(_id);
       
        response(res,200,"video deleted successfully",{deletecontact},"") 
    } catch (error) {
response(res,400,"error occured",error) 
        
    }

}
static Deleteall =async(req,res)=>{


    console.log("DeleteContactMessages")
   

    try {
        const deletecontact = await contactmodel.contactModel.deleteMany();
       
        response(res,200,"all messages deleted succefully",{deletecontact},"") 
    } catch (error) {
return response(res,400,"error occured",error) 
        
    }

}


static getContactMessages =async(req,res)=>{


  
    try {

        const getContact= await contactmodel.contactModel.find();
        
        response(res,200,"get all conatct successfully",{getContact},"") 
        
            
        } catch (error) {
        
        response(res,400,"error occured",error) 
        
            
        }


}



    
    }




module.exports=contactMessages