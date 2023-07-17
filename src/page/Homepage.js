import React from 'react'
import Artifact from '../components/Artifact'

const Homepage = ({vaData, category}) => {
  return (
    <div>
        {vaData && <Artifact vaData={vaData} category={category} />}
    </div>
  )
}

export default Homepage
