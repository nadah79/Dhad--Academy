import React, { useEffect } from 'react'
import CommonSection from '../Common-section/CommonSection';
import services from "../../assets/images/services.png"
import { Container } from 'react-bootstrap';
import './services.css'
import { NavLink } from 'react-router-dom';
import OurServices from './OurServices';
import { useTranslation } from 'react-i18next';

function Services() {
  const [t] = useTranslation();
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <div>
      <CommonSection title={`${t('Services')}`} img={`${services}`} />
      <Container className='services py-5'>
        <div className='row d-flex align-items-center justify-content-center '>
          <div className='col-8 col-md-4 '>
            <img src={require("../../assets/images/Services2.png")} className='w-100 rounded-4' alt="" />
          </div>
          <div className='col-8 col-md-8 py-3 p-md-5'>
            <div className="row py-3">
              <div className="col-6 ">
                <p><i className="fa-solid fa-star fa-xl"></i></p>
                <h4>8+</h4>
                <p>{t('YearsExperience')}</p>
              </div>
              <div className="col-6">
                <p><i className="fa-solid fa-book-open fa-xl"></i></p>
                <h4>40+</h4>
                <p>{t('AvailableCourses')}</p>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-6 ">
                <p>
                  <i className="fa-solid fa-user-group fa-xl"></i>
                </p>
                <h4>300+</h4>
                <p>{t('GraduateStudents')}</p>
              </div>
              <div className="col-6">
                <p>
                  <i className="fa-solid fa-briefcase fa-xl"></i>
                </p>
                <h4>34+</h4>
                <p>{t('BestInstructors')}</p>
              </div>
            </div>
          </div>
        </div>
        <OurServices/>

      </Container>
    </div>
  )
}

export default Services
