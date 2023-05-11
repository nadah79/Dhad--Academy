import { Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Roting from './routing/Roting';
import { useTranslation } from 'react-i18next';

import { useEffect,useState  } from "react";


import { useNavigate } from 'react-router-dom';
import ScrollToTop from './components/Top-btn/ScrollToTop';

function App() {
  const nav = useNavigate()
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();


  return (
    <>
  <div className="App vh-100">
  <Header/>
  <Roting/>
  <ScrollToTop/>
  <Footer/>
    </div>
    
    </>
  
  );
}


export default App;