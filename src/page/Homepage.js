import React from 'react'
import Artifact from '../components/Artifact'

const Homepage = ({vaData, moreData, category, classification}) => {
  return (
    <div>
        {vaData && <Artifact vaData={vaData} moreData={moreData} category={category} classification={classification} />}
    </div>
  )
}

export default Homepage
