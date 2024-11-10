import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

// Comment out the Button import temporarily
// import Button from 'react-bootstrap/Button';

const MemeCard = (props) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem", margin: "25px" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <button
          onClick={() => navigate(`/edit?url=${props.img}`)}
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "5px 10px",
          }}
        >
          Edit
        </button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
