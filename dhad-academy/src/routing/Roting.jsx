import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import About from '../components/About/About';
// import Courses from '../components/Courses/Courses';
import Services from '../components/Services/Services';
// import Teachers from '../components/Teachers/Teachers';
import Contact from '../components/Contact/Contact';
// import Blog from '../components/Blog/Blog';
import Admin from '../dashboard/Admin/Admin';
import Contacts from '../dashboard/Contacts/Contacts';
import BlogDetails from '../components/Blog-Details/BlogDetails';
// import Test from '../api/Test';
import AddBlogs from '../dashboard/AddBlogs/AddBlogs';
import Addvideo from '../dashboard/addvideotowebsite/Addvideo';
import CourseDetails from '../components/Courses/CourseDetails';
import MyProfile from '../components/My Profile/MyProfile';
import Slider from '../dashboard/Slider/Slider';
import Mylearning from '../components/Mylearning/Mylearning';
import Layout from '../components/Layout/Layout';
const LazyLoadingBlog = React.lazy(() => import("../components/Blog/Blog"));
const LazyLoadingTeachers = React.lazy(() => import("../components/Teachers/Teachers"));
const LazyLoadingCourses = React.lazy(() => import("../components/Courses/Courses"));
const LazyLoadingRequests = React.lazy(() => import("../dashboard/EnrollmentRequests/Enrollment"));
const LazyLoadingAddCourses= React.lazy(() => import("../dashboard/courses/AddCourses"));
const LazyLoadingInstructor= React.lazy(() => import("../dashboard/Instructors/Instructors"));

const Roting = () => {
// const users = JSON.parse(localStorage.getItem("token"))

// const users = JSON.parse(localStorage.getItem("token"))
const users = JSON.parse(localStorage.getItem("token"))?JSON.parse(localStorage.getItem("token")):null



    return (
        <>     
       <Routes>
       <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/test" element={<Test/>} /> */}

        <Route path="/about" element={<About/>} />
        {/* <Route path="/courses" element={<Courses/>} /> */}
        <Route path="/courses/:name" element={
          <React.Suspense fallback="Loading Courrses...">
          <LazyLoadingCourses/>
      </React.Suspense>
        } />
        <Route path="/course/:name" element={<CourseDetails/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/instructors" element={<React.Suspense fallback="Loading Instructors...">
        <LazyLoadingTeachers/>
          </React.Suspense>} />
    {users? <Route path="/mylearning" element={<Mylearning/>} /> : <Route path="/mylearning" element={<MyProfile/>} />}

        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={
          <React.Suspense fallback="Loading Blogs...">
              <LazyLoadingBlog/>
          </React.Suspense>
          } />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        </Route>
      {!users?  <Route path="/myprofile" element={<MyProfile/>} />:
        <Route path="/myprofile" element={<Home/>} />
      }

     {users && users.isAdmin=='Admin'?     <Route path="/admin" element={<Admin/>} >
        <Route path='/admin/contacts' element={<Contacts/>} />
        <Route path='/admin/Blogs' element={<AddBlogs/>} />
        <Route path='/admin/addCourses' element={
          <React.Suspense fallback="Loading Courrses...">
          <LazyLoadingAddCourses/>
      </React.Suspense>
        } />
        <Route path='admin/addvideo' element={<Addvideo/>} />
        <Route path='admin/instructors' element={
          <React.Suspense fallback="Loading Instructors...">
          <LazyLoadingInstructor/>
      </React.Suspense>
        } />
        <Route path='admin/requestes' element={
          <React.Suspense fallback="Loading Requests...">
          <LazyLoadingRequests/>
      </React.Suspense>
        } />
        <Route path='admin/slider' element={<Slider/>} />
        
        <Route path="/admin" element={
          <React.Suspense fallback="Loading Instructors...">
          <LazyLoadingInstructor/>
      </React.Suspense>
        } />

        </Route>:
        <Route path="/admin" element={<Home/>} />
    }
  
      </Routes>
     

    
        </>
    );
}

export default Roting;
