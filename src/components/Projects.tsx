import React from "react";
import "../Projects.css";
import images from "../images";

interface ProjectsProps {
  setCurrentComponent: (component: string) => void;
}

const timelineData = [
  {
    title: "Project - Work Logger",
    details: [
      "I developed a web-based application that allows users to log their daily work activities. The project presents work data in a graphical format, providing an intuitive and visual representation of productivity.",
    ],
  },
  {
    date: "May 2022 - Dec. 2023",
    title: "M.S. in Computer Science",
    location: "Cleveland State University, Cleveland, Ohio",
    details: [
      "This advanced degree provided me with in-depth knowledge of computer science concepts, enhanced my technical skills, and equipped me with the ability to tackle complex software development challenges.",
    ],
  },
  {
    date: "May 2017 - May 2022",
    title: "Member Technical Staff at Zoho CRM",
    location: "India",
    details: [
      "I significantly contributed to building and enhancing a continuous integration and delivery web application. My role involved designing and implementing features such as job scheduling, build automation, and deployment pipelines. I integrated automation in distributed Linux environments, improved UI experiences with ReactJS, and optimized performance by transitioning from Hibernate to JDBC. Additionally, I developed API functionalities for automated data handling and enhanced bug tracking processes.",
    ],
  },
  {
    date: "May 2013 - May 2017",
    title: "B.Tech. in Information Technology",
    location: "Thiagarajar College of Engineering, Madurai, India",
    details: [
      "Gained a solid foundation in IT principles and practices, which prepared me for my professional career in software development and engineering.",
    ],
  },
];

const Projects: React.FC<ProjectsProps> = ({ setCurrentComponent }) => {
  return (
    <div className="container">
      <div className="timeline">
        <h1>Arivarasan V. Kannagi</h1>
        <button onClick={() => setCurrentComponent("App")}>
          <img src={images["exit1.jpg"]} alt="exit1" className="exit1" />
        </button>
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              {item.location && (
                <p className="timeline-location">{item.location}</p>
              )}
              <ul className="timeline-details">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
