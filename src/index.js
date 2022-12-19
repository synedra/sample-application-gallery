import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route , Switch} from 'react-router-dom'
import Home from './pages/Home'
import Workshops from './pages/Workshops'
import Header from './components/Header'
import StarterApps from './pages/StarterApps'
import SampleApps from './pages/SampleApps'
import LeftBar from './components/LeftBar'
import "core-js/stable"
import "regenerator-runtime/runtime"
import './App.css'

const App = () => {
  
  return (
    <>
    <div className="container">
    <HashRouter>
      <Header />
         <Switch>
            <Route path= "/workshops" component={Workshops}/>
            <Route path= "/starters" component={StarterApps}/>
            <Route path= "/sampleapps" component={SampleApps}/>
            <Route path= "/" component={Home}/>
          </Switch>
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