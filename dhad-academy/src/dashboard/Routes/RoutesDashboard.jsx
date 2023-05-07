import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Admin from '../Admin/Admin';
import Contacts from '../Contacts/Contacts';
import AddBlogs from '../AddBlogs/AddBlogs';
import AddCourses from '../courses/AddCourses';
import Addvideo from '../addvideotowebsite/Addvideo';
import Instructor from '../../components/Instructor/Instructor';
import Enrollment from '../EnrollmentRequests/Enrollment';

function RoutesDashboard() {
  return (
    <>
    <Routes>
    <Route path="/admin" element={<Admin/>} >
        <Route path='/admin/contacts' element={<Contacts/>} />
        <Route path='/admin/Blogs' element={<AddBlogs/>} />
        <Route path='/admin/addCourses' element={<AddCourses/>} />
        <Route path='admin/addvideo' element={<Addvideo/>} />
        <Route path='admin/instructors' element={<Instructor/>} />
        <Route path='/admin/enrolled' element={<Enrollment/>} />


        <Route path="/admin" element={<Contacts/>} />
        </Route>
    </Routes>
    </>
  )
}

export default RoutesDashboard
