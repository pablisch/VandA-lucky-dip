import React from 'react';

const Artifact = ({ vaData, moreData, category, classification }) => {

  let location;
  let moreDetails;

  if (vaData[0]._currentLocation.onDisplay) {
    location = `On display at ${vaData[0]._currentLocation.displayName}`;
  } else {
    location = 'Not on currently on display';
  }

  if (moreData && moreData[0].sequences && moreData[0].sequences[0].canvases) {
    console.log('image data is here ', moreData[0].sequences[0].canvases)
    if (moreData[0].sequences[0].canvases[1].images) {

      moreDetails = (
        <>
          <h3>More details:</h3>
          <p>{moreData[0].description}</p>
          <img className='more-images' src={moreData[0].sequences[0].canvases[1].images[0].resource['@id']} alt="artifact_image" />
        </>
      )
    }
  } else {
    moreDetails = undefined;
  }



  return (
    <div>
      
      <img className='artifact-image' src={vaData[0]._images._primary_thumbnail.replace('!100,100', '!500,500')} alt="artifact_image" aria-label="Artifact Image" />
      <p aria-label="Artifact Title" className='artifact-title'>Title: {vaData[0]._primaryTitle || 'NA'}</p>
      <p aria-label="Artifact Classification">Classification: {classification[0].toUpperCase() + classification.slice(1)}</p>
      <p aria-label="Artifact Maker">Maker: {category === 'neal,gareth' ? 'Gareth Neal' : vaData[0]._primaryMaker.name || 'NA'}</p>
      <p aria-label="Artifact Place of Manufacture">Place: {vaData[0]._primaryPlace || 'NA'}</p>
      <p aria-label="Artifact Current Location">{location}</p>
      {moreDetails}

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
