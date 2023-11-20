import React from 'react';
import "../styles/flipcard.css"; // Adjust the path based on your file structure

const FlipCard = () => {
  return (
    <div>
      {/* Paste the HTML code here */}
      <div className="panels">
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=760)' }}>
            <h3 className="panel__title">A</h3>
          </div>
        </a>
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=786)' }}>
            <h3 className="panel__title">B</h3>
          </div>
        </a>
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=883)' }}>
            <h3 className="panel__title">C</h3>
          </div>
        </a>
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=550); background-position: 46% center;' }}>
            <h3 className="panel__title">D</h3>
          </div>
        </a>
      </div>

      <div className="panels">
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=760)' }}>
            <h3 className="panel__title">A</h3>
          </div>
        </a>
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=786)' }}>
            <h3 className="panel__title">B</h3>
          </div>
        </a>
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=883)' }}>
            <h3 className="panel__title">C</h3>
          </div>
        </a>
      </div>

      <div className="panels">
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=760)' }}>
            <h3 className="panel__title">A</h3>
          </div>
        </a>
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=786)' }}>
            <h3 className="panel__title">B</h3>
          </div>
        </a>
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=883)' }}>
            <h3 className="panel__title">C</h3>
          </div>
        </a>
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=550); background-position: 46% center;' }}>
            <h3 className="panel__title">D</h3>
          </div>
        </a>
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=821); background-position: 46% center;' }}>
            <h3 className="panel__title">E</h3>
          </div>
        </a>
      </div>

      <div className="panels">
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=786)' }}>
            <h3 className="panel__title">A</h3>
          </div>
        </a>
        <a href="#" className="panel">
          <div className="panel__content" style={{ backgroundImage: 'url(https://unsplash.it/1100/1100/?image=883)' }}>
            <h3 className="panel__title">B</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FlipCard;
