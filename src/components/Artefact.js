import React from 'react';

const Artefact = ({ vaData, moreData, category, classification }) => {
  let location;
  let moreDetailsAndImages;
  let moreDetailsInfo;
  let primaryImageSrc;
  let moreInformationDeclaration;
  let moreImagesDeclaration;
  const additionalImagesSrc = [];

  if (vaData[0]._images._iiif_presentation_url) {
    // VISIBILITY (iiif url)
    console.log(vaData[0]._images._iiif_presentation_url);
  } else {
    console.log('no iiif url');
  }

  if (vaData[0]._currentLocation.onDisplay) {
    // current location
    location = `On display at ${vaData[0]._currentLocation.displayName}`;
  } else {
    location = 'Not on currently on display';
  }

  if (moreData && moreData[0].sequences[0].canvases) {
    // src of Primary Image
    primaryImageSrc =
      moreData[0].sequences[0].canvases[0].images[0].resource['@id'];
  } else {
    primaryImageSrc = vaData[0]._images._primary_thumbnail.replace(
      '!100,100',
      '!500,500'
    );
  }

  if (
    // more details and atleast one image EXIST
    moreData &&
    moreData[0].sequences &&
    moreData[0].sequences[0].canvases.length > 1 &&
    moreData[0].metadata
  ) {
    if (moreData[0].sequences[0].canvases[1].images) {
      // more details AND 2+ images
      moreDetailsInfo = undefined;
      moreDetailsAndImages = (
        <>
          <div className='details-text larger-screens'>
            <p>Artefact title: </p>
            <p className='details-value'>{moreData[0].metadata[0].value}</p>
            <p>Object type: </p>
            <p className='details-value'>{moreData[0].metadata[1].value}</p>
            <p>Brief description: </p>
            <p className='details-value'>{moreData[0].metadata[2].value}</p>
            <p>Materials and Teachniques: </p>
            <p className='details-value'>{moreData[0].metadata[3].value}</p>
            <p>Place: </p>
            <p className='details-value'>{moreData[0].metadata[4].value}</p>
          </div>
          <div className='more-details-image larger-screens'>
            <img
              className='more-images artefact-image'
              src={
                moreData[0].sequences[0].canvases[1].images[0].resource['@id']
              }
              alt='artefact_image'
            />
          </div>

          <div className='more-details-image smaller-screens'>
            <img
              className='more-images artefact-image'
              src={
                moreData[0].sequences[0].canvases[1].images[0].resource['@id']
              }
              alt='artefact_image'
            />
          </div>
          <div className='details-text smaller-screens'>
            <p>
              Artefact title:{' '}
              <span className='text-values'>
                {moreData[0].metadata[0].value}
              </span>
            </p>
            <p>
              Object type:{' '}
              <span className='text-values'>
                {moreData[0].metadata[1].value}
              </span>
            </p>
            <p>
              Brief description:{' '}
              <span className='text-values'>
                {moreData[0].metadata[2].value}
              </span>
            </p>
            <p>
              Materials and Teachniques:{' '}
              <span className='text-values'>
                {moreData[0].metadata[3].value}
              </span>
            </p>
            <p>
              Place:{' '}
              <span className='text-values'>
                {moreData[0].metadata[4].value}
              </span>
            </p>
          </div>
        </>
      );
    }
  } else if (moreData && moreData[0].metadata) {
    // more details BUT SINGLE image
    moreDetailsAndImages = undefined;
    moreDetailsInfo = (
      <>
        <div className='details-text larger-screens'>
          <p>Object type: </p>
          <p className='details-value'>{moreData[0].metadata[1].value}</p>
          <p>Brief description: </p>
          <p className='details-value'>{moreData[0].metadata[2].value}</p>
          <p>Materials and Teachniques: </p>
          <p className='details-value'>{moreData[0].metadata[3].value}</p>
        </div>
        <div className='details-text smaller-screens'>
          <p>
            Object type:{' '}
            <span className='text-values'>{moreData[0].metadata[1].value}</span>
          </p>
          <p>
            Brief description:{' '}
            <span className='text-values'>{moreData[0].metadata[2].value}</span>
          </p>
          <p>
            Materials and Teachniques:{' '}
            <span className='text-values'>{moreData[0].metadata[3].value}</span>
          </p>
        </div>
      </>
    );
  } else {
    // NO more details
    moreDetailsAndImages = undefined;
    moreDetailsInfo = undefined;
  }

  const getAdditionalImagesSrc = () => {
    moreData[0].sequences[0].canvases.map((image, index) => {
      if (index > 1) {
        additionalImagesSrc.push(image.images[0].resource['@id']);
      }
    });
    console.log('additional images src is', additionalImagesSrc)
  };
  
  if (moreDetailsAndImages) {
    moreInformationDeclaration = <h3 className='more-info-declaration'>
      See below for more details and images of this artefact:
    </h3>;
    getAdditionalImagesSrc();
    if (moreData[0].sequences[0].canvases.length === 3) {
      moreImagesDeclaration = <p className='more-images-declaration'> The V&A holds one additional photo record of this artefact.</p>;  
    } else if (moreData[0].sequences[0].canvases.length > 3) {  
      moreImagesDeclaration = <p className='more-images-declaration'> The V&A holds an additional {moreData[0].sequences[0].canvases.length - 2} photo records of this artefact.</p>;
    } else if (moreData[0].sequences[0].canvases.length === 2) {
      moreImagesDeclaration = <p className='more-images-declaration'> The V&A holds no additional photo records of this artefact.</p>;  
    }
  } else {
    moreInformationDeclaration = <p className='more-decalration'>No aditional details or photographs are avaialble for this artefact.</p>;
  }

  return (
    <>
      <div className='artefact-container'>
        <p
          aria-label='Artefact Title'
          className='artefact-title artefact-title-above-image'>
          {vaData[0]._primaryTitle || 'Title: NA'}
        </p>
        <div className='primary-info'>
          <div className='primary-image'>
            <img
              className='artefact-image'
              src={primaryImageSrc}
              alt='artefact_image'
              aria-label='Artefact Image'
            />
          </div>
          <div className='primary-text larger-screens'>
            <p
              aria-label='Artefact Title'
              className='artefact-title artefact-title-with-info'>
              {vaData[0]._primaryTitle || 'Title: NA'}
            </p>
            <p aria-label='Artefact Classification' className='details-text'>
              Classification:{' '}
            </p>
            <p
              aria-label='Artefact Classification'
              className='artefact-info-value'>
              {classification[0].toUpperCase() + classification.slice(1)}
            </p>
            <p aria-label='Artefact Maker'>Maker: </p>
            <p aria-label='Artefact Maker' className='artefact-info-value'>
              {category === 'neal,gareth'
                ? 'Gareth Neal'
                : vaData[0]._primaryMaker.name || 'NA'}
            </p>
            <p
              aria-label='Artefact Place of Manufacture'
              className='details-text'>
              Place:{' '}
            </p>
            <p
              aria-label='Artefact Place of Manufacture'
              className='artefact-info-value'>
              {vaData[0]._primaryPlace || 'NA'}
            </p>
            {moreDetailsInfo && moreDetailsInfo}
            <p aria-label='Artefact Current Location'>{location}</p>
          </div>
          <div className='primary-text smaller-screens'>
            <p aria-label='Artefact Classification' className='details-text'>
              Classification:{' '}
              <span className='text-values'>
                {classification[0].toUpperCase() + classification.slice(1)}
              </span>
            </p>
            <p aria-label='Artefact Maker'>
              Maker:{' '}
              <span className='text-values'>
                {category === 'neal,gareth'
                  ? 'Gareth Neal'
                  : vaData[0]._primaryMaker.name || 'NA'}
              </span>
            </p>
            <p
              aria-label='Artefact Place of Manufacture'
              className='details-text'>
              Place:{' '}
              <span className='text-values'>
                {vaData[0]._primaryPlace || 'NA'}
              </span>
            </p>
            {moreDetailsInfo && moreDetailsInfo}
            <p aria-label='Artefact Current Location' className='location-text'>
              {location}
            </p>
          </div>
        </div>
        {moreInformationDeclaration}
        <div className='more-details-container'>{moreDetailsAndImages}</div>
        {moreImagesDeclaration}
        <div className='additional-images-container'>
          {additionalImagesSrc.map((image, index) => {
            return (
              <div className="additional-images">
                <img key={index} className='additional-image' src={image} alt='artefact_image' />
              </div>
            );
          })}

          </div>
      </div>
    </>
  );
};

export default Artefact;
