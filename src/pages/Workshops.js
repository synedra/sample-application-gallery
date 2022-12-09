import React, { useState, useEffect } from 'react'
import FollowersColumn from '../components/FollowersColumn'
import Card from '../components/Card'
import MiniCard from '../components/MiniCard'
import axios from 'axios'

const Home = () => {
  const [apps, setApps] = useState(null)
  let descendingApps
  //fetch all the applications to your feed
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/getWorkshops')
    setApps(results.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (apps) {
    descendingApps = apps.sort((a, b) => a.id < b.id ? 1 : -1)
  }
  return (
    <>
    {descendingApps && (
      <div className='container'>
        <div class="row row-cols-2">
          {descendingApps.map((application, index) => (
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

export default Home