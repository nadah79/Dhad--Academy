// // import React, { useState } from 'react';

// // const Test = () => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [image, setImage] = useState(null);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append('username', username);
// //     formData.append('email', email);
// //     formData.append('password', password);
// //     formData.append('image', image);
// //     // console.log(formData);
// //     // http://localhost:5000/userRegistration
// //     fetch('http://localhost:4000/register', {
// //       method: 'POST',
// //       body: formData
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log(data);
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label htmlFor="username">Username:</label>
// //       <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

// //       <label htmlFor="email">Email:</label>
// //       <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

// //       <label htmlFor="password">Password:</label>
// //       <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

// //       <label htmlFor="image">Profile Picture:</label>
// //       <input type="file" id="image" name="image" onChange={(e) => setImage(e.target.files[0])} />

// //       <button type="submit">Register</button>
// //     </form>
// //   );
// // };

// // export default Test;







// // import React, { useState } from 'react';
// // import './Card.css';

// // function Test({ title, image, description }) {
// //   const [isHovering, setIsHovering] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsHovering(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsHovering(false);
// //   };

// //   return (
// //     <div
// //       className={`card ${isHovering ? 'card-hover' : ''}`}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <img src={image} alt={title} />
// //       <div className='card-content'>
// //         <h3>{title}</h3>
// //         <p>{description}</p>
// //       </div>
// //     </div>
// //   );
// // }


// // import React, { useState } from 'react';
// // import './Card.css';
// // import { Card } from 'react-bootstrap';

// // function Test({ title, image, description }) {
// //   const [isHovering, setIsHovering] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsHovering(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsHovering(false);
// //   };

// //   return (
// //     <Card
// //       className={`animated-card ${isHovering ? 'animated-card-hover' : ''}`}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <Card.Img variant='top' src={image} alt={title} />
// //       <Card.Body>
// //         <Card.Title>{title}</Card.Title>
// //         <Card.Text>{description}</Card.Text>
// //       </Card.Body>
// //     </Card>
// //   );
// // }





// import React, { useState, useEffect } from 'react';
// import './Cursor.css';

// function Test() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     setPosition({ x: event.clientX, y: event.clientY });
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className='cursor' style={{ left: position.x, top: position.y }}>
//       <div className='cursor-animation'></div>
//     </div>
//   );
// }

// export default Test;

// import React from 'react';

// const Test = () => {
//   return (
//     <div>
//       test
//     </div>
//   );
// }

// export default Test;


// import React, { useState } from 'react';
// import { createRoot } from "react-dom/client";
// import { useSpring, animated } from 'react-spring';
// // import './styles.css';


// function Test() {
//   const [state, toggle] = useState(true)
//   const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
//   return (
//     <div onClick={() => toggle(!state)}>
//       <animated.div
//         style={{
//           opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
//           transform: x
//             .interpolate({
//               range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
//               output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
//             })
//             .interpolate(x => `scale(${x})`)
//         }}>
//     nada
//       </animated.div>
//     </div>
//   )
// }

// export default Test

// import React, { useState } from 'react';
// import axios from 'axios';

// function Test() {

//   const [file, setFile] = useState(null);
//   const [title, settitle] = useState('');
//   const [description, setdescription] = useState('');
//   const [url, seturl] = useState('');



//   const [progress, setProgress] = useState(0);
//   const [error, setError] = useState(null);



//   async function handleSubmit(event) {
//     event.preventDefault();
  
//     if (!file) {
//       setError('Please select a file to upload.');
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append('video', file);
//     formData.append('title', title);
//     formData.append('description', description);
  
//     const config = {
//       onUploadProgress: progressEvent => {
//         const percentCompleted = Math.round(
//           (progressEvent.loaded * 100) / progressEvent.total
//         );
//         setProgress(percentCompleted);
//       }
//     };
  
// await    axios.post('http://localhost:5000/video/addVideo', formData, config)
//       .then(response => {
//         console.log(response);
//     //  seturl(   URL.createObjectURL("http://localhost:5000/video_18.ts"))
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       {error && <div>{error}</div>}
//       <label>
//         Title:
//         <input type="text" name="title" value={title}   onChange={(e) => settitle(e.target.value)} />
//       </label>
//       <label>
//         Description:
//         <textarea name="description" value={description}   onChange={(e) => setdescription(e.target.value)}/>
//       </label>
//       <label>
//         Video file:
//         <input type="file"   onChange={(e) => setFile(e.target.files[0])} />
//       </label>
//       <button type="submit">Upload</button>
//       <progress value={progress} max="100" />
//       <iframe src="" frameborder="0"></iframe>
     


     

//     </form>
//     <div>
//       <h1>Video Player</h1>
//       <video width="560" height="315" controls>
//         <source src="http://localhost:5000/video/getVideo" />
//         Your browser does not support the video tag.
//       </video>
//     </div>

//     </>
//   );
// }

// export default Test;









// download video



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [videoUrl, setVideoUrl] = useState('');

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const headers = { Range: 'bytes=0-' };
//         const response = await axios.get('http://localhost:5000/video/getVideo', { headers, responseType: 'blob' });
//         const videoUrl = URL.createObjectURL(response.data);
//         console.log(response.data);
//         setVideoUrl(videoUrl);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchVideo();
//   }, []);

//   return (
//     <div>
//       <video width={500} controls>
//         {videoUrl && <source src={videoUrl} type="video/mp4" />}
//       </video>
//     </div>
//   );
// };

// export default Test;






// instructor test












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [users, setUsers] = useState([]);
//   const [usernam, setUsernam] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isAdmin, setIsAdmin] = useState('user');
//   const [image, setImage] = useState(null);
//   const [img, setImg] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadProgressu, setUploadProgressu] = useState(0);

//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/userRegistration');
//       setUsers(response.data.body);
      
//     } catch (error) {
//       console.log('Error getting users:', error);
//     }
//   };

//   const handleUsernamChange = (event) => {
//     setUsernam(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleIsAdminChange = (event) => {
//     setIsAdmin(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//     setImg(URL.createObjectURL( event.target.files[0]));


//   };

//   const handleCreateUser = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();

//     formData.append('name', usernam);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('isAdmin', isAdmin);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       await axios.post('http://localhost:5000/userRegistration', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         },     onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
//           setUploadProgress(progress);
//         }
//       });
//       getUsers();
//       setUsernam('');
//       setEmail('');
//       setPassword('');
//       setIsAdmin('user');
//       setImage('null');
//       setUploadProgress(0);
//       setImg(null)

//     } catch (error) {
//       console.log('Error creating user:', error);
//     }
//   };

//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//     setUsernam(user.usernam);
//     setEmail(user.email);
//     setPassword(user.password);
//     setIsAdmin(user.isAdmin);
//   };

//   const handleUpdateUser = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('usernam', usernam);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('isAdmin', isAdmin);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       await axios.put(`http://localhost:5000/userRegistration/${selectedUser._id}`, formData, {
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
//           setUploadProgressu(progress);
//         }
//       });
//       getUsers();
//       setSelectedUser(null);
//       setUsernam('');
//       setEmail('');
//       setPassword('');
//       setIsAdmin('user');
//       setImage(null);
//       setImage(null);
// setImg(null)
//     } catch (error) {
//       console.log('Error updating user:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/userRegistration/${id}`);
//       getUsers();
//     } catch (error) {
//       console.log('Error deleting user:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create User</h2>
//       <form onSubmit={handleCreateUser}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={usernam} onChange={handleUsernamChange} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <div>
//           <label>Role:</label>
//           <select value={isAdmin} onChange={handleIsAdminChange}>
//             <option value="user">User</option>
//             <option value="instructor">Instructor</option>
//             <option value="Admin">Admin</option>
//           </select>
//         </div>
//         <div>
//           <img src={img} width={200} />
//           <label>Image:</label>
//           <input type="file" onChange={handleImageChange} />
//         </div>
//         {uploadProgress > 0 && (
//   <progress value={uploadProgress} max="100" />
// )}
//         <button type="submit">Create</button>
//       </form>

//       <h2>Users</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users?users.map((user) => (
//             <tr key={user._id}>
//               <td>{user._id}</td>
//               <td>{user.usernam}</td>
//               <td>{user.email}</td>
//               <td>{user.isAdmin}</td>
//               <td><img src={`http://localhost:5000/${user.image}`} height="50px" /> </td>
//               <td>
//                 <button onClick={() => handleSelectUser(user)}>Edit</button>
//                 <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
//               </td>
//             </tr>
//           )):''}
//         </tbody>
//       </table>

//       {selectedUser && (
//         <div>
//           <h2>Edit User</h2>
//           <form onSubmit={handleUpdateUser}>
//             <div>
//               <label>Username:</label>
//               <input type="text" value={usernam} onChange={handleUsernamChange} />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input type="email" value={email} onChange={handleEmailChange} />
//             </div>
//             <div>
//               <label>Password:</label>
//               <input type="password" value={password} onChange={handlePasswordChange} />
//             </div>
//             <div>
//               <label>Role:</label>
//               <select value={isAdmin} onChange={handleIsAdminChange}>
//                 <option value="user">User</option>
//                 <option value="instructor">Instructor</option>
//                 <option value="Admin">Admin</option>
//               </select>
//             </div>
//             <div>
//               <label>Image:</label>
//               <input type="file" onChange={handleImageChange} />
//             </div>
//             {uploadProgressu > 0 && (
//   <progress value={uploadProgressu} max="100" />
// )}
//             <button type="submit">Update</button>
//             <button onClick={() => setSelectedUser(null)}>Cancel</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;






///////////////////////////addblogs//////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [details, setDetails] = useState('');
//   const [image, setImage] = useState(null);
//   const [updatingBlogId, setUpdatingBlogId] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     const { data } = await axios.get('http://localhost:5000/blog');
//     setBlogs(data.body);
//     console.log(data.body);
//   };

//   const handleFileChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleAddBlog = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('details', details);
//     formData.append('image', image);

//     try {
//       const { data } = await axios.post('http://localhost:5000/blog/addblog', formData, {
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round(
//             (progressEvent.loaded * 100) / progressEvent.total
//           );
//           setUploadProgress(progress);
//         },
//       });
//       fetchBlogs();
//       setTitle('');
//       setDescription('');
//       setDetails('');
//       setImage(null);
//       setUploadProgress(0);
//       setErrorMessage('');
      
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Error uploading file. Please try again.');
//     }
//   };

// //   const handleUpdateBlog = async (event) => {
// //     event.preventDefault();

// //     const formData = new FormData();
// //     formData.append('title', title);
// //     formData.append('description', description);
// //     formData.append('details', details);
// //     formData.append('image', image);

// //     try {
// //       const { data } = await axios.put(`/blogs/${updatingBlogId}`, formData, {
// //         onUploadProgress: (progressEvent) => {
// //           const progress = Math.round(
// //             (progressEvent.loaded * 100) / progressEvent.total
// //           );
// //           setUploadProgress(progress);
// //         },
// //       });
// //       fetchBlogs();
// //       setUpdatingBlogId(null);
// //       setTitle('');
// //       setDescription('');
// //       setDetails('');
// //       setImage(null);
// //       setUploadProgress(0);
// //     } catch (error) {
// //       console.error(error);
// //       setErrorMessage('Error updating file. Please try again.');
// //     }
// //   };

// //   const handleEditBlog = (blog) => {
// //     setTitle(blog.title);
// //     setDescription(blog.description);
// //     setDetails(blog.details);
// //     setImage(blog.image);
// //     setUpdatingBlogId(blog._id);
// //   };

//   const handleDeleteBlog = async (blog) => {
//     try {
//       await axios.delete(`http://localhost:5000/blog/${blog._id}`);
//       fetchBlogs();
//       setErrorMessage('');

//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Error deleting file. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Blogs</h1>

//       {/* <form onSubmit={updatingBlogId ? handleUpdateBlog : handleAddBlog}> */}
//       <form onSubmit={ handleAddBlog}>

//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             className="form-control"
//             id="title"
//             value={title}
//             onChange={(event) => setTitle(event.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             className="form-control"
//             id="description"
//             value={description}
//             onChange={(event) => setDescription(event.target.value)}
//             required
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="details">Details</label>
//           <textarea
//             className="form-control"
//             id="details"
//             value={details}
//             onChange={(event) => setDetails(event.target.value)}
//             required
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="image">Image</label>
//           <input
//             type="file"
//             className="form-control-file"
//             id="image"
//             onChange={handleFileChange}
//           />
//           {uploadProgress > 0 && (
//             <div className="progress mt-2">
//               <div
//                 className="progress-bar"
//                 role="progressbar"
//                 style={{ width: `${uploadProgress}%` }}
//                 aria-valuenow={uploadProgress}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               >
//                 {uploadProgress}%
//               </div>
//             </div>
//           )}
//         </div>

//         <button type="submit" className="btn btn-primary">
//           {updatingBlogId ? 'Update Blog' : 'Add Blog'}
//         </button>
//       </form>

//       {errorMessage && (
//         <div className="alert alert-danger mt-3">{errorMessage}</div>
//       )}

//       <hr />

//       {blogs.map((blog) => (
//         <div className="card mb-3" key={blog._id}>
//           <div className="card-body">
//             <h5 className="card-title">{blog.title}</h5>
//             <p className="card-text">{blog.description}</p>
//             <p className="card-text">{blog.details}</p>
//             <img
//               src={`http://localhost:5000/${blog.image}`}
//               alt={blog.title}
//               className="img-fluid mb-3"
//               style={{ maxHeight: '300px' }}
//             />
//             {/* <button
//               className="btn btn-primary mr-2"
//               onClick={() => handleEditBlog(blog)}
//             >
//               Edit
//             </button> */}
//             <button
//               className="btn btn-danger"
//               onClick={() => handleDeleteBlog(blog)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Test;




















// addddddd blog and update and delete  and get in table

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [details, setDetails] = useState('');
//   const [image, setImage] = useState(null);
//   const [updatingBlogId, setUpdatingBlogId] = useState(null);

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     const { data } = await axios.get('http://localhost:5000/blog');
//     setBlogs(data.body);
//   };

//   const handleFileChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleAddBlog = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('details', details);
//     formData.append('image', image);

//     try {
//       await axios.post('http://localhost:5000/blog/addblog', formData);
//       fetchBlogs();
//       setTitle('');
//       setDescription('');
//       setDetails('');
//       setImage(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdateBlog = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('details', details);
//     formData.append('image', image);

//     try {
//       await axios.put(`/blogs/${updatingBlogId}`, formData);
//       fetchBlogs();
//       setUpdatingBlogId(null);
//       setTitle('');
//       setDescription('');
//       setDetails('');
//       setImage(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleEditBlog = (blog) => {
//     setTitle(blog.title);
//     setDescription(blog.description);
//     setDetails(blog.details);
//     setImage(blog.image);
//     setUpdatingBlogId(blog._id);
//   };

//   const handleDeleteBlog = async (blog) => {
//     try {
//       await axios.delete(`http://localhost:5000/blog/${blog._id}`);
//       fetchBlogs();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Blogs</h1>

//       <form onSubmit={updatingBlogId ? handleUpdateBlog : handleAddBlog}>
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input type="text" className="form-control" id="title" value={title} onChange={(event) => setTitle(event.target.value)} required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea className="form-control" id="description" value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="details">Details</label>
//           <textarea className="form-control" id="details" value={details} onChange={(event) => setDetails(event.target.value)} required></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="image">Image</label>
//           <input type="file" className="form-control-file" id="image" onChange={handleFileChange} />
//         </div>

//         <button type="submit" className="btn btn-primary">{updatingBlogId ? 'Update' : 'Add'} Blog</button>
//       </form>

//       <table className="table mt-4">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Details</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.map((blog) => (
//             <tr key={blog._id}>
//               <td>{blog.title}</td>
//               <td>{blog.description}</td>
//               <td>{blog.details}</td>
//               <td>{blog.image ? <img src={`http://localhost:5000/${blog.image}`} alt={blog.title} className="img-thumbnail" /> : ''}</td>
//               <td>
//                 <button className="btn btn-primary mr-1" onClick={() => handleEditBlog(blog)}>Edit</button>
//                 <button className="btn btn-danger" onClick={() => handleDeleteBlog(blog)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Test;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Form, Button, ListGroup, Image } from 'react-bootstrap';

// const Test = () => {
//   const [name, setName] = useState('');
//   const [category, setCategory] = useState('');
//   const [lessons, setLessons] = useState('');
//   const [pdfFile, setPdfFile] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/courses');
//         setCourses(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleLessonsChange = (event) => {
//     setLessons(event.target.value);
//   };

//   const handlePdfFileChange = (event) => {
//     setPdfFile(event.target.files[0]);
//   };

//   const handleImageFileChange = (event) => {
//     setImageFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('category', category);
//     formData.append('lessons', lessons);
//     formData.append('pdfFile', pdfFile);
//     formData.append('imageFile', imageFile);
//     try {
//       const response = await axios.post('/api/courses', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log(response.data);
//       setCourses([...courses, response.data]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`/api/courses/${id}`);
//       console.log(response.data);
//       setCourses(courses.filter((course) => course._id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleUpdate = async (course) => {
//     const formData = new FormData();
//     formData.append('name', course.name);
//     formData.append('category', course.category);
//     formData.append('lessons', course.lessons);
//     if (pdfFile != null) {
//       formData.append('pdfFile', pdfFile);
//     }
//     if (imageFile != null) {
//       formData.append('imageFile', imageFile);
//     }
//     try {
//       const response = await axios.put(`/api/courses/${course._id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log(response.data);
//       setCourses(
//         courses.map((c) => (c._id === course._id ? response.data : c))
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h1>Course Management</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter course name"
//                 value={name}
//                 onChange={handleNameChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="category">
//               <Form.Label>Category</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter course category"
//                 value={category}
//                 onChange={handleCategoryChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="lessons">
//               <Form.Label>Lessons</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter number of lessons"
//                 value={lessons}
//                 onChange={handleLessonsChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="pdfFile">
//               <Form.Label>PDF File</Form.Label>
//               <Form.Control type="file" onChange={handlePdfFileChange} />
//             </Form.Group>
//             <Form.Group controlId="imageFile">
//               <Form.Label>Image File</Form.Label>
//               <Form.Control type="file" onChange={handleImageFileChange} />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Add Course
//             </Button>
//           </Form>
//           <br />
//           <h2>Courses</h2>
//           <ListGroup>
//             {courses.map((course) => (
//               <ListGroup.Item key={course._id}>
//                 <Row>
//                   <Col xs={2}>
//                     <Image src={course.imageUrl} thumbnail />
//                   </Col>
//                   <Col xs={8}>
//                     <h3>{course.name}</h3>
//                     <p>
//                       Category: {course.category} | Lessons: {course.lessons}
//                     </p>
//                   </Col>
//                   <Col xs={2}>
//                     <Button
//                       variant="danger"
//                       onClick={() => handleDelete(course._id)}
//                     >
//                       Delete
//                     </Button>{' '}
//                     <Button
//                       variant="warning"
//                       onClick={() => handleUpdate(course)}
//                     >
//                       Edit
//                     </Button>
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Test;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// const Test = () => {
//   const [courses, setCourses] = useState([]);
//   const [courseName, setCourseName] = useState('');
//   const [courseId, setCourseId] = useState('');
//   const [lessonName, setLessonName] = useState('');
//   const [pdfLink, setPdfLink] = useState('');
//   const [videoLink, setVideoLink] = useState('');
//   const [meetingLink, setMeetingLink] = useState('');

//   useEffect(() => {
//     getCourses();
//   }, []);

//   const getCourses = async () => {
//     try {
//       const response = await axios.get('/api/courses');
//       setCourses(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCourseSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/courses', {
//         name: courseName,
//       });
//       setCourses([...courses, response.data]);
//       setCourseName('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleLessonSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`/api/courses/${courseId}/lessons`, {
//         name: lessonName,
//         pdf: pdfLink,
//         video: videoLink,
//         meeting: meetingLink,
//       });
//       const updatedCourses = [...courses];
//       const courseIndex = updatedCourses.findIndex((course) => course._id === courseId);
//       updatedCourses[courseIndex] = response.data;
//       setCourses(updatedCourses);
//       setLessonName('');
//       setPdfLink('');
//       setVideoLink('');
//       setMeetingLink('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteLesson = async (courseId, lessonId) => {
//     try {
//       const response = await axios.delete(`/api/courses/${courseId}/lessons/${lessonId}`);
//       const updatedCourses = [...courses];
//       const courseIndex = updatedCourses.findIndex((course) => course._id === courseId);
//       updatedCourses[courseIndex] = response.data;
//       setCourses(updatedCourses);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdateLesson = async (e, courseId, lessonId) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`/api/courses/${courseId}/lessons/${lessonId}`, {
//         name: lessonName,
//         pdf: pdfLink,
//         video: videoLink,
//         meeting: meetingLink,
//       });
//       const updatedCourses = [...courses];
//       const courseIndex = updatedCourses.findIndex((course) => course._id === courseId);
//       updatedCourses[courseIndex] = response.data;
//       setCourses(updatedCourses);
//       setLessonName('');
//       setPdfLink('');
//       setVideoLink('');
//       setMeetingLink('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h1>Courses</h1>
//           <ul>
//             {courses.map((course) => (
//               <li key={course._id}>
//                 {course.name}
//                 <ul>
//                   {course.lessons.map((lesson) => (
//                     <li key={lesson._id}>
//                       {lesson.name}
//                       <Button
//                         variant="danger"
//                         size="sm"
//                         onClick={() => handleDeleteLesson(course._id, lesson._id)}
//                       >
//                         Delete
//                       </Button>
//                       <Form onSubmit={(e) => handleUpdateLesson(e, course._id, lesson._id)}>
//                         <Form.Group>
//                           <Form.Control
//                             type="text"
//                             placeholder="Lesson name"
//                             value={lessonName}
//                             onChange={(e) => setLessonName(e.target.value)}
//                           />
//                         </Form.Group>
//                         <Form.Group>
//                           <Form.Control
//                             type="text"
//                             placeholder="PDF link"
//                             value={pdfLink}
//                             onChange={(e) => setPdfLink(e.target.value)}
//                           />
//                         </Form.Group>
//                         <Form.Group>
//                           <Form.Control
//                             type="text"
//                             placeholder="Video link"
//                             value={videoLink}
//                             onChange={(e) => setVideoLink(e.target.value)}
//                           />
//                         </Form.Group>
//                         <Form.Group>
//                           <Form.Control
//                             type="text"
//                             placeholder="Meeting link"
//                             value={meetingLink}
//                             onChange={(e) => setMeetingLink(e.target.value)}
//                           />
//                         </Form.Group>
//                         <Button variant="primary" type="submit">
//                           Update
//                         </Button>
//                       </Form>
//                     </li>
//                   ))}
//                   <Form onSubmit={handleLessonSubmit}>
//                     <Form.Group>
//                       <Form.Control
//                         type="text"
//                         placeholder="Lesson name"
//                         value={lessonName}
//                         onChange={(e) => setLessonName(e.target.value)}
//                       />
//                     </Form.Group>
//                     <Form.Group>
//                       <Form.Control
//                         type="text"
//                         placeholder="PDF link"
//                         value={pdfLink}
//                         onChange={(e) => setPdfLink(e.target.value)}
//                       />
//                     </Form.Group>
//                     <Form.Group>
//                       <Form.Control
//                         type="text"
//                         placeholder="Video link"
//                         value={videoLink}
//                         onChange={(e) => setVideoLink(e.target.value)}
//                       />
//                     </Form.Group>
//                     <Form.Group>
//                       <Form.Control
//                         type="text"
//                         placeholder="Meeting link"
//                         value={meetingLink}
//                         onChange={(e) => setMeetingLink(e.target.value)}
//                       />
//                     </Form.Group>
//                     <Button variant="primary" type="submit">
//                       Add Lesson
//                     </Button>
//                   </Form>
//                 </ul>
//               </li>
//             ))}
//           </ul>
//           <Form onSubmit={handleCourseSubmit}>
//             <Form.Group>
//               <Form.Control
//                 type="text"
//                 placeholder="Course name"
//                 value={courseName}
//                 onChange={(e) => setCourseName(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Add Course
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Test;













// couuuuuuuuuuurse and lesssons         



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, Form, Button, Modal } from 'react-bootstrap';

// const COURSES_API_URL = '/api/courses';

// const Test = () => {
//   const [courses, setCourses] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     lessons: [],
//     image: '',
//     courseName: '',
//     coursesDepartment: '',
//     price: '',
//     hours: '',
//   });
//   const [formErrors, setFormErrors] = useState({});

//   const handleCloseModal = () => setShowModal(false);
//   const handleShowModal = () => setShowModal(true);

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get(COURSES_API_URL);
//       setCourses(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       image: file,
//     }));
//   };

//   const handleLessonInputChange = (event, index) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => {
//       const updatedLessons = prevFormData.lessons.map((lesson, i) => {
//         if (i === index) {
//           return {
//             ...lesson,
//             [name]: value,
//           };
//         }
//         return lesson;
//       });
//       return {
//         ...prevFormData,
//         lessons: updatedLessons,
//       };
//     });
//   };

//   const handleAddLesson = () => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       lessons: [...prevFormData.lessons, { name: '', pdf: '', video: '', meeting: '' }],
//     }));
//   };

//   const handleRemoveLesson = (index) => {
//     setFormData((prevFormData) => {
//       const updatedLessons = prevFormData.lessons.filter((lesson, i) => i !== index);
//       return {
//         ...prevFormData,
//         lessons: updatedLessons,
//       };
//     });
//   };

//   const handleValidateForm = () => {
//     const errors = {};
//     if (!formData.title.trim()) {
//       errors.title = 'Title is required';
//     }
//     if (!formData.courseName.trim()) {
//       errors.courseName = 'Course name is required';
//     }
//     if (!formData.coursesDepartment.trim()) {
//       errors.coursesDepartment = 'Department is required';
//     }
//     if (!formData.price.trim()) {
//       errors.price = 'Price is required';
//     }
//     if (!formData.hours.trim()) {
//       errors.hours = 'Hours is required';
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleCreate = async () => {
//     if (handleValidateForm()) {
//       const formDataToSubmit = new FormData();
//       formDataToSubmit.append('title', formData.title);
//       formDataToSubmit.append('image', formData.image);
//       formDataToSubmit.append('courseName', formData.courseName);
//       formDataToSubmit.append('coursesDepartment', formData.coursesDepartment);
//       formDataToSubmit.append('price', formData.price);
//       formDataToSubmit.append('hours', formData.hours);
//       formData.lessons.forEach((lesson, index) => {
//         formDataToSubmit.append(`lessons[${index}][name]`, lesson.name);
//         formDataToSubmit.append(`lessons[${index}][pdf]`, lesson.pdf);
//         formDataToSubmit.append(`lessons[${index}][video]`, lesson.video);
//         formDataToSubmit.append(`lessons[${index}][meeting]`, lesson.meeting);
//       });
//       try {
//         await axios.post(COURSES_API_URL, formDataToSubmit, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         handleCloseModal();
//         fetchCourses();
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const handleEdit = async (id) => {
//     if (handleValidateForm()) {
//       const formDataToSubmit = new FormData();
//       formDataToSubmit.append('title', formData.title);
//       formDataToSubmit.append('image', formData.image);
//       formDataToSubmit.append('courseName', formData.courseName);
//       formDataToSubmit.append('coursesDepartment', formData.coursesDepartment);
//       formDataToSubmit.append('price', formData.price);
//       formDataToSubmit.append('hours', formData.hours);
//       formData.lessons.forEach((lesson, index) => {
//         formDataToSubmit.append(`lessons[${index}][name]`, lesson.name);
//         formDataToSubmit.append(`lessons[${index}][pdf]`, lesson.pdf);
//         formDataToSubmit.append(`lessons[${index}][video]`, lesson.video);
//         formDataToSubmit.append(`lessons[${index}][meeting]`, lesson.meeting);
//       });
//       try {
//         await axios.put(`${COURSES_API_URL}/${id}`, formDataToSubmit, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         handleCloseModal();
//         fetchCourses();
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${COURSES_API_URL}/${id}`);
//       fetchCourses();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleShowCreateModal = () => {
//     setFormData({
//       title: '',
//       lessons: [{ name: '', pdf: '', video: '', meeting: '' }],
//       image: '',
//       courseName: '',
//       coursesDepartment: '',
//       price: '',
//       hours: '',
//     });
//     handleShowModal();
//   };

//   const handleShowEditModal = (course) => {
//     setFormData({
//       title: course.title,
//       lessons: course.lessons,
//       image: '',
//       courseName: course.courseName,
//       coursesDepartment: course.coursesDepartment,
//       price: course.price,
//       hours: course.hours,
//     });
//     handleShowModal();
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   return (
//     <>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Course Name</th>
//             <th>Department</th>
//             <th>Price</th>
//             <th>Hours</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => (
//             <tr key={course._id}>
//               <td>{course.title}</td>
//               <td>{course.courseName}</td>
//               <td>{course.coursesDepartment}</td>
//               <td>{course.price}</td>
//               <td>{course.hours}</td>
//               <td>
//                 <Button variant="primary" onClick={() => handleShowEditModal(course)}>
//                   Edit
//                 </Button>{' '}
//                 <Button variant="danger" onClick={() => handleDelete(course._id)}>
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <Table>

//       <Button variant="primary" onClick={handleShowCreateModal}>
//         Add Course
//       </Button>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>{formData._id ? 'Edit Course' : 'Add Course'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formTitle">
//               <Form.Label>Title</Form.Label>
//               <Form.Control type="text" name="title" value={formData.title} onChange={handleInputChange} />
//               {formErrors.title && <Form.Text className="text-danger">{formErrors.title}</Form.Text>}
//             </Form.Group>
//             <Form.Group controlId="formCourseName">
//               <Form.Label>Course Name</Form.Label>
//               <Form.Control type="text" name="courseName" value={formData.courseName} onChange={handleInputChange} />
//               {formErrors.courseName && <Form.Text className="text-danger">{formErrors.courseName}</Form.Text>}
//             </Form.Group>
//             <Form.Group controlId="formCoursesDepartment">
//               <Form.Label>Department</Form.Label>
//               <Form.Control type="text" name="coursesDepartment" value={formData.coursesDepartment} onChange={handleInputChange} />
//               {formErrors.coursesDepartment && <Form.Text className="text-danger">{formErrors.coursesDepartment}</Form.Text>}
//             </Form.Group>
//             <Form.Group controlId="formPrice">
//               <Form.Label>Price</Form.Label>
//               <Form.Control type="number" name="price" value={formData.price} onChange={handleInputChange} />
//               {formErrors.price && <Form.Text className="text-danger">{formErrors.price}</Form.Text>}
//             </Form.Group>
//             <Form.Group controlId="formHours">
//               <Form.Label>Hours</Form.Label>
//               <Form.Control type="number" name="hours" value={formData.hours} onChange={handleInputChange} />
//               {formErrors.hours && <Form.Text className="text-danger">{formErrors.hours}</Form.Text>}
//             </Form.Group>
//             <Form.Group controlId="formImage">
//               <Form.Label>Image</Form.Label>
//               <Form.Control type="file" name="image" onChange={handleFileInputChange}/>
//             </Form.Group>
//           </Form>
//           </Modal.Body>

//         </Modal>
//         </Table>

// </>)};

// export default Test;


























// this is compelete file course
















// addcourse and update and delete////////////////////////////////////

























// import React, { useState, useEffect } from 'react';
// import YouTube from 'react-youtube'
// import axios from 'axios';
// import { Container, Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
// const Test = () => {
//   const [courses, setCourses] = useState([]);
//   const [ addcourse, setaddcourse] = useState(false);
//   const [ idcourse, setidcourse] = useState("");


//   const [formValues, setFormValues] = useState({
//     title: '',
//     lessons: [],
//     image: null,
//     courseName: '',
//     coursesDepartment: '',
//     price: '',
//     hours: '',
//   });
//   const [lessonFormValues, setLessonFormValues] = useState({
//     name: '',
//     pdf: null,
//     video: '',
//     meeting: '',
//   });
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedLesson, setSelectedLesson] = useState(null);

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/course/getCourse');
//       console.log(response.data);
//       setCourses(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleFormChange = (event) => {
//     setFormValues({
//       ...formValues,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleLessonFormChange = (event) => {
//     setLessonFormValues({
//       ...lessonFormValues,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleFileChange = (event) => {
//     setFormValues({
//       ...formValues,
//       [event.target.name]: event.target.files[0],
//     });
//   };

//   const handleLessonFileChange = (event) => {
//     setLessonFormValues({
//       ...lessonFormValues,
//       [event.target.name]: event.target.files[0],
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('title', formValues.title);
//     formData.append('courseName', formValues.courseName);
//     formData.append('coursesDepartment', formValues.coursesDepartment);
//     formData.append('price', formValues.price);
//     formData.append('hours', formValues.hours);
//     if (formValues.image) {
//       formData.append('image', formValues.image);
//     }

//     try {
//       if (selectedCourse) {
//         console.log(selectedCourse);
//         const response = await axios.put(`http://localhost:5000/course/updateCourse/${selectedCourse._id}`, formData);
//         console.log(response);
//         console.log(response.data);
//         setCourses((prevCourses) => {
//           const index = prevCourses.findIndex((course) => course._id === response.data.body.updateCourse._id);
//           const updatedCourses = [...prevCourses];
//           updatedCourses[index] = response.data.body.updateCourse;
//           return updatedCourses;
//         });
//         setSelectedCourse(null);
//       } else {
//         // Create new course
//         const response = await axios.post('http://localhost:5000/course/addCourse', formData);
//         console.log(response.data);
       

//         setCourses((prevCourses) => [...prevCourses, response.data]);
//       }
//       setFormValues({
//         title: '',
//         lessons: [],
//         image: null,
//         courseName: '',
//         coursesDepartment: '',
//         price: '',
//         hours: '',
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleLessonFormSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('name', lessonFormValues.name);
//     formData.append('video', lessonFormValues.video);
//     formData.append('meeting', lessonFormValues.meeting);
//     if (lessonFormValues.pdf) {
//       formData.append('image', lessonFormValues.pdf);
//     }

//     try {
//       const response = await axios.post(`http://localhost:5000/course/${idcourse}/lessons`, formData);
//       setCourses((prevCourses) => {
//         const index = prevCourses.findIndex((course) => course._id === idcourse);
    
//         const updatedCourses = [...prevCourses];
//         updatedCourses[index] = response.data.body;
      
//         return updatedCourses;
//       });
//       setSelectedLesson(null);
//       setLessonFormValues({
//         name: '',
//         pdf: null,
//         video: '',
//         meeting: '',
        
//       });
//       setaddcourse(false)
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCourseEdit = (course) => {
//     setSelectedCourse(course);
//     setFormValues({
//       title: course.title,
//       lessons: course.lessons,
//       courseName: course.courseName,
//       coursesDepartment: course.coursesDepartment,
//       price: course.price,
//       hours: course.hours,
//     });
//   };

//   const handleCourseDelete = async (course) => {
//     console.log(course);
//     try {
//       await axios.delete(`http://localhost:5000/course/deleteCourse/${course._id}`);
//       setCourses((prevCourses) => prevCourses.filter((c) => c._id !== course._id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // const handleLessonEdit = (lesson) => {
//   //   setSelectedLesson(lesson);
//   //   setLessonFormValues({
//   //     name: lesson.name,
//   //     pdf: null,
//   //     video: lesson.video,
//   //     meeting: lesson.meeting,
//   //   });
//   // };

//   const handleLessonDelete = async (lesson) => {
//     console.log(lesson.course_id);
//     try {
//       await axios.delete(`http://localhost:5000/course/${lesson.course_id}/lessons/${lesson._id}`);
//       setCourses((prevCourses) => {
//         const index = prevCourses.findIndex((course) => course._id === lesson.course_id);
//         const updatedCourses = [...prevCourses];
//         updatedCourses[index].lessons = updatedCourses[index].lessons.filter((l) => l._id !== lesson._id);
//         return updatedCourses;
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleLessonSubmit = (event) => {
//     event.preventDefault();
//     const newLesson = {
//       name: lessonFormValues.name,
//       courseId: selectedCourse._id,
//     };
//     axios
//       .post('/api/lessons', newLesson)
//       .then((response) => {
//         const updatedCourse = { ...selectedCourse };
//         updatedCourse.lessons.push(response.data);
//         setSelectedCourse(updatedCourse);
//         setLessonFormValues({ name: '' });
//       })
//       .catch((error) => {
//         console.error('Error creating lesson: ', error);
//       });
//   };
//   const resetForm = () => {
//     if (selectedCourse) {
//       setFormValues({
//         title: selectedCourse.title,
//         courseName: selectedCourse.courseName,
//         coursesDepartment: selectedCourse.coursesDepartment,
//         price: selectedCourse.price,
//       });
//     } else {
//       setFormValues({
//         title: '',
//         courseName: '',
//         coursesDepartment: '',
//         price: '',
//       });
//     }
//   };

// const handleaddlessons = (course) => {
//   // console.log(c);
//   setaddcourse(true)
//   setidcourse(course._id)
// }
//   return (




//     <Container>
//       <Row>
//         <Col>
//           <h1 className="my-4">Course Manager</h1>
//           <h2>Courses</h2>
//           <ListGroup>
//             {courses &&
//               courses.map((course) => (
//                 <ListGroup.Item key={course._id}>
//                   <div className="d-flex justify-content-between">
//                     <div>
//                       <p>title : {course.title}</p>
                    
//                       <p>lessons : {course.lessons ? course.lessons.length : 0}</p>

//                       <p>courseName : {course.courseName}</p>
//                       <p>coursesDepartment : {course.coursesDepartment}</p>
//                       <p>price : {course.price}</p>
//                       <p>hours : {course.hours}</p>

// <img src={`http://localhost:5000/${course.image}`} width={200} />
//                     </div>
//                     <div>
//                       <Button variant="info" onClick={() => handleCourseEdit(course)}>
//                         Edit
//                       </Button>{' '}
//                       <Button variant="danger" onClick={() => handleCourseDelete(course)}>
//                         Delete
//                       </Button>
//                       <Button variant="info" onClick={() => handleaddlessons(course)}>
//                         add lesson
//                       </Button>
//                     </div>
//                   </div>
//                   <ul>
//                     {course.lessons &&
//                       course.lessons.map((lesson) => (
//                         <li key={lesson._id}>
//                           <div className="d-flex justify-content-between">
//                             <div>{lesson.name}</div>
//                             <a href={`http://localhost:5000/${lesson.pdf}`}>pdf</a>
//                             <a href={lesson.video}>video</a>
//                             <a href={lesson.video}>meeting</a>


//                             <div>{lesson.name}</div>

//                             <div>
//                              {/* <Button variant="info" onClick={() => handleLessonEdit(lesson)}>
//                                 Edit
//                               </Button>{' '} */}
//                               <Button variant="danger" onClick={() => handleLessonDelete(lesson)}>
//                                 Delete
//                               </Button>
//                             </div>
//                           </div>
//                         </li>
//                       ))}
//                   </ul>
//                 </ListGroup.Item>
//               ))}
//           </ListGroup>
//         </Col>
//         <Col>
//           <h2>{selectedCourse ? `Edit Course: ${selectedCourse.title}` : 'Create Course'}</h2>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Group controlId="formTitle">
//               <Form.Label>Title:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="title"
//                 value={formValues.title}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCourseName">
//               <Form.Label>Course Name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="courseName"
//                 value={formValues.courseName}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>

// <Form.Group controlId="formCoursesDepartment">
//   <Form.Label>Course Department:</Form.Label>
//   <Form.Control
//     as="select"
//     name="coursesDepartment"
//     value={formValues.coursesDepartment}
//     onChange={handleFormChange}
//   >
//     <option value="">-- Select Department --</option>
//     <option value="Arabic">Arabic</option>
//     <option value="Quran and Readings">Quran and Readings</option>
//     <option value="Islamic Studies">Islamic Studies</option>
//     <option value="Qualifying Courses">Qualifying Courses</option>
//     <option value="Crafts and Skills">Crafts and Skills</option>
//     <option value="Field Tourism">Field Tourism</option>
//   </Form.Control>
// </Form.Group>
// <Form.Group controlId="formDescription">
// <Form.Label>price:</Form.Label>
// <Form.Control
// as="textarea"
// name="price"
// value={formValues.price}
// onChange={handleFormChange}
// />
// <Form.Label>hourse:</Form.Label>
// <Form.Control
// as="textarea"
// name="hours"
// value={formValues.hours}
// onChange={handleFormChange}
// />
// </Form.Group>
// <Form.Group controlId="formImage">
// <Form.Label>Image:</Form.Label>
// <Form.Control type="file" name="image" onChange={handleFileChange} />
// </Form.Group>
// <Button variant="primary" type="submit">
// {selectedCourse ? 'Update Course' : 'Create Course'}
// </Button>
// </Form>
// {addcourse && (
// <>
// <hr />
// <h2>{ 'Create Lesson'}</h2>
// <Form onSubmit={handleLessonFormSubmit}>
// <Form.Group controlId="formLessonName">
// <Form.Label>Name:</Form.Label>
// <Form.Control
// type="text"
// name="name"
// value={lessonFormValues.name}
// onChange={handleLessonFormChange}
// />
// </Form.Group>
// <Form.Group controlId="formLessonDescription">
// <Form.Label>meeting:</Form.Label>
// <Form.Control
// as="textarea"
// name="meeting"
// value={lessonFormValues.meeting}
// onChange={handleLessonFormChange}
// />
// </Form.Group>
// <Form.Group controlId="formLessonPdf">
// <Form.Label>pdf:</Form.Label>
// <Form.Control type="file" name="pdf" onChange={handleLessonFileChange} />
// </Form.Group>

// <Form.Group controlId="formLessonVideo">
// <Form.Label>videoLink:</Form.Label>
// <Form.Control type="text" name="video" onChange={handleLessonFormChange} />
// </Form.Group>
// <Button variant="primary" type="submit">
// Create Lesson
// </Button>
// </Form>
// <Button variant="danger"  onClick={()=>setaddcourse(false)}>
// Cancel
// </Button>
// </>
// )}
// </Col>
// </Row>

 
// </Container>
// );

// };

// export default Test;






























//   return (
//     <div>
//       <h1>Course Manager</h1>
//       <h2>Courses</h2>
// <ul>
//   {courses && courses.map((course) => (
//     <li key={course._id}>
//       {course.title} ({course.courseName})
//       {course.title} ({course.coursesDepartment})

//       <button onClick={() => handleCourseEdit(course)}>Edit</button>
//       <button onClick={() => handleCourseDelete(course)}>Delete</button>
//       <ul>
//         {course.lessons.map((lesson) => (
//           <li key={lesson._id}>
//             {lesson.name}
//             <button onClick={() => handleLessonEdit(lesson)}>Edit</button>
//             <button onClick={() => handleLessonDelete(lesson)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </li>
//   ))}
// </ul>
//       <h2>{selectedCourse ? `Edit Course: ${selectedCourse.title}` : 'Create Course'}</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Title:
//           <input type="text" name="title" value={formValues.title} onChange={handleFormChange} />
//         </label>
//         <label>
//           Course Name:
//           <input
//             type="text"
//             name="courseName"
//             value={formValues.courseName}
//             onChange={handleFormChange}
//           />
//         </label>
//         <label>
//           Course Department:
//           <input
//             type="text"
//             name="coursesDepartment"
//             value={formValues.coursesDepartment}
//             onChange={handleFormChange}
//           />
//         </label>
//         <label>
//           Price:
//           <input type="text" name="price" value={formValues.price} onChange={handleFormChange} />
//         </label>
//         <label>
//           Hours:
//           <input type="text" name="hours" value={formValues.hours} onChange={handleFormChange} />
//         </label>
//         <label>
//           Image:
//           <input type="file" name="image" onChange={handleFileChange} />
//         </label>
//         <button type="submit">{selectedCourse ? 'Update' : 'Create'}</button>
//       </form>
//       {selectedCourse && (
//         <div>
//           <h2>{`Lessons for ${selectedCourse.title}`}</h2>
//           <ul>
//             {selectedCourse.lessons.map((lesson) => (
//               <li key={lesson._id}>
//                 {lesson.name}
//                 <button onClick={() => handleLessonEdit(lesson)}>Edit</button>
//                 <button onClick={() => handleLessonDelete(lesson)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//           <h2>{selectedLesson ? `Edit Lesson: ${selectedLesson.name}` : 'Create Lesson'}</h2>
//           <form onSubmit={handleLessonFormSubmit}>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={lessonFormValues.name}
//                 onChange={handleLessonFormChange}
//               />
//             </label>
//             <label>
//               Video URL:
//               <input
//                 type="text"
//                 name="video"
//                 value={lessonFormValues.video}
//                 onChange={handleLessonFormChange}
//               />
//             </label>
//             <label>
//               Meeting URL:
//               <input
//                 type="text"
//                 name="meeting"
//                 value={lessonFormValues.meeting}
//                 onChange={handleLessonFormChange}
//               />
//             </label>
//             <label>
//               PDF:
//               <input type="file" name="pdf" onChange={handleLessonFileChange} />
//             </label>
//             <button type="submit">{selectedLesson ? 'Update' : 'Create'}</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [startByte, setStartByte] = useState(0);
//   const [endByte, setEndByte] = useState(1000000);
//   const [videoUrl, setVideoUrl] = useState('');

//   const handleNextPage = () => {
//     setStartByte(endByte + 1);
//     setEndByte(endByte + 1000000);
//   };

//   const fetchVideo = async () => {
//     try {
//       const headers = { Range: `bytes=${startByte}-${endByte}` };
//       const response = await axios.get('http://localhost:5000/video/getVideo', { headers, responseType: 'blob' });
//       const videoUrl = URL.createObjectURL(response.data);
//       setVideoUrl(videoUrl);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchVideo();
//   }, [startByte, endByte]);

//   return (
//     <div>
//       <video controls>
//         <source src={videoUrl} type="video/mp4" />
//       </video>
//       <button onClick={handleNextPage}>Next Page</button>
//     </div>
//   );
// };

// export default Test;








































// ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Dropzone from 'react-dropzone';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// const Test = () => {
//     const [updatedFile, setUpdatedFile] = useState(null);
//     const [files, setFiles] = useState([]);

//   useEffect(() => {
//     fetchFiles();
//   }, []);

//   const fetchFiles = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/slider');
//       setFiles(response.data);
//       console.log(response.data)
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpload = async (acceptedFiles) => {
//     try {
//       const formData = new FormData();
//       formData.append('image', acceptedFiles[0]);
//       const response = await axios.post('http://localhost:5000/slider', formData);
//       setFiles((prevFiles) => [...prevFiles, response.data]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDownload = async (fileId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/slider/${fileId}`, {
//         responseType: 'blob',
//       });
//       console.log(response);
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `${fileId}`);
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdate = async (fileId) => {
//     if (!updatedFile) {
//       return;
//     }
//     try {
//       const formData = new FormData();
//       formData.append('file', updatedFile);
//       const response = await axios.put(`http://localhost:5000/slider/${fileId}`, formData);
//       setFiles((prevFiles) =>
//         prevFiles.map((file) => (file._id === fileId ? response.data : file))
//       );
//       setUpdatedFile(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (fileId) => {
//     try {
//       await axios.delete(`http://localhost:5000/slider/${fileId}`);
//       setFiles((prevFiles) =>
//         prevFiles.filter((file) => file._id !== fileId)
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // enable autoplay
//     autoplaySpeed: 2000 // set autoplay speed to 4 seconds
//   };
//   return (
//     <div>

// <Slider {...settings}>
//       {files.map((file) => (
//         <div key={file._id}>
//           <img width={700} height={400} src={`http://localhost:5000/${file.name}`} alt={file.name} />
//         </div>
//       ))}
//     </Slider>

//       <h1>File Uploader</h1>
//       <Dropzone onDrop={handleUpload}>
//         {({ getRootProps, getInputProps }) => (
//           <div {...getRootProps()} style={{ border: '1px solid black' }}>
//             <input {...getInputProps()} />
//             <p>Drag and drop a file here, or click to select a file</p>
//           </div>
//         )}
//       </Dropzone>
//       <h2>Files</h2>
//       <ul>
//         {files.map((file) => (
//           <li key={file._id}>
//             {file.name} ({file.mimetype})
//             <img src={`http://localhost:5000/${file.name}`} width={200} />
//             <button onClick={() => handleDownload(file._id)}>Download</button>
//             <button onClick={() => handleDelete(file._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Test;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Test() {
//   const [blogs, setBlogs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchBlogs();
//   }, [currentPage]);

//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/blog?page=${currentPage}`);
//       setBlogs(response.data.body);
//       console.log(response.data);
//       setTotalPages(Math.ceil(response.headers['x-total-count'] / 3)); // assume limit of 3 blogs per page
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <div>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog._id}>{blog.title}</li>
//         ))}
//       </ul>
//       <div>
//         <button disabled={currentPage === 1} onClick={handlePrevPage}>
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button disabled={currentPage === totalPages} onClick={handleNextPage}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Test;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Test() {
//   const [blogs, setBlogs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchBlogs();
//   }, [currentPage]);

//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/blog?page=${currentPage}`);
//       setBlogs(response.data);
//       setTotalPages(Math.ceil(parseInt(response.headers['x-total-count']) / 3));// assume limit of 3 blogs per page
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <div>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog._id}>{blog.title}</li>
//         ))}
//       </ul>
//       <div>
//         <button disabled={currentPage === 1} onClick={handlePrevPage}>
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button disabled={currentPage === totalPages} onClick={handleNextPage}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Test;














import React from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { apihttp } from "./api"
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// function Test() {
//   const [enrollmentRequests, setEnrollmentRequests] = useState([]);
//   const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null

//   useEffect(() => {
//     async function fetchEnrollmentRequests() {
//       try {
//         const response = await axios.get(`${apihttp}userRegistration/enrollment-requests`);
//         setEnrollmentRequests(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchEnrollmentRequests();
//   }, []);

//   async function handleAccept(enrollmentRequest) {
//     try {
//       const response = await axios.put(`${apihttp}userRegistration/courses/${enrollmentRequest._id}`, {
//         enrollmentRequest:{courseId:enrollmentRequest.courseId._id,Userid:enrollmentRequest.userId._id },
    
//       },{

//         headers: {
//           Authorization: `Bearer ${user.token}`
//         }
//       });
//       if (response.status === 201) {
//         setEnrollmentRequests(prevState => prevState.filter(req => req._id !== enrollmentRequest._id));
//         toast.success('You have successfully enrolled in the course contact us to display all matrials!'); // Display a success message using toast

//       }
//       console.log(response)
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function handleReject(enrollmentRequest) {
//     try {
//       console.log(enrollmentRequest._id);
//       const response = await axios.delete(`${apihttp}userRegistration/courses/${enrollmentRequest._id}`, {
//         status: 'rejected'
//       },{   headers: {
//         Authorization: `Bearer ${user.token}`
//       }});
//       console.log(response);
//       if (response.status == 200) {
//         setEnrollmentRequests(prevState => prevState.filter(req => req._id !== enrollmentRequest._id));
//         toast.dark('You have successfully rejected in the course!'); // Display a success message using toast
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">Enrollment Requests</h1>
//           <h1> counte of requests {enrollmentRequests ?enrollmentRequests.length:""}</h1>
//       <ToastContainer />

//       <table className="table">
//         <thead>
//           <tr>
//             <th>image</th>
//             <th>User</th>
//             <th>email</th>
//             <th>Course</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {enrollmentRequests ? enrollmentRequests.map((enrollmentRequest) => (
//             <tr key={enrollmentRequest._id}>
//               <td><img src={`http://localhost:5000/${enrollmentRequest.userId?.image}`}alt="" width={150} srcset="" /></td>
//               <td>{enrollmentRequest.userId?.usernam}</td>

//               <td>{enrollmentRequest.userId?.email}</td>
//               <td>{enrollmentRequest.courseId?.courseName}</td>
//               <td>{enrollmentRequest.status}</td>
//               <td>{enrollmentRequest.status}</td>

//               <td>
//                 <button className="btn btn-success mr-2" onClick={() => handleAccept(enrollmentRequest)}>Accept</button>
//                 <button className="btn btn-danger" onClick={() => handleReject(enrollmentRequest)}>Reject</button>
//               </td>
//             </tr>
//           )) : "loading..."}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Test;
// import { useState } from 'react';
// import Translate  from '@google-cloud/translate';
// // import serviceAccount from './googleAuth';
// import serviceAccount from './translate';
// const translate = new Translate({
//   credentials: serviceAccount,
//   projectId: 'my-project-id'
// });

// function Test() {
//   const [textToTranslate, setTextToTranslate] = useState('');
//   const [targetLanguage, setTargetLanguage] = useState('');
//   const [translatedText, setTranslatedText] = useState('');

//   async function handleTranslateClick() {
//     const [translation] = await translate.translate(textToTranslate, targetLanguage);
//     setTranslatedText(translation);
//   }

//   return (
//     <div>
//       <label htmlFor="text-to-translate">Text to translate:</label>
//       <input type="text" id="text-to-translate" value={textToTranslate} onChange={e => setTextToTranslate(e.target.value)} />
//       <br />
//       <label htmlFor="target-language">Target language:</label>
//       <input type="text" id="target-language" value={targetLanguage} onChange={e => setTargetLanguage(e.target.value)} />
//       <br />
//       <button onClick={handleTranslateClick}>Translate</button>
//       <br />
//       <p>Translated text: {translatedText}</p>
//     </div>
//   );
// }

// export default Test;