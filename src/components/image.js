import React from "react";
import "./Tech.png";
import "./HomePage"; // Tell webpack this JS file uses this image
console.log(Tech); // /logo.84287d09.png
function Header() {
  // Import result is the URL of your image
  return <img src={Tech.png} alt="Tech" />;
}
export default Header;
