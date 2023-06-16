
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment"
import { apihttp } from "../../api/api"
import { useTranslation } from 'react-i18next';
function Instructor(props) {
  const [t] = useTranslation();

  return (

    <>
      <div className='py-3 py-lg-4 d-flex flex-column mx-5 px-0'>
        <img className='rounded-4 ' src={props.img} alt={props.name} width={"100%"} height={250}  />
        <h4 className='pt-3' >{props.name}</h4>
        <p>{t('Instructor')}</p>
      </div>
    </>
  )
}

export default Instructor
