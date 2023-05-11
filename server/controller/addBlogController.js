const commentmodel= require('../module/commentModel')
const blogmodel= require('../module/addBlog')
const fs = require('fs')
const path =require('path')
const response= require('../utils/response')



class Blog {

static getblog = async (req, res) => {
  try {
    // const page = parseInt(req.query.page) || 1;
    // const limit = 3;
    // const startIndex = (page - 1) * limit;

    const totalBlogs = await blogmodel.addBlog.countDocuments();
    const totalPages = Math.ceil(totalBlogs / limit);

    const blogs = await blogmodel.addBlog.find().populate('comment')
      .sort({ createdAt: -1 })
      // .skip(startIndex)
      // .limit(limit);

    res.set('x-total-count', totalBlogs); // set the x-total-count header
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get blogs' });
  }
};




// static getblog = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1; // get the page number from the query parameter or default to 1
//     const limit = 3; // set the limit to 3 blogs per page
//     const startIndex = (page - 1) * limit; // calculate the starting index of the blogs to fetch

//     const totalBlogs = await blogmodel.addBlog.countDocuments(); // get the total number of blogs in the database
//     const totalPages = Math.ceil(totalBlogs / limit); // calculate the total number of pages

//     const blogs = await blogmodel.addBlog.find().populate('comment')
//       .sort({ createdAt: -1 })
//       .skip(startIndex)
//       .limit(limit);

//     return response(res, 200, `Get all blogs successfully (page ${page} of ${totalPages})`, blogs);
//   } catch (error) {
//     return response(res, 500, 'Failed to get all blogs', '', error.message);
//   }
// };




















  static getoneblog = async(req, res) => {
const id = req.params.id

    try {
 const getallblog=  await blogmodel.addBlog.findById({_id:id}).populate('comment')
            .sort({ createdAt: -1 })
        return    response(res,200,"get  Blog succefully",getallblog)

      } catch (error) {
        return  response(res,400,"get  Blogs failed",'',error.message)
          
      }
      
 
  };


  static postblog = async(req, res) => {



    try {

        const {error}= blogmodel.validateaddBlog(req.body)

        if (error) { 
        return response(res,400,"Invalid Data Please Enter Valide Data","",error.details[0].message)
      }



        const {title,titleAR,description,descriptionAR,details} = req.body;
 

        const imagePath = req.file.path

        const filePath = imagePath;

const fileName = path.basename(filePath);
console.log(fileName)

             const postBlog= await new blogmodel.addBlog(
     {image:fileName,title:title,titleAR:titleAR,description:description,descriptionAR:descriptionAR,details:details }
  
             )
             
             await postBlog.save();
              return  response(res,201,"blog created successfully",{postBlog},"")

      } catch (error) {
        return  response(res,500,"get All Blogs failed",'',error.message)
          
      }
      
  };




  static deleteplog =async (req,res) => {




    const _id = req.params.id

    try {
      if (_id) {
        
     
        const deleteblog= await blogmodel.addBlog.findByIdAndDelete(_id);
        if(!deleteblog){
          return response(res,400,"blog not found to deleted") 
        }
       if(deleteblog.image){
        const filePath = path.join(__dirname, `../images/${deleteblog.image}`);

        fs.stat(filePath,async (err, stats) => {
          if (!stats.isFile()) {
            return  response(res,200,"blog deleted successfully",{deleteblog},"") 
          }else{

       await     fs.unlink(filePath, (err => {
              if (err)  return response(res,400,"error occured when try to delete file","",err) ;
              else {
                  
                return  response(res,200,"blog deleted successfully",{deleteblog},"") 
              }}))



          }})


        }else{
        return response(res,400,"no id exsite ") 

        }
        
         }} catch (error) {
        return response(res,400,"error occured",error) 
    }
  
}










static comment = async (req, res) => {
  console.log(req.body);
  try {
    const { error } = commentmodel.validateaddcomment(req.body);

    if (error) {
      return response(
        res,
        400,
        "Invalid Data Please Enter Valide Data",
        "",
        error.details[0].message
      );
    }

    const { text } = req.body;
    const { id } = req.params;
console.log(req.body.text)
console.log(req.user)

    const comment = await new commentmodel.addcomment({
      text: text,
      blogId: id,
      userid: req.user.id,
      username: req.user.username,
      image: req.user.image,
    });
    console.log("hhhhhhhhhhhh")
    await comment.save();
    console.log("done")

    return response(
      res,
      201,
      "comment created successfully",
      { comment },
      ""
    );
  } catch (error) {
    return response(res, 400, "get All Blogs failed", "", error.message);
  }
};



static deletecomment = async(req, res) => {


  try {

    
   
    const _id = req.params.id

 

    
           const comment= await new commentmodel.addcomment.findByIdAndDelete(_id)
            return  response(res,200,"comment deleted successfully",{comment},"")

    } catch (error) {
      return  response(res,500,"get All Blogs failed",'',error.message)
        
    }
    
};

    }












    

















    




module.exports=Blog