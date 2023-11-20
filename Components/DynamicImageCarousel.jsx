import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/carousel.css"; // Import the CSS file

const DynamicImageCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch or set the images dynamically from an API or any other source
    // For demonstration purposes, I'm using a static list of images
    const fetchedImages = [
      {
        url: "https://tourscanner.com/blog/wp-content/uploads/2018/09/are-Louvre-Museum-tours-worth-it.jpg",
        alt: "Louvre Museum",
        caption: "It is home to some of the most famous artworks in the world, such as Leonardo da Vinci's Mona Lisa and Virgin of the Rocks. The museum also has a vast collection of sculptures (including Venus de Milo) and other objects from ancient civilizations",
      },
      {
        url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/Museum-of-Future-Exterior-3.webp",
        alt: "Dubai Museum",
        caption: "You will witness artistic and historical evidence in the heart of Riyadh in Al Murabba neighborhood near King Abdulaziz palace. The museum was opened in 1419H and spans across a distance of 17,000Km2 where it tells the story of 3,700 artifacts such as statues, scripts and unique sculptures.",
      },
      {
        url: "https://www.worldatlas.com/r/w1200/upload/c9/26/a2/shutterstock-257781835.jpg",
        alt: "Hermitage Museum",
        caption: "A museum is a not-for-profit, permanent institution in the service of society that researches, collects, conserves, interprets and exhibits tangible and intangible heritage. Open to the public, accessible and inclusive, museums foster diversity and sustainability.",
      },
    ];
    setImages(fetchedImages);
  }, []);

  useEffect(() => {
    // Automatically move the carousel every 3 seconds
    const interval = setInterval(() => {
      // Move to the next slide
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      // Clear the interval on component unmount
      clearInterval(interval);
    };
  }, [images]);

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="cour">
      <Carousel
        showThumbs={false}
        selectedItem={slideIndex}
        onChange={setSlideIndex}
        className="Main-Div"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.alt} />
            <div className="Legend">
              {/* <p>Explore rich history, art, and culture</p> */}
              {image.caption}
            </div>  
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DynamicImageCarousel;
