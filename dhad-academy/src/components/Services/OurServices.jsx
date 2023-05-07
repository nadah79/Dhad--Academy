import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function OurServices() {
  const [t] = useTranslation();

  return (
    <>
        <div className='row pt-5  justify-content-center text-center '>
          <h3 className='col-12'>{t('OurServices')}</h3>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
              <h5> <NavLink to="/courses/Arabic">{t('Arabic')}</NavLink></h5>
            </div>
          </div>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
            <h5> <NavLink to="/courses/Quran and readings">{t('QuranAndReadings')}</NavLink></h5>
            </div>
          </div>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
            <h5> <NavLink to="/courses/Islamic studies">{t('IslamicStudies')}</NavLink></h5>
            </div>
          </div>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
            <h5> <NavLink to="/courses/Qualifying courses">{t('QualifyingCourses')}</NavLink></h5>
            </div>
          </div>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
            <h5> <NavLink to="/courses/Crafts and Skills">{t('CraftsAndSkills')}</NavLink></h5>
            </div>
          </div>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
            <h5> <NavLink to="/courses/Field Trips">{t('FieldTrips')}</NavLink></h5>
            </div>
          </div>
          
        </div>
      
    </>
  )
}

export default OurServices
