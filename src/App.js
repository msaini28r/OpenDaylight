import './App.css'
import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' // Import BrowserRouter, Route, and Routes
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'
import About from './components/About/About'
import Governance from './components/Governance/Governance'
import UserStories from './components/UserStories/UserStories'
import Solutions from './components/Solutions/Solutions'
import GetStarted from './components/GetStarted/GetStarted'
import PlatformOverview from './components/PlatformOverview/PlatformOverview'
import AutomatedService from './components/AutomatedService/AutomatedService'
import CloudNvf from './components/CloudNvf/CloudNvf'
import NetworkResource from './components/NetworkResource/NetworkResource'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [theme, setTheme] = useState('dark-theme')
  const [rotation, setRotation] = useState(0)

  const toggleTheme = () => {
    setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme')
    setRotation(rotation + 90)
  }

  return (
    <div className="App">
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} rotation={rotation} />
        <Routes>
          <Route
            path="/opendaylight/homepage"
            element={<Homepage theme={theme} />}
          />
          <Route path="/opendaylight/about" element={<About theme={theme} />} />
          <Route
            path="/opendaylight/governance"
            element={<Governance theme={theme} />}
          />
          <Route
            path="/opendaylight/user-stories"
            element={<UserStories theme={theme} />}
          />
          <Route
            path="/opendaylight/solutions"
            element={<Solutions theme={theme} />}
          />
          <Route
            path="/opendaylight/get-started"
            element={<GetStarted theme={theme} />}
          />
          <Route
            path="/opendaylight/platform-overview"
            element={<PlatformOverview theme={theme} />}
          />
          <Route
            path="/opendaylight/automated-service-delivery"
            element={<AutomatedService theme={theme} />}
          />
          <Route
            path="/opendaylight/cloud-nvf"
            element={<CloudNvf theme={theme} />}
          />
          <Route
            path="/opendaylight/network-resource-optimization"
            element={<NetworkResource theme={theme} />}
          />
        </Routes>
        <Footer theme={theme} />
      </Router>
    </div>
  )
}

export default App
