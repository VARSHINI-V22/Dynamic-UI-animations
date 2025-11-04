import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ReactComponent as BgCircle } from "../assets/circlesvg.svg";
import CenterIcon from "../assets/center-icon.png";

const Accomplish = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    background: "linear-gradient(90deg, #1f1f1f 0%, #3b82f6 100%)", 
    fontFamily: "'Segoe UI', sans-serif",
    color: "black",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const headingStyle = {
    fontSize: "6rem", 
    fontWeight: 300, 
    lineHeight: "1.1",
    margin: "10px 0",
    color: "#000000",
  };

  const titleStyle = {
    maxWidth: "800px",
    fontSize: "20px",
    lineHeight: "1.6",
    margin: "40px 0 50px 0",
    color: "#ffffffcc",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    color: "white",
  };

  const leftListStyle = {
    ...listStyle,
    alignItems: "flex-start", 
    marginLeft: "0",
  };

  const rightListStyle = {
    ...listStyle,
    alignItems: "flex-end", 
    marginRight: "0",
  };

  const listItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    fontSize: "22px", 
    color: "white",
  };

  const checkIconStyle = {
    color: "#4ade80",
    fontSize: "24px",
  };

  const underlineStyle = {
    width: "100%",
    height: "2px",
    backgroundColor: "white",
    marginTop: "5px",
  };

  const centerWrapperStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 1 auto",
  };

  const svgStyle = {
    width: "500px",
    height: "500px",
    maxWidth: "90vw",
    maxHeight: "90vw",
    opacity: 0.9,
  };

  const iconWrapperStyle = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    background: "transparent", 
  };

  const iconStyle = {
    width: "80px",
    height: "80px",
  };

  const buttonWrapperStyle = {
    marginTop: "50px",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "15px 50px",
    backgroundColor: "#22c55e",
    color: "black",
    fontWeight: 600,
    fontSize: "18px",
    borderRadius: "10px",
    textDecoration: "none",
    transition: "0.3s",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Accomplish</h1>
      <h1 style={headingStyle}>Anything in</h1>
      <h1 style={headingStyle}>Developing</h1>

      <p style={titleStyle}>
        This is the space to introduce the Services section. Briefly describe
        the types of services offered and highlight any special benefits or
        features.
      </p>

      <div style={contentStyle}>
        <div style={leftListStyle}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={listItemStyle}>
              <FaCheckCircle style={checkIconStyle} />
              <span>Sample Text {i}</span>
              <div style={underlineStyle}></div>
            </div>
          ))}
        </div>

        <div style={centerWrapperStyle}>
          <BgCircle style={svgStyle} />
          <div style={iconWrapperStyle}>
            <img src={CenterIcon} alt="icon" style={iconStyle} />
          </div>
        </div>

        <div style={rightListStyle}>
          {[4, 5, 6].map((i) => (
            <div key={i} style={listItemStyle}>
              <FaCheckCircle style={checkIconStyle} />
              <span>Sample Text {i}</span>
              <div style={underlineStyle}></div>
            </div>
          ))}
        </div>
      </div>

      <div style={buttonWrapperStyle}>
        <a
          href="https://www.brington.in/"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
        >
          Create Now!
        </a>
      </div>
    </div>
  );
};

export default Accomplish;