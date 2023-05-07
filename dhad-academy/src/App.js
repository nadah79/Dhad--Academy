import { Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Roting from './routing/Roting';
import { useTranslation } from 'react-i18next';

import { useEffect,useState  } from "react";


import { useNavigate } from 'react-router-dom';

function App() {
  const nav = useNavigate()
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

const token = JSON.parse(localStorage.getItem("token"))
// useEffect(() => {
//   if(token){
//     nav("/")
//     }
// }, [token]);

console.log(token)
  return (
    <>
  <div className="App">
  <Header/>
  <Roting/>
  <Footer/>
    </div>
    
    </>
  
  );
}


export default App;