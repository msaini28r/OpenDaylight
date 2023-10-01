import React from 'react'
import odl_usecase from '../../images/odl_usecase.png'
import './UserStories.css'

const UserStories = ({ theme }) => {
  return (
    <div className="user-stories mx-auto user flex content-center gap-2 pt-28 pb-36 mb-36 px-48 relative">
      <div className="user-text pr-8 align-middle">
        <h1 className="user-title text-8xl capitalize mb-2">
          Utilize usecases <span className="block">that grow your</span>{' '}
          business.
        </h1>
        <p className="user-text font-normal text-2xl text-justify py-6 pr-4 w-10/12">
          OpenDaylight was designed to be a broad, general-purpose platform to
          support a wide range of use cases–including ones that haven’t been
          invented yet. ODL delivers the benefits of SDN and NFV to carriers,
          enterprises, research institutions and businesses.
        </p>
      </div>
      <div className="odl-image">
        <img className="odl-logo" src={odl_usecase} alt="ODL Dark Logo" />
      </div>
    </div>
  )
}

export default UserStories
