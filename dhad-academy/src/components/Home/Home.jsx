import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bg from "../../assets/images/home-bg.png"
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions/actions';
import moment from "moment"
import { Container } from 'react-bootstrap';
import OurServices from '../Services/OurServices';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import"./home.css"
import { apihttp } from "../../api/api"
import i18n from 'i18next';
import Slider from 'react-slick';


const Home = () => {
    const [t] = useTranslation();
    const dispatch = useDispatch()
    const selector2 = useSelector((state) => state.teacher);
    const [video, setVideo] = useState(null);

    useEffect(() => {
        // console.log("getEmpDetails");
        dispatch(actions.getALLcontact())
    }, [dispatch]);

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

      const [files, setFiles] = useState([]);
      const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // enable autoplay
        autoplaySpeed: 2000 // set autoplay speed to 4 seconds
      };
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

// console.log( moment(Date).fromNow());
const [blogs, setBlogs] = useState([]);
const [totalPages, setTotalPages] = useState(1);
const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        fetchBlogs();
      }, [currentPage]);
    
      const fetchBlogs = async () => {
        try {
          const response = await axios.get(`${apihttp}blog?page=${currentPage}`);
          setBlogs(response.data);
          console.log(response);
          setTotalPages(Math.ceil(response.headers['x-total-count'] / 3)); // assume limit of 3 blogs per page
        } catch (error) {
          console.error(error);
        }
      };

   
    return (
        <>
            <section className="position-relative text-center">
                {/* <Link to="/files/myfile.pdf" target="_blank" download>Download</Link> */}
                {/* <a href='http://localhost:5000/197 Section Intro.mp4' download>Click to download</a> */}
                <img src={bg} alt="" className='home-bg-img w-100' />
                <div className='position-absolute top-50 start-50 translate-middle text-center row w-75 m-auto d-flex justify-content-center align-items-center'>
                <img src={require("../../assets/images/big logo.png")} alt="" className='col-6 col-md-4 mb-3 mb-md-0'/>
                <div className='col-md-1 col-12'></div>
                <h3 className="text-light text-uppercase col-md-6 col-12">
                {t('HeroSection')} 
                </h3>
                </div>

            </section>


            <Container className='py-5'>
            <div className=' mx-2 row d-flex justify-content-center align-items-center'>
            <div className='col-6'>
                    <img src={require("../../assets/images/home.png")} className=' d-flex w-75 m-auto rounded-4' alt="" />
                </div>
                <div className='col-6 py-3'>
                    <h2 className=' fw-semibold w-50'>
                    {t('HeroSection2')}
                    </h2>
                </div>
                </div>
                </Container>
                <Slider {...settings}>
    {files.map((file) => (
      <div key={file._id}>
        <img width={"100%"} height={400} src={`${apihttp}${file.name}`} alt={file.name} />
      </div>
    ))}
  </Slider>

                <Container className='py-5'>
                <div className='services'>
                <OurServices/>
                </div>
            </Container>
            <div className='py-5'>
              <video width={"100%"} height={400} controls>
                {video && <source src={video} type="video/mp4" />}
              </video>
            </div>
            <Container className='pb-5'>
              {blogs.length>0?
            <div className='row d-flex justify-content-center justify-content-md-start pt-5 blogs  '>
            <h3 className='col-12 text-center  pb-5'>{t('RecentPosts')}</h3>
            {blogs.map((blog) => (

<div key={blog.id} className="col-10 col-sm-7 col-md-6 col-lg-4  pb-5">
<div className="card rounded-20 h-100">
        
        <img src={`${apihttp}${blog.image}`} className="rounded-img-top" height={"320"} alt="..." />
        <div className="card-body d-flex flex-column justify-content-between" style={{height:"150px"}}>
            <p className="card-title"><i className="fa-regular fa-clock pe-1"></i>{blog.updatedAt.split("T")[0]}</p>
            <h6 className="card-text">{blog.title} </h6>
            <NavLink to={`/blog/${blog.id}`} className='text-decoration-none d-flex align-items-center'>
            {t('ReadMore')}
            {
              i18n.language=="en"?<i className="fa-solid fa-arrow-right-long px-2 fs-6"></i>
              : <i className="fa-solid fa-arrow-left-long px-2 fs-6"></i>
            }
            </NavLink>
        </div>
    </div>

</div>
          ))}
          </div> :""}

            </Container>
            
            {/* {
                selector2.teachers ? selector2.teachers.map((data)=>(
                    <div key={data.id}>
                        <h2>{data.name}</h2>
                        <h6>{data.createdAt}</h6>
                        <h6>{moment(data.createdAt).fromNow()}</h6>
                    </div>
                )) :""
            }
            <img src={`${api.apihttp}startup-g3174bf914_1920.jpg`} width={"50%"} alt="" /> */}

        </>
    );
}

export default Home;
