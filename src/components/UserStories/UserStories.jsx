import React from 'react'
import './UserStories.css'
import odl_usecase from '../../images/odl_usecase.png'
import quote_icon from '../../images/quote_icon.png'
import asd_icon from '../../images/asd_icon.png'
import nro_icon from '../../images/nro_icon.png'
import nfv_icon from '../../images/nfv_icon.png'
import visibility_icon from '../../images/visibility_icon.png'

const UserStories = () => {
  return (
    <div>
      {/* user-stories section */}
      <div className="user-stories mx-auto user flex content-center xl:gap-0 xxl:gap-2 xl:pt-16 xl:pb-24 xxl:pt-28 xxl:pb-36 xl:mb-8 xxl:mb-16 xl:px-14 xxl:px-48 ">
        <div className="user-text pr-8 align-middle">
          <h1 className="user-title xl:text-7xl xxl:text-8xl capitalize mb-2">
            Utilize usecases <span className="block">that grow your</span>{' '}
            business.
          </h1>
          <p className="user-text font-normal xl:text-xl xxl:text-2xl text-justify py-6 pr-4 w-10/12">
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
      {/* success section */}
      <div className="success section my-16">
        <div className="success-background py-32 flex justify-end ">
          <div className="align-middle blue-box relative"></div>
        </div>
        <div className="success-box absolute align-middle py-28 px-14 ">
          <p className="success-text text-5xl font-medium">
            How we can help you succeed!
          </p>
        </div>
        <div className="success-cards ">
          <div className="asd-card px-2 rounded-3xl border shadow-xl xl:w-80 xxl:w-1/5 absolute">
            <div className="flex flex-col items-center rounded-3xl text-center justify-center p-10">
              <img className="mb-5 card-image" src={asd_icon} alt="" />
              <h3 className="mb-5 xl:text-xl xxl:text-2xl">
                Automated Service Delivery
              </h3>
              <p className="mb-5 xl:text-sm xxl:text-base">
                Open source SDN and automation to accelerate service delivery.
              </p>
              <a className="read-more" href="http://">
                Read More
              </a>
            </div>
          </div>
          <div className="nro-card px-2 rounded-3xl border shadow-xl xl:w-80 xxl:w-1/5 absolute">
            <div className="flex flex-col items-center rounded-3xl text-center justify-center p-10">
              <img className="mb-5 card-image" src={nro_icon} alt="" />
              <h3 className="mb-5 xl:text-xl xxl:text-2xl">
                Network Resources Optimization (NRO){' '}
              </h3>
              <p className="mb-5 xl:text-sm xxl:text-base">
                Dynamically optimizing the network based on load and state.
              </p>
              <a className="read-more" href="http://">
                Read More
              </a>
            </div>
          </div>
          <div className="nfv-card px-2 rounded-3xl border shadow-xl xl:w-80 xxl:w-1/5 absolute">
            <div className="flex flex-col items-center rounded-3xl text-center justify-center p-10">
              <img className="mb-5 card-image" src={nfv_icon} alt="" />
              <h3 className="mb-5 xl:text-xl xxl:text-2xl">Cloud and NFV</h3>
              <p className="mb-5 xl:text-sm xxl:text-base">
                Providing on-demand services that may be controlled by the end
                user or service provider environment.
              </p>
              <a className="read-more" href="http://">
                Read More
              </a>
            </div>
          </div>
          <div className="visibility-card px-2 rounded-3xl border shadow-xl xl:w-80 xxl:w-1/5 absolute">
            <div className="flex flex-col items-center rounded-3xl text-center justify-center p-10">
              <img className="mb-5 card-image" src={visibility_icon} alt="" />
              <h3 className="mb-5  xl:text-xl xxl:text-2xl">
                Visibility and Control
              </h3>
              <p className="mb-5 xl:text-sm xxl:text-base">
                Centralized administration of the network and multiple
                controllers. This is sometimes used as a precursor to NRO.
              </p>
              <a className="read-more" href="http://">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial section */}
      <div className="mx-auto testimonials text-center xl:p-10 xxl:p-20">
        <div className="testimonials-title xl:mb-10 xxl:mb-16">
          <h2 className="testimonials-title testimonial-company font-extrabold">
            Our Testimonials
          </h2>
          <h3 className="testimonials-title">
            See What Our Partners Are Saying
          </h3>
        </div>
        <div className="container testimonials-title mx-auto xl:px-16 xxl:px-32 flex flex-row xl:gap-16 xxl:gap-20">
          <div className="verizon xl:px-5 xl:py-7 xxl:px-5 xxl:py-10 border text-justify ">
            <img className="xl:mb-5 xxl:mb-9" src={quote_icon} alt="" />
            <p className="xl:mb-5 xxl:mb-9 w-11/12  xl:text-sm xxl:text-lg">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries.
            </p>
            <h4 className="testimonial-company">- Verizon</h4>
          </div>
          <div className="pantheon xl:px-5 xl:py-7 xxl:px-5 xxl:py-10 border text-justify ">
            <img className="xl:mb-5 xxl:mb-9" src={quote_icon} alt="" />
            <p className="xl:mb-5 xxl:mb-9 w-11/12 xl:text-sm xxl:text-lg">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries.
            </p>
            <h4 className="testimonial-company">- PANTHEON.tech</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserStories
