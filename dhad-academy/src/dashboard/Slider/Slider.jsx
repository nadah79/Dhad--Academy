
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { apihttp } from '../../api/api';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
function SliderAdmin() {
  const [t] = useTranslation();

  const [updatedFile, setUpdatedFile] = useState(null);
  const [files, setFiles] = useState([]);
  const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null

useEffect(() => {
  fetchFiles();
}, []);

const fetchFiles = async () => {
  try {
    const response = await axios.get(`${apihttp}slider`);
    setFiles(response.data);
    console.log(response.data)
  } catch (error) {
    console.error(error);
  }
};

const handleUpload = async (acceptedFiles) => {
  try {
    const formData = new FormData();
    formData.append('image', acceptedFiles[0]);
    const response = await axios.post(`${apihttp}slider`, formData,    {headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${user?.token}`,

    }});
    setFiles((prevFiles) => [...prevFiles, response.data]);
  } catch (error) {
    console.error(error);
  }
};

const handleDownload = async (fileId) => {
  try {
    const response = await axios.get(`${apihttp}slider/${fileId}`, {
      responseType: 'blob',
    });
    console.log(response);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${fileId}`);
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error(error);
  }
};

const handleUpdate = async (fileId) => {
  if (!updatedFile) {
    return;
  }
  try {
    const formData = new FormData();
    formData.append('file', updatedFile);
    const response = await axios.put(`${apihttp}slider/${fileId}`, formData);
    setFiles((prevFiles) =>
      prevFiles.map((file) => (file._id === fileId ? response.data : file))
    );
    setUpdatedFile(null);
  } catch (error) {
    console.error(error);
  }
};

const handleDelete = async (fileId) => {
  try {
    await axios.delete(`${apihttp}slider/${fileId}`,{headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${user?.token}`,

    }});
    setFiles((prevFiles) =>
      prevFiles.filter((file) => file._id !== fileId)
    );
  } catch (error) {
    console.error(error);
  }
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // enable autoplay
  autoplaySpeed: 2000 // set autoplay speed to 4 seconds
};
return (
  <>
    <h3>{t('Slider')}</h3>
    <div className='p-3 row'>
    {/* <h5>{t('FileUploader')}</h5> */}
    <div className=' w-50 m-auto'>
    <Dropzone onDrop={handleUpload}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} style={{ border: '1px solid black' }} className=" text-center">
          <input {...getInputProps()} type="file" />
          <label htmlFor="image">{t('SelectImage')}</label>
        </div>
      )}
    </Dropzone>
    </div>
    
    </div>

    <div className='p-3 my-3 row'>
    <h5>{t('Images')}</h5>
    <div>
    <ul>
      {files.map((file) => (
        <li key={file._id} className='py-2'>
          {file.name} ({file.mimetype})
          <img src={`${apihttp}${file.name}`} width={200} />
          <button className='btn btn-light  m-2' onClick={() => handleDownload(file._id)}>{t('Download')}</button>
          <button className='btn btn-dark m-2' onClick={() => handleDelete(file._id)}>{t('Delete')}</button>
        </li>
      ))}
    </ul>
    </div>
        </div>
        <Slider {...settings}>
    {files.map((file) => (
      <div key={file._id}>
        <img width={"100%"} height={400} src={`${apihttp}${file.name}`} alt={file.name} />
      </div>
    ))}
  </Slider>
  </>
);
}

export default SliderAdmin;

