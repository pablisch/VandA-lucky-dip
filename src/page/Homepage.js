import React from 'react'
import Artifact from '../components/Artifact'

const Homepage = ({vaData, category, classification}) => {
  return (
    <div>
        {vaData && <Artifact vaData={vaData} category={category} classification={classification} />}
    </div>
  )
}

export default Homepage
