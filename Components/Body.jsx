import React from "react";
import '../styles/body.css';

const Body = () => {
  return (
    <div>
        
        <div className="smoke" >
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
        <div className="horizontal">
            {/* Horizontal */}
            {/* <h4>Horizontal Flip</h4> */}
            <div className="flip">
                <div className="front" style={{ backgroundImage: "url(https://static.toiimg.com/img/93500155/Master.jpg)" }}>
                {/* <h1 className="text-shadow">Albert Hall MuSeums</h1> */}
                </div>
                <div className="back">
                <h2>Albert Hall MuSeums</h2>
                <p>The museum has a rich collection of artifacts including paintings, jewelry, carpets, ivory, stone, metal sculptures, and works in crystal. The collection includes coins from the Gupta, Kushan, Delhi Sultanate, Mughal and British periods...</p>
                </div>
            </div>

            <div className="flip">
                <div className="front" style={{ backgroundImage: "url(https://www.visittnt.com/blog/wp-content/uploads/2018/06/Indian-Museum-Kolkata.jpg)" }}>
                {/* <h1 className="text-shadow">Heritage Museums</h1> */}
                </div>
                <div className="back">
                <h2>Heritage Museums</h2>
                <p>AHeritage Museum is a museum facility primarily dedicated to the presentation of historical and cultural information about a place and its people. The museum serves as a world of discovery, and uses exciting concepts to explore the history, architecture, art, culture and heritage of the place...</p>
                </div>
            </div>

            <div className="flip">
                <div className="front" style={{ backgroundImage: "url(https://rooftopapp.com/wp-content/uploads/2023/04/1-4.png)" }}>
                {/* <h1 className="text-shadow">Rashtrapati Bhavan MuSeum</h1> */}
                </div>
                <div className="back">
                <h2>Rashtrapati Bhavan MuSeum</h2>
                <p>This place has quite a bit of artifacts and historical evidences about the Rashtrapati Bhavan which made it an interesting visit. Worth visiting. This review is the subjective opinion of a Tripadvisor member and not of Tripadvisor LLC.</p>
                </div>
            </div>
        </div>

            <br />
            <br />

        <div className="vertical">
            {/* Vertical */}
            {/* <h4>Vertical Flip</h4> */}
            <div className="flip flip-vertical">
                <div className="front" style={{ backgroundImage: "url(https://www.solitarytraveller.com/wp-content/uploads/2020/12/indian_museum_banner.jpg)" }}>
                {/* <h1 className="text-shadow">City Palace MuSeum.</h1> */}
                </div>
                <div className="back">
                <h2>City Palace MuSeum.</h2>
                <p>ABODE OF THE ROYALS. Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruling royal family which lives in a private section of the palace..</p>
                </div>
            </div>

            <div className="flip flip-vertical">
                <div className="front" style={{ backgroundImage: "url(https://assets.telegraphindia.com/telegraph/05metmuseum_170910.jpg)" }}>
                {/* <h1 className="text-shadow">Heritage MuSeum</h1> */}
                </div>
                <div className="back">
                <h2>Heritage MuSeum</h2>
                <p>AHeritage Museum is a museum facility primarily dedicated to the presentation of historical and cultural information about a place and its people. The museum serves as a world of discovery, and uses exciting concepts to explore the history, architecture, art, culture and heritage of the place.</p>
                </div>
            </div>

            <div className="flip flip-vertical">
                <div className="front" style={{ backgroundImage: "url(https://thumbs.dreamstime.com/b/antique-historical…um-kolkata-india-antique-historical-143620772.jpg)" }}>
                {/* <h1 className="text-shadow">Antique objects place</h1> */}
                </div>
                <div className="back">
                <h2>Antique objects place</h2>
                <p>A place where old items are kept is called a Museum. Museum in Delhi is known as the National Museum of India and is one of the largest museums in India. It was established in 1949 and holds a variety of articles ranging from pre-historic to modern work of art..</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Body;
