import React from 'react';

const Artifact = ({ vaData }) => {
  return (
    <div>
      {vaData.map((artifact, index) => (
        <div key={index}>
          <p>{artifact._primaryTitle}</p>
          <img className='artifact-image' src={artifact._images._primary_thumbnail} alt="artifact_image" />
        </div>
      ))}
    </div>
  );
};

export default Artifact;
