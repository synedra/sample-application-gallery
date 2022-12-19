import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import LeftBar from '../components/LeftBar'
import axios from 'axios'

const Home = () => {
  const [apps, setApps] = useState(null)
  
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/getCategory?category=apps')
    setApps(results.data)
    
  }

  useEffect(() => {
    fetchData()
  }, [])


  console.log("SETAPPS IS" + JSON.stringify(apps))

  return (
    <>
    <div className="container">
      <div className="row">
        <div className='col-3'>
        <LeftBar />
      </div>
        {apps && (
          <div className='col-9'>
      
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

export default Home