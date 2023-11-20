import React from 'react';
import "../styles/GlowCard.css";

function CardGlow() {
  return (
        <div className='GlowContainer'>
            <script src="https://kit.fontawesome.com/95a02bd20d.js"></script>

            <div className="container">
            
                <div className="card1">
                    <div className="face face1">
                    <div className="content">
                        <i className="fab fa-windows"></i>  
                        <h3>Windows</h3>
                    </div>
                    </div>
                    <div className="face face2">
                    <div className="content">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis quia molestias vitae fugiat aspernatur alias corporis?</p>
                        <a href="#" type="button">Read More</a>
                    </div>
                    </div>
                </div>

                <div className="card2">
                    <div className="face face1">
                    <div className="content">
                        <i className="fab fa-android"></i>
                        <h3>Android</h3>
                    </div>
                    </div>
                    <div className="face face2">
                    <div className="content">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis quia molestias vitae fugiat aspernatur alias corporis?</p>
                        <a href="#" type="button">Read More</a>
                    </div>
                    </div>
                </div>

                <div className="card3">
                    <div className="face face1">
                    <div className="content">
                        <i className="fab fa-apple"></i>
                        <h3>Apple</h3>
                    </div>
                    </div>
                    <div className="face face2">
                    <div className="content">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis quia molestias vitae fugiat aspernatur alias corporis?</p>
                        <a href="#" type="button">Read More</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default CardGlow;
