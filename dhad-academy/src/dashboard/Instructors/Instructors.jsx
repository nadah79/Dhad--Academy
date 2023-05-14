import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import "./instructors.css"
import { apihttp } from "../../api/api"
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
const Instructors = () => {
  const [t] = useTranslation();

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState('user');
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadProgressu, setUploadProgressu] = useState(0);
  const [category, setCategory] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null
  const nav = useNavigate();
  
  
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    getUsers(category);
  }, []);

  const getUsers = async (category) => {
    try {
      const response = await axios.get(`${apihttp}userRegistration?category=${category}`,
         {   headers: {
        // 'Content-Type': 'multipart/form-data',
        // "Authorization": `Bearer ${token.token}`,

        }
      });
      setUsers(response.data.body);

    } catch (error) {
      console.log('Error getting users:', error);
    }
  };

  const handleUsernamChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleIsAdminChange = (event) => {
    setIsAdmin(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    setImg(URL.createObjectURL(event.target.files[0]));



  };

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('isAdmin', isAdmin);
    if (image) {
      formData.append('image', image);
    }
    if (user) {
      try {
        await axios.post(`${apihttp}userRegistration`, formData, {
          headers: {
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user?.token}`,

          }, onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            setUploadProgress(progress);
          }
        });
        getUsers(category);
        setUsername('');
        setEmail('');
        setPassword('');
        setIsAdmin('user');
        setImage('');
        setUploadProgress(0);
        setUploadProgress(null);
        setImg(null)

      } catch (error) {
        console.log('Error creating user:', error);
      }
    }
    else {
      nav('/myprofile')
    }
  };

  const handleSelectUser = (user) => {
    window.scrollTo(0, 0);
    setSelectedUser(user);
    setUsername(user.username);
    setEmail(user.email);
    setPassword(user.password);
    setIsAdmin(user.isAdmin);
  };

  const handleUpdateUser = async (event) => {
    event.preventDefault();
 
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('isAdmin', isAdmin);
    if (image) {
      formData.append('image', image);
    }
       console.log("users");
    getUsers(category);
    setSelectedUser(null);
    // console.log(selectedUser,"ssssssssss")
    setUsername('');
    setEmail('');
    setPassword('');
    setIsAdmin('user');
    setImage(null);
    setImage(null);
    setImg(null)
    setUploadProgress(null);

    if (user) {
      try {
        window.location.reload(true)

     const res=  await axios.put(`${apihttp}userRegistration/${selectedUser._id}`,formData,
     {
       headers: {
      
         Authorization: `Bearer ${user?.token}`,

       }
       
     }, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            setUploadProgressu(progress);
          }
          
        }
        );
        
        console.log(res);
      } catch (error) {
        console.log('Error updating user:', error);
      }
    }
    else {
      nav('/myprofile')
    }
  
  };

  const handleDeleteUser = async (id) => {
    if (user) {
      try {
        await axios.delete(`${apihttp}userRegistration/${id}`,
        {
          headers: {
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user?.token}`,

          }
          
        });
        getUsers(category);
      } catch (error) {
        console.log('Error deleting user:', error);
      }
    }
    else {
      nav('/myprofile')
    }


  };

  const [showAdd, setShowAdd] = useState(false);
  const [show, setShow] = useState("all");

  const Add = () =>{ 
    setShowAdd(true);
    setShow("add");
  }
  const sellectCategory = (category) =>{
    setShowAdd(false);
    setShow(category);
    setCategory(category)
     console.log(category)
     getUsers(category)
  }

  return (
    <>
    <h3>{t('Users')}</h3>
     <div className='py-2 instructors d-flex justify-content-between align-items-center'>
      <div>
      <span className='mx-3'>{t('Total')} : {users.length}</span>
     <button className={`btn mx-1 ${show==="all"? "active":"" }`}  onClick={()=>sellectCategory("all")}>{t('All')}</button>
     <button className={`btn mx-1 ${show==="instructor"? "active":"" }`}  onClick={()=>sellectCategory("instructor")}>{t('Instructors')}</button>
     <button className={`btn mx-1 ${show==="user" ?"active":"" }`}  onClick={()=>sellectCategory("user")}>{t('Users')}</button>
     <button className={`btn mx-1 ${show==="Admin" ? "active":"" }`}  onClick={()=>sellectCategory("Admin")}>{t('Admins')}</button>

      </div>
          <button className={`btn mx-1 justify-content-end ${show==="add" ? "active":"" }`} onClick={Add}>{t('Add')}</button>
     </div>

     {showAdd?
      <div className='py-2 row'>
              
    <div className='col-12 col-lg-6 m-auto'>
      <form onSubmit={handleCreateUser}>
      <div className='row'>
                <div className="col-12 form-group ">
                  <label className="px-2 opacity-75">{t('UserName')} :</label>
                  <input className="form-control" type="text" value={username} onChange={handleUsernamChange} />
                </div>
                <div className="col-12 form-group ">
                  <label className="px-2 opacity-75">{t('Email')} :</label>
                  <input className="form-control" type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="col-12 form-group ">
                  <label>{t('Password')} :</label>
                  <input className="form-control" type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="col-12 form-group ">
                  <label className="px-2 opacity-75">{t('Role')} :</label>
                  <select className="form-select form-select-lg" value={isAdmin} onChange={handleIsAdminChange}>
                    <option value="user">{t('User')}</option>
                    <option value="instructor">{t('Instructor')}</option>
                    <option value="Admin">{t('Admin')}</option>
                  </select>
                </div>
                <div className="col-12 form-group">
                  <label className="px-2 opacity-75">{t('Image')} :</label>
                  <input className="form-control" type="file" onChange={handleImageChange} />
                  <img src={img} width={200} />

                </div>
                {uploadProgress > 0 && (
                  <progress value={uploadProgress} max="100" />
                )}
                <div className="pt-1 col-12">

                  <button type="submit" className='w-100 btn-submit btn px-5'>Create</button>
                </div>
              </div>
            </form>
          </div>
        </div> :

<div className='py-2 row'>
{selectedUser && (
    <div className='col-12 col-lg-6 m-auto'>
                {/* <h2 className=' text-center'>Edit User</h2> */}
                <form onSubmit={handleUpdateUser}>
                  <div className='row'>
                    <div className="col-12 form-group ">
                      <label className="px-2 opacity-75">Username</label>
                      <input className="form-control" type="text" value={username} onChange={handleUsernamChange} />
                    </div>
                    <div className="col-12 form-group ">
                      <label className="px-2 opacity-75">Email</label>
                      <input className="form-control" type="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="col-12 form-group ">
                      <label className="px-2 opacity-75">Password</label>
                      <input className="form-control" type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="col-12 form-group ">
                      <label className="px-2 opacity-75">Role</label>
                      <select className="form-select form-select-lg" value={isAdmin} onChange={handleIsAdminChange}>
                        <option value="user">User</option>
                        <option value="instructor">Instructor</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                    <div className="col-12 form-group ">
                      <label className="px-2 opacity-75">Image</label>
                      <input className="form-control" type="file" onChange={handleImageChange} />
                      <img src={img} width={200} />

                    </div>
                    {(uploadProgressu > 0) && (
                      <progress value={uploadProgressu} max="100" />
                    )}
                    <div className="pt-1 col-12 text-center">
                      <button className='w-25 mx-3 btn-submit btn text-cent text-centerer' type="submit">Update</button>
                      <button className='w-25 mx-3 btn-submit btn text-center' onClick={() => setSelectedUser(null)}>Cancel</button>
                    </div>
                  </div>
                </form>
              </div>


          )}
          {users ? users.map((user) => (

            <div key={user._id} className="card my-2">
              <div className="card-body d-flex row align-items-center">
                <div className='col-12 col-lg-6  d-flex row'>
                <div className='col-3 d-flex justify-content-center'>
                  <img src={`${apihttp}${user.image}`} alt="img" className='mx-2 rounded-circle' width={70} height={70} />
                  </div>
                  <div className='col-9'>
                  <p>{user.username}</p>
                  <p>{user.email}</p>
                </div>
                </div>

                  <span className='col-5 col-lg-2 text-center border-end border-start'>{user.isAdmin}</span>
              

                <div className='col-7 col-lg-4 d-flex justify-content-evenly'>
                  <button onClick={() => handleSelectUser(user)} className='btn border-0 fs-5' ><i className="fa-solid fa-pen"></i></button>
                  <button onClick={() => handleDeleteUser(user._id)} className='btn border-0 fs-5'><i className="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          )) : ''}

        </div>
      }
    </>

  );
};

export default Instructors;




