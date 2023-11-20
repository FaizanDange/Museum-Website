import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

const Card = ({ exhibit }) => {
  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  return (
    <>
        <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={exhibit.imageUrl} style={imgStyle} />
        <CCardBody>
            <CCardTitle></CCardTitle>
            <CCardText></CCardText>
            <CButton href="#">Go somewhere</CButton>
        </CCardBody>
        </CCard>

        


    </>
  );
};

export default Card;
