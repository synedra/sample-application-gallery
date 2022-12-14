import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route , Switch} from 'react-router-dom'
import Home from './pages/Home'
import Workshops from './pages/Workshops'
import StarterApps from './pages/StarterApps'
import SampleApps from './pages/SampleApps'
import Header from './components/Header'
import LeftBar from './components/LeftBar'
import Nav from './components/Nav'
import "core-js/stable"
import "regenerator-runtime/runtime"
import './App.css'

const App = () => {
  
  return (
    <>
    
    <HashRouter>
      <div className='container'>
        <div className="row">
          <div className="col-3">
            <Header /> 
          </div>
          <div className='col-9'>
            <Nav />
          </div>
        </div>
        <div className="row">
          <div className='col-2'>
            <LeftBar />
          </div>
          <div className='col-10'>
            <Home />
          </div>
        </div>
      
          <Switch>
            <Route path= "/workshops" component={Workshops}/>
            <Route path= "/starters" component={StarterApps}/>
            <Route path= "/sampleapps" component={SampleApps}/>
            <Route path= "/" component={Home}/>
          </Switch>
        </div>
    </HashRouter>

  </>
  )
}

export default App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)