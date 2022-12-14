import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="row">
        <div className="col-2">
          <Link to='/'>
            <div className="logo"></div>
          </Link>
      </div>
      
      <div className='col-10'>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/workshops">Workshops</Link>
                  </li>
                  <li>
                      <Link to="/apps">Sample Applications</Link>
                  </li>
                  <li>
                      <Link to="/starters">Starter Applications</Link>
                  </li>
              </ul>
          </nav>
      </div>
    </div>
      </div>
    </>
  )  
}
  
export default Header