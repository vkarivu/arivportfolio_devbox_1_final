import React from "react";
import "./App.css";
// import images from "./images";
import ContactInfo from "./components/ContactInfo";

interface AppProps {
  setCurrentComponent: (component: string) => void;
}

const App: React.FC<AppProps> = ({ setCurrentComponent }) => {
  return (
    <div className="App">
      <div className="container">
        <h1> </h1>

        <div className="container_dp_Details">
          <div id="profilepicdiv">
            <img
              // src={images["profilepicture.jpg"]}
              src="/profilepicture.jpg"
              alt="Profile"
              className="profile-image"
            />
          </div>
          <div id="profiledetailsDiv">
            <span id="hello_ele">Arivarasan V. Kannagi</span>
            <p id="mydesc">
              With 5 years of experience as a software developer, I played a
              crucial role in building the tool responsible for releasing the
              product Zoho CRM. My expertise lies in Java, Python, AWS, Spring,
              Django, and ReactJS. Also, I have independently developed web
              applications tailored for specific user bases.
            </p>

            <div className="buttons">
              {/* <button
                onClick={() => setCurrentComponent("Resume")}
                className="button resume"
              >
                Resume
              </button> */}
              <button
                onClick={() => setCurrentComponent("Projects")}
                className="button projects"
              >
                Timeline
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactInfo />
    </div>
  );
};

export default App;
