import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LeftBar = () => {
  const [tagset, setTags] = useState(null)
  let filters = [];
  
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/getTags')
    setTags(Object.values(results.data))
  }

  function filteredTag(tag) {
    console.log(filters.indexOf(tag.name))
    console.log(tag.name)
    return (filters.indexOf(tag.name) !== -1)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(JSON.stringify(tagset), null, 4)
  const classText = 'btn btn-secondary'

  function onClick (tag, e) {
    e.preventDefault();
    console.log("TAGNAME " + tag.name)
    console.log(filters)
    //let tagindex = -1;
    if (filters) {
      if(filteredTag(tag)){
        console.log("fitteredTag: " + filteredTag(tag));
        console.log("Deleting filter for" + tag.name)
         //filters[filters.indexOf(tag.name)]
         filters.splice(filters.indexOf(tag.name),1)
        // Change the button class to de-highlight
        classText = 'btn btn-secondary'
      } else {
        console.log("Adding filter for" + tag.name)
        filters.push(tag.name)
        classText = 'btn btn-primary'
      // Change the button class to highlight
      }
      console.log(filters)
    }
  }
   
  

  return (
    <>
    <div>
      <h3>Filters</h3>
    </div>
      {tagset && (
        <div >
            {
            tagset.map(
              (tag, index) => 
              <button key={index} className={tag.name}
              onClick=
              {(e) => onClick(tag, e)}
              >{tag.name}</button>
            
              
    )}
          </div>
      )}
      </>
  )
          }

           
      
          

export default LeftBar
