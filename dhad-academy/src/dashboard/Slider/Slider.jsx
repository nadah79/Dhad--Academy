
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function SliderAdmin() {
  const [updatedFile, setUpdatedFile] = useState(null);
  const [files, setFiles] = useState([]);

useEffect(() => {
  fetchFiles();
}, []);

const fetchFiles = async () => {
  try {
    const response = await axios.get('http://localhost:5000/slider');
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
    const response = await axios.post('http://localhost:5000/slider', formData);
    setFiles((prevFiles) => [...prevFiles, response.data]);
  } catch (error) {
    console.error(error);
  }
};

const handleDownload = async (fileId) => {
  try {
    const response = await axios.get(`http://localhost:5000/slider/${fileId}`, {
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
    const response = await axios.put(`http://localhost:5000/slider/${fileId}`, formData);
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
    await axios.delete(`http://localhost:5000/slider/${fileId}`);
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
  <div>

<Slider {...settings}>
    {files.map((file) => (
      <div key={file._id}>
        <img width={700} height={400} src={`http://localhost:5000/${file.name}`} alt={file.name} />
      </div>
    ))}
  </Slider>

    <h1>File Uploader</h1>
    <Dropzone onDrop={handleUpload}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} style={{ border: '1px solid black' }}>
          <input {...getInputProps()} />
          <p>Drag and drop a file here, or click to select a file</p>
        </div>
      )}
    </Dropzone>
    <h2>Files</h2>
    <ul>
      {files.map((file) => (
        <li key={file._id}>
          {file.name} ({file.mimetype})
          <img src={`http://localhost:5000/${file.name}`} width={200} />
          <button onClick={() => handleDownload(file._id)}>Download</button>
          <button onClick={() => handleDelete(file._id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default SliderAdmin;

