import React from 'react'

const Tag = ({ tags }) => {
    {tags.map((tag, index) => {
        if(tag){
            return <span key={index} className="card-gallery__tag text-default">{tag}</span>
        } else {
            return null
        }
    })}
}


export default Tag