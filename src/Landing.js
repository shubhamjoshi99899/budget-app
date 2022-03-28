import React from 'react'
import './Stylesheets/Landing.css'
import { Link, NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Landing = () => {
  return (
    <div>
        <div className="title">
            <h1 style={{}}>React Apps</h1>
            </div>
            <section className="section">
    <div className="section-container">
      
      <div className="box">
        <div className="img-box">
          <img src="https://i.pinimg.com/originals/92/d6/0e/92d60eae3fee2417490cf9e0a8b5e154.jpg" alt=""/>
        </div>
        <div className="content">
          <h2 className="img-title">Budget App!</h2>
          <p className="img-text">Budget App is an expense tracker app made by using React and context API.</p>
          <Link to='/budget'> <a href="" className="img-link">Visit Project...</a></Link>
          <a href="#" className="img-link">View code...</a>
        </div>
      </div>
    
      <div className="box">
        <div className="img-box">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png" alt=""/>
        </div>
        <div className="content">
          <h2 className="img-title">Notes App</h2>
          <p className="img-text"> Notes App helps you keep your notes and delete them when you're done with them!</p>
          <a href="https://noteapp-c4711.web.app/" target='_blank'  className="img-link">Visit Project...</a>
          <a href="#" className="img-link">View code...</a>
        </div>
      </div>
    
      <div className="box">
        <div className="img-box">
          <img src="https://raw.githubusercontent.com/kml1990/react-calculator/master/src/react-calculator.png" alt=""/>
        </div>
        <div className="content">
          <h2 className="img-title">Calculator</h2>
          <p className="img-text">A simple calculator made with them help of react and javascript!</p>
          <a href="https://calculator-80e29.web.app/" target='_blank' className="img-link">Visit Project...</a>
          <a href="#" className="img-link">View code...</a>
        </div>
      </div>
  
     
  
    </div>
  </section>
    </div>
    
  )
}

export default Landing