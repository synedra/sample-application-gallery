const LeftBar = (props) => {
  return (
    <>
    <div>
      <h3>Filters</h3>
    </div>
      {props.tagset && (
        <div >
            {
            props.tagset.map(
              (tag, index) => 
              <button key={index} className={props.filteredTag(tag.name) ? 'btn btn-primary' : 'btn btn-secondary'}
              onClick=
              {(e) => props.onClick(tag.name, e)}
              >{tag.name}</button>
              
    )}
          </div>
      )}
      </>
  )
          }

           
      
          

export default LeftBar
