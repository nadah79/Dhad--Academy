import React, { useEffect, useState } from 'react'
import CommonSection from '../Common-section/CommonSection';
import teachers from "../../assets/images/teachers.png"
import { Col, Container, Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';
import instructor from "../../assets/images/image 5.png"
import "./teachers.css";
import axios from 'axios';
import {apihttp} from "../../api/api"
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

function Teachers() {
  const [t] = useTranslation();

    useEffect(() => {
        document.title ="Teachers";  
      }, []);
      const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${apihttp}userRegistration?category=instructor`,   {   headers: {
        // 'Content-Type': 'multipart/form-data',
        // "Authorization": `Bearer ${token.token}`,

      }});
      setInstructors(response.data.body);
      
    } catch (error) {
      console.log('Error getting users:', error);
    }
  };
  return (
    <>
      <CommonSection title={t('Instructors')} img={`${teachers}`} />
      <Container className='py-5'>
        <Row xs={2} lg={3} className=''>
        {instructors?instructors.map((instructor) => (
            
          <Col key={instructor?._id}>
            <Instructor name={instructor?.username} img={`${apihttp}${instructor?.image}`} position={instructor?.isAdmin} />
          </Col>
             )):''} 

        </Row>

      </Container>
      <section className='be-instructor position-relative d-flex justify-content-between align-items-center py-5 overflow-hidden'>
        <div className="circle  rounded-circle position-absolute top-50 start-100 translate-middle">
        </div>
        <div className="circle circle2 rounded-circle position-absolute translate-middle">
        </div>
        <Container className='d-flex justify-content-between align-items-center'>
        <div>
        <h2 className='white fs-1 fw-bold'>{t('BePartOfUs')}</h2>
        <p className='white fs-5 fw-bold'>{t('BecomeInstructor')}</p>
        </div>
        <a href="https://forms.gle/WKcN9ViYeowzLyDf7" target="_blank" rel="noreferrer">
        <button className='btn btn-apply border-0 '> {t('Apply')}
        </button>
        </a>
        </Container>
        
      </section>
      
    </>
  )
}

export default Teachers
