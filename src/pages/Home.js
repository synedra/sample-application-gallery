import React from 'react'
import Card from '../components/Card'

const Home = (props) => {
  //console.log("HOME:" + JSON.stringify(props.apps))
  return (
    <>
        {props.apps && (
          <div className='col-9'>
      
          <div className="row row-cols-2">
          {props.apps.map((application, index) => (
            <Card
            key={index}
            application={application}
            onClick={props.onClick}
            filteredTag={props.filteredTag}
            filters={props.filters}
            {...props} 
          />
          ))}
        </div>
        </div>
    )}
    </>
  )
}

export default Home