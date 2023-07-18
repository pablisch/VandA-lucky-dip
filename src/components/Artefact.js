import React from 'react';

const Artefact = ({ vaData, moreData, category, classification }) => {
  let location;
  let moreDetails;

  if (vaData[0]._currentLocation.onDisplay) {
    location = `On display at ${vaData[0]._currentLocation.displayName}`;
  } else {
    location = 'Not on currently on display';
  }

  if (
    moreData &&
    moreData[0].sequences &&
    moreData[0].sequences[0].canvases.length > 1 &&
    moreData[0].metadata
  ) {
    // console.log('image data is here ', moreData[0].sequences[0].canvases)
    console.log('image data is here ', moreData[0].metadata);
    console.log('number of images ', moreData[0].sequences[0].canvases.length);
    if (moreData[0].sequences[0].canvases[1].images) {
      moreDetails = (
        <>
          <div className='more-details-text'>
            <p>Artefact title: </p>
            <p className='more-details-value'>
              {moreData[0].metadata[0].value}
            </p>
            <p>Object type: </p>
            <p className='more-details-value'>
              {moreData[0].metadata[1].value}
            </p>
            <p>Brief description: </p>
            <p className='more-details-value'>
              {moreData[0].metadata[2].value}
            </p>
            <p>Materials and Teachniques: </p>
            <p className='more-details-value'>
              {moreData[0].metadata[3].value}
            </p>
            <p>Place: </p>
            <p className='more-details-value'>
              {moreData[0].metadata[4].value}
            </p>
          </div>
          <div className='more-details-image'>
            <img
              className='more-images artefact-image'
              src={
                moreData[0].sequences[0].canvases[1].images[0].resource['@id']
              }
              alt='artefact_image'
            />
          </div>
        </>
      );
    }
  } else {
    moreDetails = undefined;
    console.log('no more details');
  }

  return (
    <>
      <div className='artefact-container'>
        <div className='primary-image'>
          <img
            className='artefact-image'
            src={vaData[0]._images._primary_thumbnail.replace(
              '!100,100',
              '!500,500'
            )}
            alt='artefact_image'
            aria-label='Artefact Image'
          />
        </div>
        <div className='primary-text'>
          <p aria-label='Artefact Title' className='artefact-title'>
            {vaData[0]._primaryTitle || 'Title: NA'}
          </p>
          <p aria-label='Artefact Classification'>
            Classification:{' '}
            {classification[0].toUpperCase() + classification.slice(1)}
          </p>
          <p aria-label='Artefact Maker'>
            Maker:{' '}
            {category === 'neal,gareth'
              ? 'Gareth Neal'
              : vaData[0]._primaryMaker.name || 'NA'}
          </p>
          <p aria-label='Artefact Place of Manufacture'>
            Place: {vaData[0]._primaryPlace || 'NA'}
          </p>
          <p aria-label='Artefact Current Location'>{location}</p>
        </div>
      </div>
      {moreDetails ? (
        <>
          <h3 className='more-declaration-h3'>
            More information on this artefact shown below
          </h3>
          {moreData[0].sequences[0].canvases.length === 3 && (
            <p className='more-declaration-p'>
              The V&A holds one additional photo record of this artefact.
            </p>
          )}
          {moreData[0].sequences[0].canvases.length > 3 && (
            <p className='more-declaration-p'>
              The V&A holds an additional{' '}
              {moreData[0].sequences[0].canvases.length - 2} photo records of
              this artefact.
            </p>
          )}
        </>
      ) : (
        <p className='more-decalration'>
          No aditional details are avaialble for this artefact.
        </p>
      )}
      <div className='more-details-container'>{moreDetails}</div>
    </>
  );
};

export default Artefact;
