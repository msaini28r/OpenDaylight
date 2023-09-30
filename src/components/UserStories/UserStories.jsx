import React from 'react'
import odl_usecase from '../../images/odl_usecase.png'
import './UserStories.css'

const UserStories = () => {
  return (
    <div className="mx-auto home flex content-center gap-4 py-20 mb-36 px-48 relative">
      <div className="home-text pr-8 align-middle">
        <h1 className="home-title text-8xl capitalize mb-2">
          Utilize usecases <span className="block">that grow your</span>{' '}
          business.
        </h1>
        <p className="home-text font-normal text-2xl text-justify py-6 pr-4 w-10/12">
          OpenDaylight was designed to be a broad, general-purpose platform to
          support a wide range of use cases–including ones that haven’t been
          invented yet. ODL delivers the benefits of SDN and NFV to carriers,
          enterprises, research institutions and businesses.
        </p>
      </div>
      <div className="odl-image">
        <img
          className="odl-logo home-text"
          src={odl_usecase}
          alt="ODL Dark Logo"
        />
      </div>
    </div>
  )
}

export default UserStories
