import React from 'react'
import './GettingStarted.css'

const GettingStarted = () => {
  return (
    <div>
      <div className="started-banner">
        <div className="started-box container mx-auto text-center p-16">
          <div>
            <h1 className="started-title pb-9 text-7xl">
              Get <span className="started-span">Started</span>
            </h1>
            <p className="started-body px-52 text-center text-2xl mb-8">
              Whether you’re a user, an engineer working for a solution
              provider, or an independent developer with a personal interest in
              open networking, there’s no better way to help drive forward the
              field of networking than to join the OpenDaylight developer
              community.
            </p>
          </div>
          <div className="buttons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="download-button mr-10 py-2.5 px-6 text-base"
              href="https://docs.opendaylight.org/en/stable-chlorine/downloads.html"
            >
              Download
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="download-button py-2.5 px-12 text-base"
              href="https://docs.opendaylight.org/en/stable-chlorine/getting-started-guide/index.html"
            >
              Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GettingStarted
