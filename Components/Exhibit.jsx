import React from 'react';

const Exhibit = ({ exhibit }) => {
  const imgStyle = {
    width: '100%', // Set the desired width
    height: '200px', // Set the desired height
    objectFit: 'cover', // Adjust object-fit property as needed
  };
  
  return (
    <div className="exhibit">
      <h3>{exhibit.name}</h3>
      <p>{exhibit.description}</p>
      <img src={exhibit.imageUrl} alt={exhibit.name} style={imgStyle} />
    </div>
  );
};

export default Exhibit;
