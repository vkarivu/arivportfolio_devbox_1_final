import React, { useState } from "react";
import App from "./App";
import Projects from "./components/Projects";

const Main: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<string>("App");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Projects":
        return <Projects setCurrentComponent={setCurrentComponent} />;
      case "App":
      default:
        return <App setCurrentComponent={setCurrentComponent} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default Main;
