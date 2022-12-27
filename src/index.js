import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route , Switch} from 'react-router-dom'
import Home from './pages/Home'
import Workshops from './pages/Workshops'
import Header from './components/Header'
import StarterApps from './pages/StarterApps'
import LeftBar from './components/LeftBar'
import "core-js/stable"
import "regenerator-runtime/runtime"
import './App.css'
import axios from 'axios'


const App = () => {
  const [tagset, setTags] = useState(null)
  const [filters, setFilters] = useState([]);
  const [starters, setStarters] = useState(null)
  const [workshops, setWorkshops] = useState(null)
  const [apps, setApps] = useState(null)

  const fetchHomeApps = async (filterlist) => {
    const results = await axios.get('/.netlify/functions/getCategory?category=apps&filters=' + filterlist)
    setApps(results.data)
  }

  const fetchWorkshops = async (filterlist) => {
    const results = await axios.get('/.netlify/functions/getCategory?category=workshop&filters=' + filterlist)
    setWorkshops(results.data)
  }

  const fetchStarters = async (filterlist) => {
    const results = await axios.get('/.netlify/functions/getCategory?category=starter&filters=' + filterlist)
    setStarters(results.data)
  }

  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/getTags')
    setTags(Object.values(results.data))
  }

  useEffect(() => {
    let filterlist = filters.join(',')
    fetchWorkshops(filterlist)
    fetchStarters(filterlist)
    fetchHomeApps(filterlist)
    fetchData()
  }, [filters])

  function filteredTag(tagname) {
    //console.log(filters.indexOf(tag.name))
    //console.log(tag.name)
    return (filters.indexOf(tagname) !== -1)
  }

  const handleFilters = (tagname, e) => {
    e.preventDefault();
    console.log("TAGNAME " + tagname)

    if (filters) {
      if(filteredTag(tagname)){
        setFilters(filters.filter(item => item !== tagname))        
      } else {
       // console.log("Adding filter for" + tag.name)
        setFilters( arr => [...arr, tagname]);
      }
     //console.log(filters)
    }
  }
   
  
  
  return (
    <>
    <div className="container">
    <HashRouter>
      <Header />
      <div className="row">
        <div className='col-3'>
      <LeftBar filters={filters} onClick={handleFilters} tagset={tagset} filteredTag={filteredTag}/>
      </div>
      <div className='col-9'>
         <Switch>
            <Route path= "/workshops" render={(props) => <Workshops apps={workshops} filters={filters} onClick={handleFilters} filteredTag={filteredTag} {...props}/> }/>
            <Route path= "/starters" render={(props) => <StarterApps apps={starters} filters={filters} onClick={handleFilters} filteredTag={filteredTag} {...props} /> }/>
            <Route path= "/" render={(props) => <Home apps={apps} filters={filters} onClick={handleFilters} filteredTag={filteredTag} {...props} /> }/>
          </Switch>
          </div>
          </div>
     </HashRouter>
     </div>
     
  </>
)}
export default App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)