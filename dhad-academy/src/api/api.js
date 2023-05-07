




export const apihttp="http://localhost:5000/"




export const getcontact= async () => {
    try {
      return  await fetch(
        apihttp+'contact',
      
        {
          method: "get",
          headers: {
            "Content-Type": " application/json",
            // Authorization: `Bearer ${token.token}`,
          },
          // body: JSON.stringify(body),
        }
      );
      
    } catch (error) {
  
      
      
    }
  
  
  
    
  }

  export const registration= async (body) => {
    try {
      return  await fetch(
        apihttp+'userRegistration',
      
        {
          method: "post",
          // headers: {
          //   'Content-Type': 'multipart/form-data'
          //   // Authorization: `Bearer ${token.token}`,
          //   // "Content-Type": " application/json",

          // },
          body: body,
          // body: body,

        }
      );
      
    } catch (error) {
  
      
      
    }
  
  
  
    
  }


  export const loginapi= async (body) => {
    try {
      return  await fetch(
        apihttp+'userRegistration/login',
        {
          method: "post",
          headers: {
            // 'Content-Type': 'multipart/form-data'
            // Authorization: `Bearer ${token.token}`,
            "Content-Type": " application/json",

          },
          body: JSON.stringify(body),
    
        }
      );
      
    } catch (error) {
  
      
      
    }
  
  
  
    
  }






  export const addblogapi=async (body) => {
     
    try {

      return  await fetch(
        apihttp+'blog/addblog',
      
        {
          method: "post",
  
          body: body,
          // body: body,

        }
      );
      
    } catch (error) {
  
    
      
    }
  
  
  
    
  }



  export const getallplogs=async () => {
     
    try {

      return  await fetch(
        apihttp+'blog',
      
        {
          method: "get",
  
     

        }
      );
      
    } catch (error) {
  
    
      
    }
  
  
  
    
  }