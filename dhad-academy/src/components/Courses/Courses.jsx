import React, { useEffect, useState } from 'react'
import CommonSection from '../Common-section/CommonSection';
import course from "../../assets/images/courses.png"
import { Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { apihttp } from "../../api/api"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
function Courses() {
  const [t] = useTranslation();

  const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null
  const nav = useNavigate();

  useEffect(() => {
    document.title = "Courses";
  }, []);
  const { name } = useParams();

  const [courses, setCourses] = useState([]);
  const [coursesUsers, setcoursesUsers] = useState([]);
  const getCourseName = () => {

  };

  useEffect(() => {
    let courseName = "";
    switch (name) {
      case "Arabic":
        courseName = "Arabic";
        break;
      case "QuranAndReadings":
        courseName = "Quran and readings"
        break;
      case "IslamicStudies":
        courseName = "Islamic studies"
        break;
      case "QualifyingCourses":
        courseName = "Qualifying Courses"
        break;
      case "CraftsAndSkills":
        courseName = "Crafts and Skills"
        break;
      case "FieldTrips":
        courseName = "Field tourism";
        break;
      default:
        courseName = "";
    }
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apihttp}course/getCourse?coursedepartment=${courseName}`);
        setCourses(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    getCourseName();
  }, [name]);

  const handellerEnroll = async (course) => {
    if (user) {
      try {
        await axios.post(`${apihttp}userRegistration/enrollment/${course._id}`, null, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
          .then((response) => {
            if (response.status === 201) { // Check if the response status is successful
              // nav(`/course/${course.title}`); // Redirect to the course page
              toast.success('You have successfully enrolled in the course contact us to display all matrials!'); // Display a success message using toast
            }
            if (response.status === 400) { // Check if the response status is successful
              // nav(`/course/${course.title}`); // Redirect to the course page
              toast.warning(' You Already Enrollment request '); // Display a success message using toast

            }
          });
      } catch (error) {
        toast.warning(' You Already Enrollment request '); // Display a success message using toast

      }
    } else {
      nav('/myprofile');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apihttp}userRegistration/courses/${user._id}`);

        console.log(res.data);
        setcoursesUsers(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    getCourseName();
  });


  return (
    <>
      <CommonSection title={t(`${name}`)} img={`${course}`} />
      <Container className='py-5'>
        <div className="row d-flex justify-content-center">
          <ToastContainer />
          {courses.length > 0 ? courses.map((course) => (
            <div key={course._id} className="col-10 col-md-6 col-lg-4 pb-5">
              <div className="card rounded-20 h-100">
                <img src={`${apihttp}${course.image}`} height={250} className="rounded-img-top " alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                  <p className="card-title"><i className="fa-regular fa-clock pe-1"></i>{course.hours} {t('Hours')}</p>
                  <h6 className="card-text">
                  {
              i18n.language=="en"? course.courseName :course.courseNameAR
            }
                    </h6>
                  <div className=' d-flex  '>
                    <span className=''>{course.title} {t('EGP')}</span>
                    <p className='px-3 text-decoration-line-through'>{course.price} {t('EGP')}</p>

                  </div>

                  <button onClick={() => handellerEnroll(course)} className={`w-100 btn-submit btn  px-5`}>
                    {t("EnrollNow")}
                  </button>
                </div>
              </div>
            </div>
          )) : <div className=' text-center'>No Courses added</div>}

        </div>
      </Container>
      <div>     {coursesUsers.map((el) => (<div>
        <h1>{el.course}</h1>
      </div>))}


      </div>
    </>
  )
}

export default Courses
