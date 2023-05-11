
import React, { useEffect, useState } from 'react';
import CommonSection from '../Common-section/CommonSection';
import contact from '../../assets/images/contact.png';
import { Container } from 'react-bootstrap';
import './contact.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { NavLink } from 'react-router-dom';
import { apihttp } from '../../api/api';

function Contact() {
  const [t] = useTranslation();
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    subject: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${apihttp}contact/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);
      setFormData({name:"",phonenumber:"",subject:"",message:""});
      if(data.statuscode==201){
      setShowPopup(true); // Show popup for success message
      setTimeout(() => {
        setShowPopup(false); // Hide popup after 5 seconds
      }, 5000);
    }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <CommonSection title={`${t('ContactUs')}`} img={`${contact}`} />
      <Container className="p-5">
        <h3>{t('ContactUs')}</h3>
        <div className="hr"></div>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-7 pe-lg-3">
            <p>{t('ContactUsContent')}</p>
            <form className="pb-5" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6 form-group pb-3">
                  <label className="form-label" htmlFor="name">
                  {t('Name')}
                  </label>
                  <input type="text" id="name" className="form-control" name="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="col-6 form-group pb-3">
                  <label className="form-label" htmlFor="email">
                  {t('Email')} 
                  </label>
                  <input type="email  " id="phone" className="form-control" name="phone" required value={formData.phonenumber} onChange={(e)=>setFormData({...formData,phonenumber:e.target.value})} />
                </div>

                <div className="col-12 form-group pb-3">
                  <label className="form-label" htmlFor="subject">
                  {t('Subject')}
                  </label>
                  <input type="text" id="subject" className="form-control" name="subject" required value={formData.subject} onChange={handleChange} />
                </div>

                <div className="form-group col-12 pb-3">
                  <label className="form-label" htmlFor="message">
                  {t('Message')}
                  </label>
                  <textarea className="form-control" id="message" rows="4" name="message" required value={formData.message} onChange={handleChange}></textarea>
                </div>
              </div>
              <div className="pt-3">
                <button type="submit" className="btn-submit btn px-5">
                {t('ContactUs')}
                </button>
              </div>
            </form>
            {showPopup && (
          <div className="success-popup">
            <p>message  sended  successfully!</p>
          </div>
        )}
          </div>

          <div className="col-12 col-lg-4  row d-flex justify-content-between">
          <div className='col-12 col-md-5 col-lg-12'>
              <h5>{t('PhoneNumbers')}</h5>
              <div className="hr w-100"></div>
              <div className={`ltr ${i18n.language=="en" ? "":"text-end"}`}>
              <p>
                <i className="fa-solid fa-phone"></i>
                (+2) 0100 763 3800
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>(+2) 0109 764 5047
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>
                (+2) 0110 040 6408
              </p>
              </div>
              
               {/* <p><img src={require("../../assets/images/Vector.png")}  alt="" /></p> */}
             </div>
             <div className='col-12 col-md-5 col-lg-12 email '>
               <h5 >{t('Email')}</h5>
               <div className='hr w-100'></div>
               <div className={`ltr ${i18n.language=="en" ? "":"text-end"}`}>
               <p>
               <NavLink to="mailto:Info@dhadacademy.com" className=" fw-light">
               <i className="fa-regular fa-envelope"></i>Info@dhadacademy.com
               </NavLink>
               </p>
            </div>
             </div>
             <div className='col-12 col-md-5 col-lg-12 '>
              <h5>{t('Address')}</h5>
              <div className='hr w-100'></div>
               <p><i className="fa-solid fa-location-dot"></i> {t('Addres')}</p>
            </div>
            <div className='col-12 col-md-5 col-lg-12  '>
              <h5 >{t('WorkingHours')}</h5>
               <div className='hr w-100 '></div>
               <p className=''><i className="fa-regular fa-clock "></i>10:00 {t('AM')} - 06:00 {t('PM')}</p>
             </div>
           </div>

        </div>


       </Container>

       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.169245783417!2d31.16288551494053!3d27.182416954971163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1445095c0090fd45%3A0x49288d1cdc6f41f4!2sCID%20Pharmaceutical%20Factory!5e0!3m2!1sen!2seg!4v1680791446864!5m2!1sen!2seg"
        width="100%" height="500"
        title='map'
        style={{ border: 0 }} allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </>
  )
}

export default Contact
