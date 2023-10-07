import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";

function MyProjects() {
  return (
    <div className="myProjects">
      {/* Header */}
      <header className="mt-16">
        <div className="flex flex-wrap border border-gray-300 p-4">
          {/* Add child elements here */}
        </div>
      </header>

      {/* Outer flex container */}
      <div
        className="fixed top-0 right-0 m-4 flex justify-center items-center h-screen flex-col"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "0",
          right: "0",
          margin: "4px",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* Buttons */}
        <div>
          <Link to="/create-project">
            <button
              style={{
                width: "400px",
                height: "100px",
                flexShrink: "0",
                borderRadius: "20px",
                background: "#1E6FC9",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                margin: "10px",
              }}
            >
              Button 1
            </button>
          </Link>
          <button
            style={{
              width: "400px",
              height: "100px",
              flexShrink: "0",
              borderRadius: "20px",
              background: "#C9661E",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              margin: "10px",
            }}
          >
            Button 2
          </button>
        </div>

        {/* ProjectCard */}
        <ProjectCard />
            

      </div>

      {/* Footer */}
    </div>
  );
}

export default MyProjects;
