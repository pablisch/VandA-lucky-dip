import React from 'react';

const Artifact = ({ vaData }) => {

  let location;

  if (vaData[0]._currentLocation.onDisplay) {
    location = `On display at ${vaData[0]._currentLocation.displayName}`;
  } else {
    location = 'Not on currently on display';
  }


  return (
    <div>
      
      <img className='artifact-image' src={vaData[0]._images._primary_thumbnail.replace('!100,100', '!500,500')} alt="artifact_image" />
      <p className='artifact-title'>Title: {vaData[0]._primaryTitle || 'NA'}</p>
      <p>Maker: {vaData[0]._primaryMaker.name || 'NA'}</p>
      <p>Place: {vaData[0]._primaryPlace || 'NA'}</p>
      <p>{location}</p>

      {/* {vaData.map((artifact, index) => (
        <div key={index}>
          <p>{artifact._primaryTitle}</p>
          <img className='artifact-image' src={artifact._images._primary_thumbnail.replace('!100,100', '!500,500')} alt="artifact_image" />
        </div>
      ))} */}
    </div>
  );
};

export default Artifact;
