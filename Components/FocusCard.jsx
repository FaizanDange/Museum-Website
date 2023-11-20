import React from "react";
import "../styles/focuscard.css"; // Import the CSS file

const FocusCard = () => {
  // Define the background image URLs
  const imageUrls = [
    "https://imgmedia.lbb.in/media/2020/01/5e0dd5ab3dc45575e7bad3c6_1577964971000.jpg",
    "https://i0.wp.com/iknowdino.com/wp-content/uploads/2022/09/SD4.jpg?fit=7952%2C5304&ssl=1",
    "https://scx2.b-cdn.net/gfx/news/2021/big-john-was-discovere.jpg",
    "https://blooloop.com/wp-content/uploads/2022/07/hong-kong-science-museum-dinosaur-exhibition.jpeg",
    "https://live.staticflickr.com/1968/29979795967_642732a079_b.jpg",
  ];

  return (
    <div className="container-header" >
        <div className="Header">
          <ul>
              <li>T</li>
              <li>O</li>
              <li>P</li>
              <li>5</li>
              <li>H</li>
              <li>I</li>
              <li>S</li>
              <li>T</li>
              <li>O</li>
              <li>R</li>
              <li>I</li>
              <li>C</li>
              <li>A</li>
              <li>L</li>
              <li>A</li>
              <li>N</li>
              <li>C</li>
              <li>I</li>
              <li>E</li>
              <li>N</li>
              <li>T</li>
          </ul>
        </div>
    <div className="container">
      {imageUrls.map((imageUrl, index) => (
        <div
          className={`box box-${index + 1}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
          data-text="Indian Musuem" // You can set data-text dynamically here if needed
          key={index}
        ></div>
      ))}
    </div>
    </div>
  );
};

export default FocusCard;