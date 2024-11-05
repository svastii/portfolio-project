import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion}  from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
         
        <span>Hy! I Am</span>
          <span>Svastii Shrivastava</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producing the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button></Link>
        
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="https://github.com/svastii" />
          <img src={LinkedIn} alt="www.linkedin.com/in/svastii-shrivastava-371215290" />
          <img src={Instagram} alt="www.instagram.com/shrivastava_svastii" />
        </div>
      
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left:"-36%"}}
          whileInView={{ left:"-24%"}}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top:"-4%",left:"74%"}}
          whileInView={{ left:"68%"}}
          transition={transition}
          className="floating-div">
         <FloatingDiv img={crown} text1="Web" text2="Developer"/>
          </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left:"9rem", top:"18rem"}}
          whileInView={{ left:"0rem"}}
          transition={transition}
          className="floating-div">
          {/* floatingDiv mein change hy dark mode ka */}
          <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div></div>

        <div className="blur"style={{ background:"rgb(238 210 255)"}}></div>
        <div className="blur"style={{ background:"#C1F5FF", top:"17rem", width:"21rem", height:"11rem", left:"-9rem"}}></div>
      </div></div>
  );
};
export default Intro;