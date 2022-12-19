import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import LeftBar from '../components/LeftBar'
import axios from 'axios'

const StarterApps = () => {
  const [apps, setApps] = useState(null)
  
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/getCategory?category=starters')
    setApps(Object.values(results.data[1]))
  }

  useEffect(() => {
    fetchData()
  }, [])

  
  return (
    <>
    <div className="container">
      <div className="row">
        <div className='col-3'>
        <LeftBar />
      </div>
    {apps && (
      <div className='container'>
        <div className="row row-cols-2">
          {apps.map((application, index) => (
            <Card
              key={index}
              application={application}
            />
          ))}
        </div>
      </div>
    )}
    </div>
    </div>
    </>
  )
}

export default StarterApps