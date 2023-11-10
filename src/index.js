import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scss/style.scss';

//import App from './App';
//import FontAwesomeIcon from './FontAwesomeIcon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import Header from './Header';

import MainSwiper from './MainSwiper';
import reportWebVitals from './reportWebVitals';

import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <MainSwiper />
    <div className='container'>
      <h2 className='title'>Create projects</h2>
      <div className='row'>
        <div className='col-12 col-md-3 col-lg-7'>
          <img src='/assets/img/c-1.jpg' alt='' />
        </div>
        <div className='col-12 col-md-3 col-lg-5 align-self-center'>
          <h3>UI/UX Design</h3>
          <span>1111</span>
        </div>
        <div className='col-12 col-md-3 col-lg-5 align-self-center'>
          <h3>React Publish</h3>
          <span>2222</span>
        </div>
        <div className='col-12 col-md-3 col-lg-7'>
          <img src='/assets/img/c-2.jpg' alt='' />
        </div>
        <div className='col-12 col-md-3 col-lg-7'>
          <img src='/assets/img/c-3.jpg' alt='' />
        </div>
        <div className='col-12 col-md-3 col-lg-5 align-self-center'>
          <h3>WEB Site Developer</h3>
          <span>3333</span>
        </div>
        <div className='col-12 col-md-3 col-lg-5 align-self-center'>
          <h3>Movie Effect Design</h3>
          <span>4444</span>
          <FontAwesomeIcon icon={faCamera} />
        </div>
        <div className='col-12 col-md-3 col-lg-7'>
          <img src='/assets/img/c-4.jpg' alt='' />
        </div>
      </div>
    </div>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
