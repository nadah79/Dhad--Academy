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
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
function Contacts() {
  const [t] = useTranslation();


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
        const response = await axios.get(`${apihttp}contact`);
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
    <h3>{t('Contacts')}</h3>
    <div className='py-2 '>
    <span>{t('Total')} : {contacts.length}</span>
     <button className="btn mx-3 btn-delete"  onClick={handleDeleteAllContacts}>{t('DeleteAll')}</button>

     </div>
    <Container className='py-5 w-75 contact'>
 {contacts.length>0?contacts.map(post => (

    <div key={post._id}  className=" card m-1 m-lg-4 ">
          <div className="card-body  align-items-center">
          <p>
          {
              i18n.language=="en"? moment(post.createdAt).fromNow() :moment(post.createdAt).locale('ar').fromNow()
            }
    </p>
          <p className=' fw-bold'>{t('Name')} : <span className=' fw-normal'> {post.name} </span></p>
          <p className=' fw-bold'>{t('Email')} :<span className=' fw-normal'> {post.phonenumber}</span></p>
          <p className=' fw-bold'>{t('Subject')} :<span className=' fw-normal'> {post.message}</span></p>
          <p className=' fw-bold'>{t('Message')} :<span className=' fw-normal'>{post.subject}</span> </p>
          <div className=' text-center mt-3' >
          <button className="btn btn-delete" onClick={()=>handleDeleteContact(post._id)}>{t('Delete')}</button>
          </div>
            </div>
          </div>
             )):
             <div className='text-center py-2'>
             {t('NoMessages')}
             </div>
             }
    </Container>
    </>
  )
}

export default Contacts
