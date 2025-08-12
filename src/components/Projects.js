import React from "react";
import Carousel from "./Carousel"; // Import the component, not the CSS
import "./styles/Carousel.css"; // Import Carousel styles if needed
import "./styles/Projects.css"; // Project styles
// ...existing code...

const Projects = () => {
  return (
    <>
      <section id="projects">
        <h2>Web Development Projects</h2>
        <div className="project-list">
          <div className="project">
            <Carousel
              images={[
                process.env.PUBLIC_URL + "/images/cafe admin.png",
                process.env.PUBLIC_URL + "/images/cafe.png",
                process.env.PUBLIC_URL + "/images/Login_cafe.png",
                process.env.PUBLIC_URL + "/images/register_cafe.png",  
              ]}
            />
            <h3>Web Development Project 1</h3>
            <p>Description of web development project 1.</p>
            <div className="skills">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
        </div>
      </section>
        
      <section id="ml-projects">
        <h2>Machine Learning Projects</h2>
        <div className="project-list">
          <div className="project">
            <Carousel
              images={[
                process.env.PUBLIC_URL + "/images/Fruit GU.png",
                process.env.PUBLIC_URL + "/images/train image.jpg"
              ]}
            />
            <h3>Fruit Good/Bad Detection</h3>
            <p>A machine learning application that detects whether fruits are fresh or spoiled using YOLOv5 object detection. Includes a GUI for uploading images and viewing detection results in real time.</p>
            <div className="skills">
              <span className="skill-tag">PYTHON</span>
              <span className="skill-tag">YOLOV5</span>
              <span className="skill-tag">IMAGE PROCESSING</span>
              <span className="skill-tag">MACHINE LEARNING</span>
              <span className="skill-tag">GUI</span>
            </div>
          </div>

          <div className="project">
            <Carousel
              images={[
                process.env.PUBLIC_URL + "/images/bacteria login.png",
                process.env.PUBLIC_URL + "/images/bacteria 1.png",
                process.env.PUBLIC_URL + "/images/bacteria 2.png"
              ]}
            />
            <h3>Bacteria Detection</h3>
            <p>A YOLOv5-based image detection system for identifying bacteria in microscope images. Includes a user-friendly GUI for uploading samples and displaying detection results.</p>
            <div className="skills">
              <span className="skill-tag">PYTHON</span>
              <span className="skill-tag">YOLOV5</span>
              <span className="skill-tag">IMAGE PROCESSING</span>
              <span className="skill-tag">MACHINE LEARNING</span>
              <span className="skill-tag">GUI</span>
            </div>
          </div>

          <div className="project">
            <Carousel
              images={[
                process.env.PUBLIC_URL + "/images/jap char 1.jpg",
                process.env.PUBLIC_URL + "/images/jap char 2.jpg"
              ]}
            />
            <h3>Japanese Character Translation</h3>
            <p>An image-processing tool that detects Japanese characters in images and translates them into English. Built with YOLOv5 for character recognition and integrated with a translation API for instant results.</p>
            <div className="skills">
              <span className="skill-tag">PYTHON</span>
              <span className="skill-tag">YOLOV5</span>
              <span className="skill-tag">IMAGE PROCESSING</span>
              <span className="skill-tag">MACHINE LEARNING</span>
            </div>
          </div>

          <div className="project">
            <Carousel
              images={[
                process.env.PUBLIC_URL + "/images/waste.jpg",
                process.env.PUBLIC_URL + "/images/waste 1.jpg"
              ]}
            />
            <h3>Waste Management Detection</h3>
            <p>An automated waste detection and sorting system using YOLOv5 and image processing. Runs on Raspberry Pi and Arduino to control mechanical sorting, making waste segregation more efficient.</p>
            <div className="skills">
              <span className="skill-tag">PYTHON</span>
              <span className="skill-tag">YOLOV5</span>
              <span className="skill-tag">IMAGE PROCESSING</span>
              <span className="skill-tag">MACHINE LEARNING</span>
              <span className="skill-tag">RASPBERRY PI</span>
              <span className="skill-tag">ARDUINO</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;

