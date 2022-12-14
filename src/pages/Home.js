import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  const [apps, setApps] = useState(null)
  const [tagset, setTags] = useState(null)
  
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/getCategory?category=apps')
    setApps(Object.values(results.data[1]))
  }

  const getTags = async () => {
    const results = await axios.get('/.netlify/functions/getTags')
    setTags(Object.values(results.data))
  }

  useEffect(() => {
    fetchData()
    getTags()
  }, [])

  console.log(JSON.stringify(tagset))

  console.log(JSON.stringify(apps))

  return (
    <>
    {apps && (
        <div className="row row-cols-3">
          <div className='col'></div>
      
          {apps.map((application, index) => (
            <Card
              key={index}
              application={application}
            />
          ))}
        </div>
    )}
    </>
  )
}

export default Home