import React from 'react'
import Artifact from '../components/Artifact'
import Navbar from '../components/Navbar'

const Homepage = ({vaData}) => {
  return (
    <div>
      
        {vaData && <Artifact vaData={vaData} />}
    </div>
  )
}

export default Homepage
