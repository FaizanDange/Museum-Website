import React from "react";
import Card from "./Card";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Exhibit from "./Exhibit";
import "../styles/gallery.css"; // Import the CSS file

const Gallery = () => {
  const exhibits = [
    {
      name: "Albert Hall MuSeums",
      description:
        "The museum has a rich collection of artifacts including paintings, jewelry, carpets, ivory, stone, metal sculptures, and works in crystal. The collection includes coins from the Gupta, Kushan, Delhi Sultanate, Mughal and British periods..",
      imageUrl: "https://static.toiimg.com/img/93500155/Master.jpg",
    },
    {
      name: "Heritage Museums",
      description:
        "AHeritage Museum is a museum facility primarily dedicated to the presentation of historical and cultural information about a place and its people. The museum serves as a world of discovery, and uses exciting concepts to explore the history, architecture, art, culture and heritage of the place..",
      imageUrl:
        "https://www.visittnt.com/blog/wp-content/uploads/2018/06/Indian-Museum-Kolkata.jpg",
    },
    {
      name: "Rashtrapati Bhavan MuSeum",
      description:
        "This place has quite a bit of artifacts and historical evidences about the Rashtrapati Bhavan which made it an interesting visit. Worth visiting. This review is the subjective opinion of a Tripadvisor member and not of Tripadvisor LLC.",
      imageUrl: "	https://rooftopapp.com/wp-content/uploads/2023/04/1-4.png",
    },
    {
      name: "City Palace MuSeum.",
      description:
        "ABODE OF THE ROYALS. Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruling royal family which lives in a private section of the palace..",
      imageUrl:
        "https://www.solitarytraveller.com/wp-content/uploads/2020/12/indian_museum_banner.jpg",
    },
    {
      name: "Heritage MuSeum",
      description:
        "AHeritage Museum is a museum facility primarily dedicated to the presentation of historical and cultural information about a place and its people. The museum serves as a world of discovery, and uses exciting concepts to explore the history, architecture, art, culture and heritage of the place.",
      imageUrl:
        "https://assets.telegraphindia.com/telegraph/05metmuseum_170910.jpg",
    },
    {
      name: "Antique and historical objects place",
      description:
        "A place where old items are kept is called a Museum. Museum in Delhi is known as the National Museum of India and is one of the largest museums in India. It was established in 1949 and holds a variety of articles ranging from pre-historic to modern work of art.",
      imageUrl:
        "https://thumbs.dreamstime.com/b/antique-historical…um-kolkata-india-antique-historical-143620772.jpg",
    },
  ];

  const firstRowExhibits = exhibits.slice(0, 3);
  const secondRowExhibits = exhibits.slice(3, 6);

  return (

    
    <section className="gallery-content">
      <div class="smoke" >
        <ul>
            <li>G</li>
            <li>A</li>
            <li>L</li>
            <li>L</li>
            <li>E</li>
            <li>R</li>
            <li>Y</li>
        </ul>
        </div>
      <div className="main">
      {exhibits.map((exhibits) => (
        <div className="card-1">
          <div className="img-1">
            <img src={exhibits.imageUrl} className="img" />
          </div>
          <div className="card1-Title">{exhibits.name}</div>
          <div className="card1-desc">{exhibits.description}</div>
        </div>
      ))}
      </div>

       
    </section>
  );
};

export default Gallery;
