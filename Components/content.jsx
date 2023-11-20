import React from 'react';
import '../styles/content.css';

const Content = () => {
  return (
    <div className='Data'>
      <div className="Header1">
        <ul>
            <li>O</li>
            <li>L</li>
            <li>D</li>
            <li>E</li>
            <li>S</li>
            <li>T</li>
            <li>3</li>
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
            <li>P</li>
            <li>L</li>
            <li>A</li>
            <li>C</li>
            <li>E</li>
        </ul>
      </div>




      <div className='Main'>
        <div className='image'>
          <img src="https://www.wga.hu/art/m/michelan/5archite/late/1campid1.jpg"  />
        </div>
        <div className='ContentContainer'>
          <h1 className='Header'>1. Capitoline Museum</h1>
          <div className='DescriptionContainer'>
            <p className='Description'>
              The Capitoline Museum, or Musei Capitolini, is very probably the world’s oldest museum.
              Located in Rome, just a stone’s throw from the Colosseum, the museum houses a fantastic collection of classical art and archaeology. The history of the museum dates right back to 1471 when Pope Sixtus IV donated a number of important ancient bronzes to the people of Rome. Since then, the museums'
              collection has grown to include many ancient Roman statues, inscriptions, and other artifacts; a collection of medieval and Renaissance art; and collections of jewels, coins, and other items.
              The museums are owned and operated by the municipality of Rome.There are lots of things to see at the Capitoline Museums, so it's a good idea to set aside a full day or at least an afternoon for your visit. The museum is housed throughout two buildings, home to jaw-dropping collections of Ancient Roman statues, medieval and renaissance art, and unique frescos.
            </p>
          </div>
        </div>
      </div>

      {/* for Second image */}
      <div className='Main1'>
        <div className='ContentContainer1'>
          <h1 className='Header1'>2. Royal Armouries</h1>
          <div className='DescriptionContainer1'>
            <p className='Description1'>
            The Royal Armouries is one of the ancient institutions of the Tower of London and was originally 
            engaged in the manufacture of armour for the Kings of England and their armies. 
            The Office of the Armoury grew out of the department known as the King's Privy Wardrobe at the Tower of London in the mid-15th century. 
            Overseen from 1423 by the Master of the King's Armour, and based in the White Tower, the Office was responsible for manufacturing armour and edged weapons for the monarch and his armies; it functioned alongside the Office of Ordnance, which had responsibility for firearms
            The Armoury oversaw storehouses and workshops at Woolwich and Portsmouth, and at various royal palaces (most notably the Greenwich Armoury, which specialized in richly decorated ceremonial armour). In 1545, 
            it is recorded that a visiting foreign dignitary paid to view the Armoury collection at the Tower of London.
            </p>
          </div>
        </div>
        <div className='image1'>
          <img src="https://cdn.britannica.com/72/178972-050-2C6B51E4/keep-White-Tower.jpg"  />
        </div>
      </div>



       {/* for THIRD image */}
       <div className='Main2'>
       <div className='image2'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Ashmolean_Museum_in_July_2014.jpg"  />
        </div>          
        <div className='ContentContainer2'>
          <h1 className='Header2'>3. Ashmolean Museum</h1>
          <div className='DescriptionContainer2'>
            <p className='Description2'>
            The museum opened on 24 May 1683,[5] with naturalist Robert Plot as the first keeper. 
            The building on Broad Street (later known as the Old Ashmolean) is sometimes attributed to Sir Christopher Wren or Thomas Wood.[6] 
            Elias Ashmole had acquired the collection from the gardeners, travellers, and
            collectors John Tradescant the Elder and his son, John Tradescant the Younger.
            It included antique coins, books, engravings, geological specimens, and zoological specimens—one of which was 
            the stuffed body of the last dodo ever seen in Europe; but by 1755 the stuffed dodo was so moth-eaten that it was destroyed, except for its head and one claw.The present building dates from 1841 to 1845. It was designed as the University Galleries by Charles Cockerell[8] 
            in a classical style and stands on Beaumont Street. One wing of the building is occupied by the Taylor Institution.
            
            </p>
          </div>
        </div>
      </div>

    </div>

  

    
  );
};

export default Content;
