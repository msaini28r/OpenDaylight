import React, { useState } from 'react'
import './Homepage.css'
import map_light from '../../images/map_light.png'
import map_dark from '../../images/map_dark.png'
import release from '../../images/release.png'
import commits from '../../images/commits.png'
import committers from '../../images/committers.png'
import yourkit from '../../images/yourkit.png'
import icon_1 from '../../images/Icon_1.png'
import icon_2 from '../../images/Icon_2.png'
import icon_3 from '../../images/Icon_3.png'
import icon_4 from '../../images/Icon_4.png'
import icon_5 from '../../images/Icon_5.png'
import icon_6 from '../../images/Icon_6.png'

const Homepage = ({ theme }) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Submitted email: ${email}`)
  }

  const handleChange = (event) => {
    setEmail(event.target.value)
  }
  return (
    <div className="md:px-12 lg:px-0">
      {/* home-section */}
      <div className="mx-auto home flex content-center gap-14 pt-16 xl:pb-44 xxl:pb-36 xl:mb-40 xxl:mb-44 xl:px-14 xxl:px-48 relative">
        <div className="home-text  pt-8 align-middle">
          <h1 className="home-title xl:text-6xl xxl:text-7xl uppercase">
            Automating <span>networks of any</span> size & scale.
          </h1>
          <p className="home-text font-normal xl:text-xl xxl:text-3xl text-justify py-6 pr-4">
            The OpenDaylight project is an open source platform for Software
            Defined Networking (SDN) that uses open protocols to provide
            centralized, programmatic control and network device monitoring.
          </p>
          <button
            className="learn-button rounded-full"
            href="https://www.opendaylight.org/"
          >
            Learn More
          </button>
        </div>
        <div className="img-box mx-auto">
          {theme === 'dark-theme' ? (
            <img className="map" src={map_dark} alt="ODL Dark Logo" />
          ) : (
            <img className="map" src={map_light} alt="ODL Light Logo" />
          )}
        </div>
      </div>
      <div className="container mx-auto">
        {/* stats-box */}
        <div className="mx-auto stats justify-around flex py-16 px-5 rounded-xl absolute">
          <div className="stats-box ">
            <img className="stats-icon" src={release} alt="" srcset="" />
            <h3 className="stats-text xl:text-xl xxl:text-2xl">
              Release: 18 Argon
            </h3>
          </div>
          <div className="stats-box">
            <img className="stats-icon" src={commits} alt="" srcset="" />
            <h3 className="stats-text xl:text-xl xxl:text-2xl">
              Total Commits: 2.6K+
            </h3>
          </div>
          <div className="stats-box">
            <img className="stats-icon" src={committers} alt="" srcset="" />
            <h3 className="stats-text xl:text-xl xxl:text-2xl">
              Committers: 45
            </h3>
          </div>
        </div>
        {/* why opendaylight/functionality section */}
        <div className="function text-justify xl:my-4 xxl:my-12">
          <h2 className="function-text ">
            <center className="my-28">Why Opendaylight?</center>
          </h2>
          <div className="grid grid-rows-2 ">
            <div className="functionality-row grid md:grid-cols-2 lg:grid-cols-3 xl:gap-14 xxl:gap-16 mb-16">
              <div className="flexibility">
                <img src={icon_1} alt="" className="mb-5" />
                <h3>1. Flexibilty</h3>
                <p className="functionality-body xl:text-sm xxl:text-base">
                  OpenDaylight offers a flexible and modular architecture,
                  allowing users to customize its capabilities to suit their
                  specific networking needs, making it a cost-effective choice
                  for businessess.
                </p>
              </div>
              <div className="Open Source">
                <img src={icon_2} alt="" className="mb-5" />
                <h3>2. Open Source</h3>
                <p className="functionality-body xl:text-sm xxl:text-base">
                  Being an open-source platform, OpenDaylight fosters
                  collaboration and innovation among a diverse community of
                  developers, resulting in frequent updates, bug fixes, and new
                  features.
                </p>
              </div>
              <div className="Vendor Neutrality">
                <img src={icon_3} alt="" className="mb-5" />
                <h3>3. Vendor Neutrality</h3>
                <p className="functionality-body xl:text-sm xxl:text-base">
                  OpenDaylight is vendor-agnostic, supporting diverse networking
                  devices and technologies, enabling users to avoid vendor
                  lock-in and choose optimal solutions for their network
                  environment.
                </p>
              </div>
            </div>
            <div className="functionality-row grid md:grid-cols-2 lg:grid-cols-3 gap-16">
              <div className=" Comprehensive Feature">
                <img src={icon_4} alt="" className="mb-5" />
                <h3>4. Comprehensive Feature</h3>
                <p className="functionality-body xl:text-sm xxl:text-base">
                  OpenDaylight provides a rich set of features, including
                  network virtualization, SDN, network automation, traffic
                  engineering, and more, enabling users to build advanced
                  networking solutions.
                </p>
              </div>
              <div className="Scalability">
                <img src={icon_5} alt="" className="mb-5" />
                <h3>5. Scalability</h3>
                <p className="functionality-body xl:text-sm xxl:text-base">
                  OpenDaylight is engineered for seamless scalability, catering
                  to networks spanning diverse sizes and complexities – from
                  modest enterprise setups to extensive service provider
                  infrastructures.
                </p>
              </div>
              <div className="Community Support">
                <img src={icon_6} alt="" className="mb-5" />
                <h3>6. Community Support</h3>
                <p className="functionality-body xl:text-sm xxl:text-base">
                  OpenDaylight has a vibrant and active community that provides
                  support, resources, and collaboration opportunities to users.
                  This community-driven approach ensures that users can get
                  assistance easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Email Form*/}
      <div className="email py-16">
        <div className="container mx-auto  grid grid-rows-1 grid-cols-2 email-box text-center ">
          <div
            className="email-text flex flex-col pl-28 items-start justify-center"
            style={{ borderRadius: 65 }}
          >
            <h2 className="content">Subscribe Newsletter</h2>
            <p className="content">
              Follow OpenDaylight News in the Networking Newsletter
            </p>
          </div>
          <div className="email-submit flex items-center align-bottom py-24 pl-8">
            <form className="input-box" onSubmit={handleSubmit}>
              <label className="input-content">
                <input
                  className="mx-3 input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  style={{ width: 250 }}
                />
              </label>
              <button className="submit-button ml-3" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="community flex flex-col justify-center items-center py-12 align-bottom">
        <h3 className="community-text bg-color mt-10">
          OpenDaylight would like to thank the following project for supporting
          the community
        </h3>
        <img
          className="community-image"
          style={{ width: 180 }}
          src={yourkit}
          alt=""
          srcset=""
        />
      </div>
    </div>
  )
}

export default Homepage
