import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LeftBar = () => {
  const [tagset, setTags] = useState(null)
  const [filters, setFilters] = useState(null)
  
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/getTags')
    setTags(Object.values(results.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onClick = (tagname) => {
    let tagindex = -1
    if ((filters && filters.length) > 0) {
      tagindex = filters.indexOf(tagname)
    }
     if (tagindex !== -1) {
      setFilters( arr => [...arr, tagname]);
    } else {
      if (filters) {
        delete filters[tagindex]
      }
    }
  };
   
  return (
    <>
      {tagset && (
        <div className="btn-group-vertical tags">
            {tagset.map((tag, index) => (
                <button key={index} className="hold" onClick={onClick(tag.name)}>{tag.name}</button>
            ))}
          </div>
      )})
      </>
  )}
      
          

export default LeftBar
