import React, { useEffect, useState } from 'react';
import '../styles/hero.css'; // Import the CSS file

const Hero = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make an API call to fetch the necessary data
    // Replace the URL with your actual video URL
    const videoUrl = 'https://api-www.louvre.fr/sites/default/files/videos/video_5_4_960/video.mp4';
    setData({ video: videoUrl });
  }, []);
  

  if (!data) {
    return <div>Loading...</div>;
  }

  const { image, video } = data;

  return (
    <section className="hero">
      <video src={video} autoPlay muted loop></video>
      <div className="hero-content">
        <h2>Discover the Beauty of Museums</h2>
        <p>Explore rich history, art, and culture</p>
        {/* <button>Explore Now</button> */}
      </div>
    </section>
  );
};

export default Hero;
