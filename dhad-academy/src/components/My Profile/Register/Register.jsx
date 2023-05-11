import React from 'react'
import actions from '../../../actions/actions'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

function Register() {
  const [t] = useTranslation();
  const loginSucceful = useSelector((state) => state.users)
console.log(loginSucceful,"ssssss")
  const dispatch = useDispatch()
  const [Show, setShowImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setconPassword] = useState('');
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsgAR, setErrorMsgAR] = useState("");
  const handleSubmit = async (event) => {


    event.preventDefault();
    if (password != conpassword) {
      console.log("object");
      setErrorMsg("Password and Confirm password must be the same")
      setErrorMsgAR("كلمة المرور يجب ان تتطابق")
      return ;
    }
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    console.log(formData);
    dispatch(actions.registrationaction(formData))

  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
    setShowImage(URL.createObjectURL(event.target.files[0]))
  };


  return (
    <>
      <div className=''>
        <div className='w-75 m-auto'>
          <h4 className='pb-3'>{t('Register')}</h4>
          <form className='' onSubmit={handleSubmit} encType="multipart/form-data">
            <div className='row'>
              <div className="col-12 form-group">
                <label className="px-2 opacity-75" htmlFor="email">{t('Email')}</label>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required id="email" className="form-control" />
              </div>
              <div className="col-12 form-group">
                <label className="px-2 opacity-75" htmlFor="Full-Name">{t('FullName')}</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} required id="Full-Name" className="form-control" />
              </div>

              <div className="col-12 form-group">
                <label className="px-2 opacity-75" htmlFor="Password">{t('Password')}</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required id="Password" className="form-control" />
              </div>

              <div className="form-group col-12 ">
                <label className="px-2 opacity-75" htmlFor="Confirm-Password" >{t('ConfirmPassword')}</label>
                <input type="password" value={conpassword} onChange={(event) => setconPassword(event.target.value)} required id="Confirm-Password" className="form-control" />
              </div>
              <div className="form-group col-12 ">
                <label className="px-2 opacity-75"  htmlFor="image">{t('Image')}</label>
                <input type="file" id="image" className='form-control' onChange={handleImageChange} accept="image/*" required />
              </div>
              {/* <img src={Show} alt="" className='w-50' /> */}
              <div className="pt-4 col-12">
                <button type="submit" className="w-100 btn-submit btn px-5">{t('Register')}</button>
                <p>{loginSucceful.registrationfail ? loginSucceful.registrationfail : ""}</p>
                <p>{loginSucceful.registration ? loginSucceful.registration : ""}</p>
                <p>
                  {
                    i18n.language=="en"? errorMsg :errorMsgAR
                  }
                </p>
              </div>
            </div>

          </form>
        </div>

      </div>

    </>
  )
}

export default Register





















