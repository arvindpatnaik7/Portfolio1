import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Guggilapu Satya Sai Arvind </span>
            from <span className="purple"> Vizianagaram, India.</span>
            <br />
            I am currently pursuing my Btech in LIET.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focus on Improving not Proving!"{" "}
          </p>
          <footer className="blockquote-footer">Arvind</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
