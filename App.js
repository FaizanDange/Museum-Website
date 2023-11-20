import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Exhibit from './Components/Exhibit';
import FocusCard from './Components/FocusCard';
import Body from './Components/Body';
import Content from './Components/content';
// import FlipCard from './Components/FlipCard';
// import GlowCard from './Components/GlowCard'




const App = () => {
  const exhibits = [
    {
      name: 'Exhibit 1',
      description: 'This is the first exhibit.',
      imageUrl: 'https://example.com/exhibit1.jpg',
    },
    {
      name: 'Exhibit 2',
      description: 'This is the second exhibit.',
      imageUrl: 'https://example.com/exhibit2.jpg',
    },
    // Add more exhibits as needed
  ];

  return (
    <div>
      <Header />
      <Hero> </Hero>
      <Body></Body>
      <FocusCard></FocusCard>
      <Content></Content>
      
      {/* <GlowCard></GlowCard> */}
      {/* <FlipCard></FlipCard>  */}
      <Footer />
    </div>
  );
};

export default App;
