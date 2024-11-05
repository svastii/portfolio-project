import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Svastii</div>
        <span>Toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style{{ListStyleType:"none"}}>
           <Link activeClass="active" to="Navbar" spy={true} smooth={true}> <li>
                Home
                </li></Link>
             
              <Link to="services" spy={true} smooth={true}>
                <li>Services
            </li></Link>
           
              <Link to="works" spy={true} smooth={true}>
                
                <li>Experience       </li></Link>
              
            
              <Link to="portfolio" spy={true} smooth={true}>
                <li> Portfolio </li>
              </Link>
           
             <Link to="testimonial" spy={true} smooth={true}>    <li>
               
           Testimonial
            </li>
          </Link>
          </ul>
       </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;