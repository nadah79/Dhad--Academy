import React from 'react'
import { useParams } from 'react-router-dom';
import CommonSection from '../Common-section/CommonSection';
import courses from "../../assets/images/course details.png"
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import "./courses.css"
import { apihttp } from '../../api/api';
import i18n from 'i18next';

function CourseDetails() {
  const [t] = useTranslation();
  const lessons  = useSelector((state) => state.teacher)
  const dispatch = useDispatch()
    const {name}=useParams();
   console.log(lessons.lessons);
   const course=lessons.lessons;
  return (
    <>
       <CommonSection 
       title={
        i18n.language=="en"? course.courseName :course.courseNameAR
      }
       img={`${courses}`} />
       <Container className='py-5 lessons'>

        {lessons && (lessons.lessons&&lessons.lessons.lessons)?lessons.lessons.lessons.map((el,i)=>(
       <div className='mb-4'>
          <h3>{t("Lesson")} {i+1} </h3>
     <div className="hr w-100"></div>
     <p>
     <a href={el?.video} target="_blank" rel="noopener noreferrer">{el.name} {t("Video")}</a>      
     </p>
     <p>
     <a href={`${apihttp}/${el?.pdf}`} target="_blank" rel="noopener noreferrer">{el?.name} {t("PDF")}</a>      
     </p>

     <p>
     <a href={el?.meeting} target="_blank" rel="noopener noreferrer">{el?.name} Google Meet</a>
     </p>

       </div>
   
    
     )):""}
          </Container>

     </>

        )}
        

export default CourseDetails;