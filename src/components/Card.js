import React from 'react'

const Card = ({ application, onClick, filteredTag }) => {
  let stacklist = null
  if (application.stack && application.stack) {
     stacklist = "Stack: " + application.stack.join(", ");
  }
  console.log(JSON.stringify(application))

  return (
    <div className="col">
    <div className="card card-gallery shadow shadow--dark h-100">
      <div className="break" />
      <div className="card-body">
        <div className="row mb-1">
        {application.type==="workshop" && application?.urls?.badge && <img className="heroImage card-gallery--image" alt={application?.name} src={application?.urls?.badge} width="150"/>}
          {application?.heroimage && <img className="heroImage card-gallery--image" alt={application.name} src={application.heroimage}/>}
          <h4><a className="card-gallery--title"  href={application?.urls?.github}>{application.name}</a></h4>
          <span className="extra-small text-night-300"> 
            <i className="icon icon--clock icon--night-300 card-gallery__header-icon"></i>
            {application.duration}
            <i className="icon icon--user icon--night-300 card-gallery__header-icon"></i>
            {application.skilllevel}
            </span>
            <>
              {application?.tags?.map((tag, index) => (
                <button key={index} className={filteredTag(tag) ? 'btn btn-primary' : 'btn btn-secondary'}
                onClick=
                {(e) => onClick(tag, e)}
                >{tag}</button>
            ))}
              {stacklist && <span> {stacklist}</span>}
            </>
            {application.language && <h4><span className="card-gallery--title">Language: {application.language?.toString()}</span></h4>}
            {application.description}
            </div>
            <div className="break" />
        </div>
    </div>
    </div>
  )
}

export default Card