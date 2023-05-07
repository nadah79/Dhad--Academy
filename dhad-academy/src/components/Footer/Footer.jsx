import React from 'react'
import './footer.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const [t] = useTranslation();
  return (
    <>
      <footer className="">
        <div className="p-4">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-md-0 d-flex align-items-center justify-content-center">
              <img src={require("../../assets/images/logo.png")} alt="" width={"50%"} />
            </div>
            <div className="col-sm-12 col-lg-6 mb-4 mb-md-0 mt-md-4">
              <div className="row d-flex  justify-content-center px-md-5 fs-6">
                <div className="col-6 mb-1 mb-md-0 px-lg-5 p-0">
                  <h6 className="text-uppercase  mb-2">{t('QUICK-LINKS')}</h6>
                  <ul className="list-unstyled p-0">
                    <li className='mb-2'>
                      <NavLink to="/home"
                      >
                        {t('Home')}
                      </NavLink>
                    </li>
                    <li className='mb-2'>
                      <NavLink to="/about"
                      >
                        {t('About')}
                      </NavLink>
                    </li>
                    <li className='mb-2'>
                      <NavLink to="/services"
                      >{t('Services')}</NavLink>
                    </li>
                    {/* <li className='mb-2'>
                    <div className='dropdown '>
              <button className=" fs-5 dropdown-toggle btn px-0 border-0"  id="DropdownMenu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {t('Courses')}
              </button>
              <ul className="dropdown-menu" aria-labelledby="DropdownMenu">
                 <li> <NavLink className="dropdown-item" to="/courses/Arabic" >Arabic</NavLink></li>
                 <li> <NavLink className="dropdown-item" to="/courses/Quran and readings"  >Quran and readings</NavLink></li>
                 <li> <NavLink className="dropdown-item" to="/courses/Islamic studies"  >Islamic studies</NavLink></li>
                 <li> <NavLink className="dropdown-item" to="/courses/Qualifying courses"  >Qualifying courses</NavLink></li>
                 <li> <NavLink className="dropdown-item" to="/courses/Crafts and Skills" >Crafts and Skills</NavLink></li>
                 <li> <NavLink className="dropdown-item" to="/courses/Field tourism" >Field tourism</NavLink></li>
               
              
              </ul>
                </div>
                    </li> */}
                    <li className='mb-2'>
              <NavLink className="" >
              {t('Courses')}
              </NavLink>
              
                    </li>
                  
                    <li className='mb-2'>
                      <NavLink
                        to="/blog"
                      >
                        {t('Blog')}
                      </NavLink>
                    </li>
                    <li className='mb-2'>
                      <NavLink to="/instructors"
                      >{t('Instructors')}</NavLink>
                    </li>
                    <li className='mb-2'>
                      <NavLink to="/contact"
                      >{t('contacts')}</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 mb-1 mb-md-0 p-0">
                  <h6 className="mb-2">{t('COURSE-CATEGORIES')}</h6>

                  <ul className="list-unstyled p-0">
                    <li className='mb-2'>
                      <a href="/courses/Arabic" >{t('Arabic')}</a>
                    </li>
                    <li className='mb-2'>
                      <a href="/courses/Quran and readings">{t('QuranAndReadings')}</a>
                    </li>
                    <li className='mb-2'>
                      <a href="/courses/Islamic studies">{t('IslamicStudies')}</a>
                    </li>
                    <li className='mb-2'>
                      <a href="/courses/Qualifying courses">{t('QualifyingCourses')}</a>
                    </li>
                    <li className='mb-2'>
                      <a href="/courses/Crafts and Skills">{t('CraftsAndSkills')}</a>
                    </li>
                    <li className='mb-2'>
                      <a href="/courses/Field tourism">{t('FieldTrips')}</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center Copyright ">
          <p className='py-3 m-0'>Copyright © 2022 <a href="https://irisstudio.org/" target="_blank" rel="noreferrer">IRIS Studio</a></p>
        </div>
      </footer>
    </>
  )
}

export default Footer
