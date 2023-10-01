import React from 'react'
import './Governance.css'
import Anil from '../../images/Anil.png'
import Ivan from '../../images/Ivan.png'
import Manoj from '../../images/Manoj.png'
import Robert from '../../images/Robert.png'
import Venkatrangan from '../../images/Venkatrangan.png'
import Gilles from '../../images/Gilles.png'
import Linkedin from '../../images/Linkedin.png'
import Email from '../../images/Email.png'

const people = [
  {
    name: 'Anil Belur',
    image: Anil,
    linkedin: 'https://www.linkedin.com/in/abelur/',
    email: 'abelur@linuxfoundation.org',
  },
  {
    name: 'Ivan Hraško',
    image: Ivan,
    linkedin: 'https://www.linkedin.com/',
    email: 'ivan.hrasko@pantheon.tech',
  },
  {
    name: 'Manoj Chokka',
    image: Manoj,
    linkedin: 'https://www.linkedin.com/in/manoj-chokka-b5895b64/',
    email: 'cmanoj8@gmail.com',
  },
  {
    name: 'Robert Varga ',
    image: Robert,
    linkedin: 'https://www.linkedin.com/in/robert-varga-5086a24/',
    email: 'nite@hq.sk',
  },
  {
    name: 'Venkatrangan',
    image: Venkatrangan,
    linkedin:
      'https://www.linkedin.com/in/venkatrangan-govindarajan-sdn-test-automation/',
    email: 'gvrangan@gmail.com',
  },
  {
    name: 'Gilles Thouenon',
    image: Gilles,
    linkedin: 'https://www.linkedin.com/in/gilles-thouenon-2660b564/',
    email: 'gilles.thouenon@orange.com',
  },
  // Add more people here
]

const Governance = () => {
  return (
    <div>
      <div className="governance-banner">
        <div className="governance-box container mx-auto text-center p-20">
          <h1 className="governance-title pb-9 xl:text-6xl xxl:text-7xl">
            Committed to the Future
          </h1>
          <p className="governance-body xl:px-28 xxl:px-52 text-center text-2xl">
            OpenDaylight is a founding project of{' '}
            <span className="governance-body font-bold underline underline-offset-4">
              LF Networking (LFN)
            </span>
            . LFN integrates the governance of participating projects in order
            to improve operational efficiencies and simplify member engagement.
            Each technical project retains its technical independence and
            project roadmaps.
          </p>
        </div>
      </div>
      <div className="container mx-auto tsc-explain">
        <div className="tsc-columns grid grid-cols-3 gap gap-12 py-7">
          <div className="tsc-theory text-center py-8">
            <h3 className="tsc-title pb-5">What is TSC</h3>
            <p className="tsc-body">
              TSC stands for "Technical Steering Committee." The Technical
              Steering Committee is a group of individuals within an
              organization or project responsible for providing technical
              leadership, guidance, and decision-making. In the context of
              OpenDaylight, the TSC plays a crucial role in determining the
              technical direction of the OpenDaylight project, which focuses on
              software-defined networking.
            </p>
          </div>
          <div className="tsc-members text-center py-8">
            <h3 className="tsc-title pb-5">
              How can I become a{' '}
              <span className="tsc-title block">TSC Member?</span>
            </h3>
            <p className="tsc-body">
              OpenDaylight welcomes participation from anyone, allowing them to
              develop and contribute code, become elected members of the TSC,
              and contribute to the project's progress in various ways. The TSC
              comprises developers who have been elected or chosen as project
              leaders, and they play a crucial role in providing technical
              leadership for OpenDaylight.
            </p>
          </div>
          <div className="tsc-governance text-center py-8">
            <h3 className="tsc-title pb-5">Our Governance Model</h3>
            <p className="tsc-body">
              OpenDaylight follows an open governance model to ensure
              transparent decision-making and community participation. To
              understand more about OpenDaylight's governance model, you can
              refer to this White Paper and if you want to learn more about TSC
              member selection, governance, and activities checkout out TSC
              Charter. If you wish to attend any meeting, please visit Meeting
              and notes.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <div className="members-heading">
          <h2 className="text-center pb-10">TSC Members</h2>
        </div>
        <div className="grid sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 align-middle">
          {/* Using map so that new card automatically get's created when new person is added. */}
          {people.map((person, index) => (
            <div
              key={index}
              className="cards-box p-4 rounded-lg shadow-xl flex "
            >
              <div className="cards">
                <img
                  src={person.image}
                  alt={`Person ${index}`}
                  className="cards w-36 h-2w rounded-full"
                />
              </div>
              <div className="cards my-4 pl-8 pt-5">
                <h2 className="cards text-xl font-semibold ">{person.name}</h2>
                <div className="social-links mt-3 flex gap-2">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Linkedin}
                      alt="Linkedin Icon"
                      className="social-links w-8 h-8 cursor-pointer"
                    />
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Email}
                      alt="Email Icon"
                      className=" social-links w-10 h-8 pl-2 cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Governance
