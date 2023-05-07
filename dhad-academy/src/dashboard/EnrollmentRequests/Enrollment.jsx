import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { apihttp } from "../../api/api"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Enrollment() {
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
    <h3>Enrollment Requests</h3>
          {/* <h1 className="mb-4"></h1> */}
          <div className='py-2'>
          <span>Total requests: {enrollmentRequests ?enrollmentRequests.length:""}</span>
      <ToastContainer />
      <div className='table-responsive'>
      <table className="table align-middle text-center">
        <thead >
          <tr>
            <th>User Name</th>
            <th>Image</th>
            <th>email</th>
            <th>Course</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enrollmentRequests ? enrollmentRequests.map((enrollmentRequest) => (
            <tr key={enrollmentRequest._id}>
              <td>{enrollmentRequest.userId?.usernam}</td>
              <td><img src={`${apihttp}${enrollmentRequest.userId?.image}`}alt="" width={100} height={100} srcset="" /></td>
              <td>{enrollmentRequest.userId?.email}</td>
              <td>{enrollmentRequest.courseId?.courseName}</td>
              <td>{enrollmentRequest.status}</td>

              <td>
                <button className="btn btn-accecpt mx-2" onClick={() => handleAccept(enrollmentRequest)}>Accept</button>
                <button className="btn btn-delete " onClick={() => handleReject(enrollmentRequest)}>Reject</button>
              </td>
            </tr>
          )) : "loading..."}
        </tbody>
      </table>
      </div>
     
      </div>
    </>
  );
}

export default Enrollment;