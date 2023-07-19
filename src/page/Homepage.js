import React from 'react';
import Artefact from '../components/Artefact';

const Homepage = ({ vaData, moreData, category, classification }) => {
  return (
    <div className='homepage-container'>
      {vaData && (
        <Artefact
          vaData={vaData}
          moreData={moreData}
          category={category}
          classification={classification}
        />
      )}
    </div>
  );
};

export default Homepage;
