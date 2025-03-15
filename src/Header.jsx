import React from "react";
import "./css/Header.css";
import profilePic from "./assets/11.jpg";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-top">
        <div className="header-left">
          <h1>CodeCrafters</h1>
        </div>
        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
        <div className="header-right">
          <a href="#contact" className="work-button">
            Let's Work Together
          </a>
        </div>
      </div>
      <div className="intro">
        <div className="intro-text">
          <h2 className="slide-in">Hello, my name is Owais Ahmed</h2>
          <p className="slide-in text-justify">
            I am a passionate web developer, specializing in creating seamless
            user experiences, robust backend solutions, and complete full-stack
            development. Let’s bring your ideas to life with cutting-edge
            front-end development  and back-end technologies!
          </p>
        </div>
        <div className="intro-image">
          <img src={profilePic} alt="Zain" className="profile-pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
// import "./Header.css";
// import profilePic from "./assets/zain.jpg";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-top">
//         <div className="header-left">
//           <h1>Zain.</h1>
//         </div>
//         <nav className="header-nav">
//           <a href="#home">Home</a>
//           <a href="#services">Services</a>
//           <a href="#contact">Contact</a>
//           <a href="#about-us">About Us</a>
//         </nav>
//         <div className="header-right">
//           <button className="work-button">Let's Work Together</button>
//         </div>
//       </div>
//       <div className="intro">
//         <div className="intro-text">
//           <h2 className="slide-in">Hello, my name is Zain.</h2>
//           <p className="slide-in">
//             I am a passionate web developer, specializing in creating seamless
//             user experiences and robust backend solutions. Let's bring your
//             ideas to life!
//           </p>
//         </div>
//         <div className="intro-image">
//           <img src={profilePic} alt="Zain" className="profile-pic" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
