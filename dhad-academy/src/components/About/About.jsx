import React, { useEffect } from 'react';
import CommonSection from '../Common-section/CommonSection';
import about from "../../assets/images/about.png"
import { Container } from 'react-bootstrap';
import "./about.css"
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


function About() {
  const [t] = useTranslation();
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <CommonSection title={`${t('About')}`} img={`${about}`} />
      <Container className='py-5'>
        <div className='row d-flex justify-content-center justify-content-md-between align-items-center'>
          <div className='col-8 col-md-4 '>
            <img src={require("../../assets/images/who we are.png")} className='w-100 rounded-4' alt="" />
          </div>
          <div className='col-12 col-md-8 col-lg-5 py-3'>
            <h3>{t('WhoWeAre')}</h3>
            <h5>{t('WhoWeAreContent1')}</h5>
            <p className='my-0'>{t('WhoWeAreContent2')}</p>
            <p className='my-0'>{t('WhoWeAreContent3')}</p>
          </div>
          <div className=' d-inline d-md-block col-1 col-lg-2 '>
          </div>
        </div>
        <div className='pt-3 pt-lg-5'>
          <h3>{t('WithUs')}</h3>
          <p>{t('WithUsContent')}</p>
        </div>
        <div className='pt-3 pt-lg-5'>
          <h3>{t('OurHistory')}</h3>
          <p className='w-50'>{t('OurHistoryContent')}</p>
        </div>
        <div className='row d-flex justify-content-center justify-content-md-between align-items-center '>
        <div className='col-6 col-md-4 py-3 py-md-5'>
        <img src={require("../../assets/images/history2.png")} className='w-100 rounded-4 py-2' alt="" />
        <img src={require("../../assets/images/history.png")} className='w-100 rounded-4 py-2' alt="" />
        </div>
        <div className='col-12 col-md-6 py-3 py-md-5 '>
              <ul className={`${i18n.language=="en"? "timeline":"right-timeline " }`}>
                <li className="event" data-date="2015">
                <p>{t('2015')}</p>
                </li>
                <li className="event" data-date="2017">
                  <p>{t('2017')}</p>
                </li>
                <li className="event" data-date="2021">
                  <p>
                  {t('2021')}
                  </p>
                </li>
                <li className="event" data-date="2023">
                  <p>
                  {t('2023')}                  
                  </p>
                </li>
              </ul>
        </div>


        </div>
    
      </Container>

    </>
  )
}

export default About
