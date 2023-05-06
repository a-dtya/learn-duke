import React from "react";
import "./Why.css";

const Why = () => {
  return (
    <div className="why-container">
      <div className="why-left">
        <h1>Why Choose Us?</h1>
        <ul>
          <li>Expert Instructors</li>
          <li>Flexible Learning Options</li>
          <li>Industry-Recognized Certifications</li>
          <li>Community Support</li>
        </ul>
      </div>
      <div className="why-right">
        <img src="https://img.freepik.com/free-vector/hand-drawn-innovation-concept_52683-76273.jpg?w=740&t=st=1683396577~exp=1683397177~hmac=0c11924d8dbf4cb15521825c5144e6fe1567089691ff9c86481e6ee12697d173" alt="Why Choose Us?" />
      </div>
    </div>
  );
};

export default Why;