import React, { useState } from "react";
import "./css/Portfolio.css";

// Import your images
import groceryImage from "./assets/p3.png"; // Update with your actual image names
import project2Image from "./assets/p2.png"; // Add more images as needed
import project3Image from "./assets/p1.png"; // Add more images as needed
import project4Image from './assets/f3.jpg';
import project5Image from './assets/p1.jpg';
import project6Image from './assets/p2.jpg';
import project7Image from './assets/salon1.jpg';
import project8Image from './assets/salon3.jpg';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: groceryImage,
      text: "Grocery Go simplifies shopping with personalized recommendations and real-time inventory tracking, making your grocery experience faster and hassle-free!",
    },
    {
      src: project2Image,
      text: "Grocery Go: Discover an effortless shopping experience with our diverse range of quality grocery products!",
    },
    {
      src: project3Image,
      text: "Grocery Go: Simplifying your shopping journey with seamless cart functionality for quick and easy checkout!",
    },
    {
      src: project5Image,
      text: "TaskFlow is an intuitive project management tool that helps teams plan, organize, and track their tasks efficiently.",
    },
    {
      src: project6Image,
      text: "Resumify is an AI-powered resume builder that crafts ATS-friendly resumes in seconds using cutting-edge AI models like GPT-4 and BERT. Built with a sleek React.js frontend and a robust Node.js + Express.js backend, it ensures seamless performance.",
    },
    {
      src: project7Image,
      text: "Salon Booking Application ",
    },
    {
      src: project8Image,
      text: "Salon Booking Application ",
    },
    {
      src: project4Image,
      text: "Taskflow Mangaement Web Application ",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-title">My Portfolio</h2>
      <div className="portfolio-slider">
        <button className="slider-button prev-button" onClick={handlePrev}>
          &lt;
        </button>
        <div className="portfolio-image">
          <img src={images[currentIndex].src} alt="Portfolio" />
          <p>{images[currentIndex].text}</p>
        </div>
        <button className="slider-button next-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
