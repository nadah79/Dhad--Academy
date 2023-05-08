import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions/actions';
import  { useEffect, useState } from 'react';
import moment from "moment"
import { Container } from 'react-bootstrap';
import "./contact.css"
import axios from 'axios';
import { useNavigate } from 'react-router';
import { apihttp } from '../../api/api';

function Contacts() {



  const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null
  const nav = useNavigate();

  const [contacts, setContacts] = useState([]);

  // Handler to delete a single contact
  const handleDeleteContact = async (id) => {
    if (user) {
    try {
      const response = await axios.delete(`${apihttp}contact/deleteMessage/${id}`,
      {
        headers: {
         
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);
      setContacts(contacts.filter(contact => contact._id !== id));
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
} else {
  nav('/myprofile');
}
  };

  // Handler to delete all contacts
  const handleDeleteAllContacts = async () => {

    if (user) {
      try {
      const response = await axios.delete(`${apihttp}contact/deleteMessage`,
      {
        headers: {
         
          Authorization: `Bearer ${user.token}`,
        },
      });
      setContacts([]);
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  } else {
    nav('/myprofile');
  }
  };

  // Fetch contacts on component mount
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${apihttp}contact`,   {
          headers: {
           
            Authorization: `Bearer ${user.token}`,
          },
        });
        if(response.data.statuscode==200){
        setContacts(response.data.body.getContact);
        }
        // console.log(response.data.body.getContact);
      } catch (error) {
        console.error(error);
      }
      
    };

    fetchContacts();
  }, [])

  



  return (
    <>
    <h3>Contacts</h3>
    <div className='py-2 '>
    <span>Total: {contacts.length}</span>
     <button className="btn mx-3 btn-delete"  onClick={handleDeleteAllContacts}>Delete All</button>

     </div>
    <Container className='py-2 w-75 contact'>
 {contacts.length>0?contacts.map(post => (

    <div key={post._id}  className=" card m-1 m-lg-4 ">
          <div className="card-body  align-items-center">
          <p>{moment(post.createdAt).fromNow()}</p>
          <p className=' fw-bold'>Name: <span className=' fw-normal'> {post.name} </span></p>
          <p className=' fw-bold'>Email: <span className=' fw-normal'> {post.phonenumber}</span></p>
          <p className=' fw-bold'>subject:<span className=' fw-normal'> {post.message}</span></p>
          <p className=' fw-bold'>message:<span className=' fw-normal'>{post.subject}</span> </p>
          <div className=' text-center mt-3' >
          <button className="btn btn-delete" onClick={()=>handleDeleteContact(post._id)}>Delete</button>
          </div>
            </div>
          </div>
             )):
             <div className='text-center py-2'>
             No messages
             </div>
             }
    </Container>
    </>
  )
}

export default Contacts
