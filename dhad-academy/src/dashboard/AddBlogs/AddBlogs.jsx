import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment"
import 'moment/min/locales';

import { Container } from 'react-bootstrap';
import { apihttp } from "../../api/api"
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
const AddBlogs = () => {
  const [t] = useTranslation();

  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [titleAR, setTitleAR] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionAR, setDescriptionAR] = useState('');
  const [image, setImage] = useState(null);
  const [updatingBlogId, setUpdatingBlogId] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null
  const nav = useNavigate();
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data } = await axios.get(`${apihttp}blog`);
    setBlogs(data);
    console.log(data,"dd");
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleAddBlog = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('titleAR', titleAR);
    formData.append('description', description);
    formData.append('descriptionAR', descriptionAR);
    formData.append('image', image);
    if (user) {
    try {
      const { data } = await axios.post(`${apihttp}blog/addblog`, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
        headers: {
          // 'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${user.token}`,

        }
      });
      fetchBlogs();
      setTitle('');
      setTitleAR('');
      setDescription('');
      setDescriptionAR('');
      setImage(null);
      setUploadProgress(0);
      setErrorMessage('');
      
    } catch (error) {
      console.error(error);
      setErrorMessage('Error uploading file. Please try again.');
    }
  }
    else {
      nav('/myprofile')
    }
  
  };


  const handleDeleteBlog = async (blog) => {
    if (user) {

    try {
      await axios.delete(`${apihttp}blog/${blog._id}`,{
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${user.token}`,

      }
    });
      fetchBlogs();
      setErrorMessage('');

    } catch (error) {
      console.error(error);
      setErrorMessage('Error deleting file. Please try again.');
    }
  }
  else {
    nav('/myprofile')
  }

  };

  const [showAdd, setShowAdd] = useState(false);
  const Add = () => setShowAdd(true);
  const All = () => setShowAdd(false);


  return (
    <>
    <h3>{t('Blogs')}</h3>
     <div className='py-2 instructors  d-flex justify-content-between align-items-center'>
      <div>
      <span className='mx-3'>{t('Total')}: {blogs.length}</span>
     <button className={`btn mx-1 ${showAdd ? "":"active" }`}  onClick={All}>{t('All')}</button>
    
      </div>
     <button className={`btn mx-1 ${showAdd ? "active":"" }`} onClick={Add}>{t('Add')}</button>
     </div>
      {showAdd?
      <div className='py-4 row'>
            <div className='col-12 col-lg-6 m-auto'>

      <form onSubmit={ handleAddBlog}>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="titleAR">Title (AR)</label>
          <input
            type="text"
            className="form-control"
            id="titleAR"
            value={titleAR}
            onChange={(event) => setTitleAR(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="descriptionAR">Description (AR)</label>
          <textarea
            className="form-control"
            id="descriptionAR"
            value={descriptionAR}
            onChange={(event) => setDescriptionAR(event.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={handleFileChange}
          />
          {uploadProgress > 0 && (
            <div className="progress mt-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${uploadProgress}%` }}
                aria-valuenow={uploadProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {uploadProgress}%
              </div>
            </div>
          )}
        </div>
        <div className="pt-3 col-12">

        <button type="submit" className="w-100 btn-submit btn px-5">
          {updatingBlogId ? 'Update Blog' : 'Add Blog'}
        </button>
        </div>
      </form>
      </div>

      {errorMessage && (
        <div className="alert alert-danger mt-3">{errorMessage}</div>
      )}

      </div>
:
 <div className='row d-flex justify-content-center justify-content-md-start fs-5 py-4'>

{blogs.map((blog) => (
        <div className="col-12 col-lg-6  mb-3" key={blog._id}>
         <div className='card h-100'>
         <div className="card-body my-2 d-flex flex-column justify-content-between  ">
            
            <p>
            {
              i18n.language=="en"? moment(blog.createdAt).fromNow() :moment(blog.createdAt).locale('ar').fromNow()
            }
            </p>
            <div className="py-2 my-2 d-flex justify-content-center">
              <img
                src={`${apihttp}${blog.image}`}
                alt={blog.title}
                width={"60%"} height={200}
              />
              </div>
              <p className='fw-bold'>{t('TitleEN')} <p className=' fw-normal'>  {blog.title}</p></p>
              <p className='fw-bold'>{t('TitleAR')}  <p className=' fw-normal'>  {blog.titleAR}</p></p>
              <p className='fw-bold '>{t('Description')} <p className=' fw-normal overflow-auto' style={{maxHeight:"100px"}}>  {blog.description}</p></p>
  
              <p className=' fw-bold'>{t('DescriptionAR')} <p className=' fw-normal overflow-auto' style={{maxHeight:"100px"}}>  {blog.descriptionAR}</p></p>
            
            <div className="pt-3 text-center">
              <button
                className=" btn-submit btn px-5"
                onClick={() => handleDeleteBlog(blog)}
              >
                {t('Delete')}
              </button>
              </div>
            </div>
         </div>
        </div>
      ))}

</div>
      
      }  
    </>
  
  );
};

export default AddBlogs;



