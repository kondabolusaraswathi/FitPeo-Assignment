import React from 'react';
import './DashBoard.css'; 


const DashBoard = ({ title, image, description,inordec }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <h1 className="card-description">{description}</h1>
        <p className="card-progress">
        <p >3{inordec ? <p className="glyphicon glyphicon-triangle-top greenc"></p>:<span className="glyphicon glyphicon-triangle-bottom redc"></span>}</p> 
        
        </p>

      </div>
    </div>
  );
};

export default DashBoard;
