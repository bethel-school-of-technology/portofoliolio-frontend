import React from "react";
import Hope from "./Hope";
import Tech from "./Tech.png";

function HomePage(props) {
  return (
    <Hope
      title={props.title}
      subTitle={props.subTitle}
      img
      src={Tech.png}
      alt="Tech"
    />
  );
}
export default HomePage;
