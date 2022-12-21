import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LeftBar = () => {
  const [tagset, setTags] = useState(null)

  
  const [filters, setFilters] = useState([]);

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
         //let name = filters.indexOf(tag.name);
         //setFilters(filters.splice(name,1))        
         setFilters(filters.filter(item => item !== tag.name))        
         // Change the button class to de-highlight
      } else {
        console.log("Adding filter for" + tag.name)
        //filters.push(tag.name)
        setFilters( arr => [...arr, tag.name]);
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
              <button key={index} className={filteredTag(tag) ? 'btn btn-primary' : 'btn btn-secondary'}
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
