import React from "react";

export default function About(props) {
  return (
    <div className="container" style={{color: props.mode === "light"? "black":"white"}}>
      <h3>About Us Content</h3>
    </div>
  );
}
