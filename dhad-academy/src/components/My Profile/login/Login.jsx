import React from 'react'
import { Container } from 'react-bootstrap'
import actions from '../../../actions/actions'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {apihttp} from '../../../api/api'
import { useTranslation } from 'react-i18next';

function Login() {
  const [t] = useTranslation();

  const dispatch = useDispatch()  


    const loginSucceful = useSelector((state)=>state.users)
  const nav = useNavigate()

  const [email, setEmail] = useState('');
  const [error, seterror] = useState(null);

  const [password, setPassword] = useState('');
  // const [registration, setregistration] = useState({name:'', email:'',password:''});
  // dispatch(actions.loginaction(loginbody))
  // props.handleClose();
const handleSubmitloggin= async(event) => {
  event.preventDefault();
  const loginbody={email,password}
  console.log(loginbody);
  await fetch(
    apihttp+'userRegistration/login',
    {
      method: "post",
      headers: {
 
        "Content-Type": " application/json",

      },
      body: JSON.stringify(loginbody),

    }
  ).then((response) => response.json()).then((data) => {
    console.log(data)
    if(data.statuscode==200){
      localStorage.setItem("token",JSON.stringify( data.body))  
      nav("/home")
      seterror('')

    }
    if(data.statuscode==400){
        seterror(data.message)
    }
  }
    ).catch(el=>  seterror("an error occured please try again later"))
  
  
  }
  
  return (
    <>
        <Container className=''>
        <div className='w-75 m-auto'>
        <h4 className='pb-3'>{t('LogIn')}</h4>
    <form className=''  onSubmit={handleSubmitloggin}>
              <div className='row'>
                <div className="col-12 form-group ">
                  <label className="px-2 opacity-75" htmlFor="email">{t('Email')}</label>
                  <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required id="email" className="form-control" />
                </div>

                <div className="col-12 form-group ">
                  <label className="px-2 opacity-75" htmlFor="Password">{t('Password')}</label>
                  <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required id="Password" className="form-control" />
                </div>

            
              <div className="pt-4 col-12">
                <button type="submit" className="w-100 btn-submit btn px-5">{t('LogIn')}</button>
                <p>{error?error:''}</p>
              </div>
              </div>

            </form>
        </div>

    </Container>
        
    </>
  )
}

export default Login
