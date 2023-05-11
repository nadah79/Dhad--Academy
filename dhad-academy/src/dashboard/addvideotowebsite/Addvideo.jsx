import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { apihttp } from "../../api/api"
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
function Addvideo() {
  const [t] = useTranslation();
  const [file, setFile] = useState(null);
  const [title, settitle] = useState('');

  const [description, setdescription] = useState('');
  const [url, seturl] = useState('');
  const [videoId, setVideoId] = useState(null);
  const [video, setVideo] = useState(null);


  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('video', file);
    formData.append('title', title);
    formData.append('description', description);

    const config = {
      onUploadProgress: progressEvent => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(percentCompleted);
      }
    };

    if (videoId) {
      // If we have a video ID, update the existing video
      await axios.put(`${apihttp}video/updateVideo/${videoId}`, formData, config)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // Otherwise, add a new video
      await axios.post(`${apihttp}video/addVideo`, formData, config)
        .then(response => {
          console.log(response.status);
          setVideoId(response.data._id);
          setProgress(null)
          window.location.reload(true)
        })
        .catch(error => {
      setError(error.response.data.message );
      
        });
    }
  }

  async function handleDelete() {
    await axios.delete(`${apihttp}video/deleteVideo`)
      .then(response => {
        console.log(response);
        setFile(null);
        settitle('');
        setdescription('');
        setVideoId(null);
        setVideo(null)
      setError(response.data.message);
      window.location.reload(true)
      })
      .catch(error => {
        setError(error.response.data.message );
      
      });
  }


  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const headers = { Range: 'bytes=0-' };
        const response = await axios.get(`${apihttp}video/getVideo`, { headers, responseType: 'blob' });
        const videoUrl = URL.createObjectURL(response.data);
        const videoId = response.headers['video-id'];
 
        setVideo(videoUrl);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideo();
  }, []);

  return (
    <>
          <h3>{t('Video')}</h3>
          <div className='py-2 row'>
      <div className='col-12 col-lg-6 m-auto'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className="form-group col-12 pb-2">
                <label htmlFor="title">{t('Title')} :</label>
                <input type="text" className="form-control" id="title"  name="title" value={title} onChange={(e) => settitle(e.target.value)} />
              </div>
              <div className="form-group col-12 pb-2">
                <label htmlFor="description">{t('Description')}</label>
                <textarea className="form-control" id="description" name="description" value={description} onChange={(e) => setdescription(e.target.value)} />
              </div>
              <div className="form-group col-12 pb-2">
                <label htmlFor="video">{t('Video')} :</label>
                <input type="file" className="form-control" id="video" required onChange={(e) => setFile(e.target.files[0])} />
              </div>
              <div className="form-group col-12 pb-2">
                <button type="submit" className="w-100 btn-submit btn px-5">{videoId ? t('Update') :t('Upload') }</button>
              </div>
              {progress > 0 && (
  <progress value={progress} max="100" />
)}
              {url && 
                  <video src={url} controls className="mt-3" />
               }
            </div>
          </form>
          </div>
      <div className='col-12 py-5 text-center'>
      {video ? <div>
        <video width={"100%"}  controls>
                 <source src={video} type="video/mp4" />
              </video>
              <button type="button" className="btn btn-accecpt my-3" onClick={()=>handleDelete()}>{t('DeleteVideo')}</button>
      </div>
              :
              <div className=''>
                <p>{t('NoVideoAdded')}</p>
              </div>}
              {error && <div className="alert alert-danger">{error}</div>}

              </div>
            
          </div>
    </>


  );
}

export default Addvideo;