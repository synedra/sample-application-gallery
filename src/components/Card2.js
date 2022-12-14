import React from 'react'

const Card = ({ application }) => {

  return (
    <div className="card card-gallery shadow shadow--dark h-100">
      <div className="break" />
      <div className="card-body">
        <div className="row mb-1">
          <img className="heroImage card-gallery--image" alt={application.name} src={application.heroimage}/>
          <h4><a className="card-gallery--title"  href={application?.urls?.github[0]}>{application.name}</a></h4>
        </div>
    </div>
    </div>
  )
}

export default Card