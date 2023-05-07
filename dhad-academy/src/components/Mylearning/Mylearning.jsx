import React, { useState, useEffect } from "react";
import axios from "axios";
import { apihttp } from "../../api/api"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const Mylearning = () => {
  const [t] = useTranslation();
  const [coursesUsers, setcoursesUsers] = useState([]);
  const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null
  const lessons  = useSelector((state) => state.teacher)
  const dispatch = useDispatch()
  const nav = useNavigate()

console.log(lessons.lessons);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apihttp}userRegistration/courses/${user._id}`);
        setcoursesUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  const handellersendLessons = (course) => {
    
    console.log("course");

    dispatch({type:"getalllessons",payload:course})
    console.log(course)
    
    if (course?.lessons.length>0) {
      
      nav(`/course/${course.title}`)
    }
    else{
        toast.success('no lessons in this course yet '); // Display a success message using toast     
    }
  }
  return (
    <Container className='py-5'>
    <div className="row d-flex justify-content-center">
      <ToastContainer />
      {coursesUsers && coursesUsers.length > 0 ? (
    coursesUsers.map((course) => (
        // add condition to check for null course ID
       course.courseId && (
            <div className="col-10 col-md-6 col-lg-4 pb-5">
                <div className="card rounded-20">
                    <img src={`${apihttp}${course.courseId?.image}`} height={250} className="rounded-img-top" alt="..." />
                    <div className="card-body d-flex flex-column justify-content-between" style={{height:"200px"}}>
                        <p className="card-title"><i className="fa-regular fa-clock pe-1"></i>{course.courseId?.hours} {t('Hours')}</p>
                        <h6 className="card-text">{course.courseId?.title } </h6>
                        <h6 className="card-text">{course.courseId?.lessons.length} {t("Lessons")} </h6>
                        <button onClick={()=>handellersendLessons(course.courseId)} className="w-100 btn-submit btn px-5">{t("StartNow")}</button>
                    </div>
                </div>
            </div>
       )
    ))
) : (
    <div className="d-flex justify-content-center align-items-center" style={{height:"200px"}}>
        <p>no courses yet</p> 
    </div>
)}
</div>
    </Container>
    
  );
};

export default Mylearning;