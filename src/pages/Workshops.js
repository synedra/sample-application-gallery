import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Workshops = () => {
  const [apps, setApps] = useState(null)
  
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/getCategory?category=workshop')
    setApps(Object.values(results.data[2]))
  }

  useEffect(() => {
    fetchData()
  }, [])

  
  return (
    <>
    {apps && (
      <div className='container'>
        <div className="row row-cols-3">
          {apps.map((application, index) => (
            <Card
              key={index}
              application={application}
            />
          ))}
        </div>
      </div>
    )}
    </>
  )
}

export default Workshops