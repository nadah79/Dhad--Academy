import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { apihttp } from "../../api/api"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
function Enrollment() {
  const [t] = useTranslation();
  const [enrollmentRequests, setEnrollmentRequests] = useState([]);
  const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null

  useEffect(() => {
    async function fetchEnrollmentRequests() {
      try {
        const response = await axios.get(`${apihttp}userRegistration/enrollment-requests`,{
          headers: {
            Authorization: `Bearer ${user?.token}`
          }
        });
        setEnrollmentRequests(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEnrollmentRequests();
  }, []);

  async function handleAccept(enrollmentRequest) {
    try {
      const response = await axios.put(`${apihttp}userRegistration/courses/${enrollmentRequest._id}`, {
        enrollmentRequest:{courseId:enrollmentRequest.courseId._id,Userid:enrollmentRequest.userId._id },
    
      },{

        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      if (response.status === 201) {
        setEnrollmentRequests(prevState => prevState.filter(req => req._id !== enrollmentRequest._id));
        toast.success('You have successfully enrolled in the course contact us to display all matrials!'); // Display a success message using toast

      }
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  async function handleReject(enrollmentRequest) {
    try {
      console.log(enrollmentRequest._id);
      const response = await axios.delete(`${apihttp}userRegistration/courses/${enrollmentRequest._id}`, {
        status: 'rejected'
      },{   headers: {
        Authorization: `Bearer ${user.token}`
      }});
      console.log(response);
      if (response.status == 200) {
        setEnrollmentRequests(prevState => prevState.filter(req => req._id !== enrollmentRequest._id));
        toast.dark('You have successfully rejected in the course!'); // Display a success message using toast
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <h3>{t('Requestes')}</h3>
          {/* <h1 className="mb-4"></h1> */}
          <div className='py-2'>
          <span>{t('Total')} : {enrollmentRequests ?enrollmentRequests.length:""}</span>
      <ToastContainer />
      {enrollmentRequests.length?
      <div className='table-responsive py-5'>
      <table className="table align-middle text-center">
        <thead >
          <tr className='align-middle'>
            <th>{t('UserName')}</th>
            <th>{t('Image')}</th>
            <th>{t('Email')}</th>
            <th>{t('Course')}</th>
            <th>{t('Status')}</th>
            <th>{t('Actions')}</th>
          </tr>
        </thead>
        <tbody>
          {enrollmentRequests ? enrollmentRequests.map((enrollmentRequest) => (
            <tr key={enrollmentRequest._id}>
              <td>{enrollmentRequest.userId?.username}</td>
              <td><img src={`${apihttp}${enrollmentRequest.userId?.image}`}alt="" width={100} height={100} srcset="" /></td>
              <td>{enrollmentRequest.userId?.email}</td>
              <td>{enrollmentRequest.courseId?.courseName}</td>
              <td>{enrollmentRequest.status}</td>

              <td>
                <button className="btn btn-accecpt m-2" onClick={() => handleAccept(enrollmentRequest)}>{t('Accept')}</button>
                <button className="btn btn-delete m-2" onClick={() => handleReject(enrollmentRequest)}>{t('Reject')}</button>
              </td>
            </tr>
          )) : "loading..."}
        </tbody>
      </table>
      </div>:
       <div className='text-center py-2'>
        <p>{t('NoRequests')}</p>
      </div>
      }
     
      </div>
    </>
  );
}

export default Enrollment;