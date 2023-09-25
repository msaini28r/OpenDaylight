import React from 'react'
import './About.css'
import about_light from '../../images/about_light.png'
import about_dark from '../../images/about_dark.png'
import sdn_light from '../../images/sdn_light.png'
import sdn_dark from '../../images/sdn_dark.png'
import training_light from '../../images/training_light.png'
import training_dark from '../../images/training_dark.png'

const About = ({ theme }) => {
  return (
    <div>
      <div className="unleash p-10">
        <div className="unleash-banner container mx-auto text-center ">
          <h1 className="unleash-banner unleash-title uppercase py-6 font-bold">
            Unleash the power of
            <span className="unleash-banner block font-bold">OpenDaylight</span>
          </h1>
          <p className="unleash-banner text-center px-32 intro">
            Founded in 2013, OpenDaylight is part of LF Networking (LFN), an
            entity that integrates the governance of participating projects in
            order to enhance operational excellence, simplify member engagement,
            and increase collaboration across open source networking projects
            and standards bodies. Each technical project retains its technical
            independence and project roadmaps. Learn more about LFN.
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="about py-16 grid sm:grid-cols-1 md:grid-cols-2">
          <div className="about-text text-start ">
            <h2 className="about-title pb-5">About OpenDaylight</h2>
            <p className="text-justify pb-5">
              Founded in 2013, OpenDaylight is part of LF Networking (LFN), an
              entity that integrates the governance of participating projects in
              order to enhance operational excellence, simplify member
              engagement, and increase collaboration across open source
              networking projects and standards bodies. Each technical project
              retains its technical independence and project roadmaps. Learn
              more about LFN.
            </p>
            <p className="text-justify pb-5">
              Our aim is to grow a strong OpenDaylight and Open Networking
              ecosystem by facilitating collaboration between developers, end
              users, LFN member companies and fellow open source projects to
              produce the most relevant and reliable technology solutions.
              Together, the OpenDaylight community supports user adoption with
              training, integration services, community events and other
              resources around the world.
            </p>
            <p className="text-justify pb-5">
              The work we do is made possible by contributions from LFN’s many
              Silver, Gold and Platinum member companies, as well as the
              countless technical contributions from our developer community. As
              an open source project, the ODL platform is freely available for
              use under the Eclipse Public License (EPL), and anyone can
              participate in its development.
            </p>
            <p className="text-justify">
              We strongly believe in working together to solve our industry’s
              shared challenges, and fostering a community where we all “leave
              our company badges at the door.” Learn how to get started with
              OpenDaylight as a developer.
            </p>
          </div>
          <div className="about-image flex justify-center">
            {theme === 'dark-theme' ? (
              <img
                style={{ width: 400 }}
                src={about_dark}
                alt="ODL Dark Logo"
              />
            ) : (
              <img
                style={{ width: 400 }}
                src={about_light}
                alt="ODL Light Logo"
              />
            )}
          </div>
        </div>
        <div className="sdn py-16 grid sm:grid-cols-1 md:grid-cols-2">
          <div className="sdn-image flex justify-start items-center">
            {theme === 'dark-theme' ? (
              <img
                style={{ width: 600, height: 600 }}
                src={sdn_dark}
                alt="ODL Dark Logo"
              />
            ) : (
              <img
                style={{ width: 600, height: 600 }}
                src={sdn_light}
                alt="ODL Light Logo"
              />
            )}
          </div>
          <div className="sdn-text text-start ">
            <h2 className="sdn-title pb-5">What is SDN?</h2>
            <p className="text-justify pb-5">
              The modern software-defined networking (SDN) movement grew out of
              a simple question: why shouldn’t networking devices be
              programmable just as other computing platforms are?
            </p>
            <p className="text-justify pb-5">
              The benefits of such an approach were obvious: no more arcane
              protocols to learn. No more waiting and hoping for networking
              vendors to develop specialized features you need. And if you could
              develop your own features, you could then optimize your device
              selection for price and performance independently of
              feature-richness.
            </p>
            <p className="text-justify pb-5">
              By disaggregating the vertically integrated network device stack,
              and reimagining the control plane as a device-independent
              operating system, several longstanding goals can now be achieved:
              <ul className="list-disc pl-8 py-3">
                <li>
                  Interoperability of different physical and virtual device
                  types from different vendors.
                </li>
                <li>
                  Optimization of device selection–for price and performance
                  independently of services features.
                </li>
                <li>
                  Continuous visibility of flows from source to destination.
                </li>
                <li>
                  Programmability to shape network behavior according to users’
                  needs.
                </li>
                <li>Automation of and by policy.</li>
              </ul>
              <p>
                Network functions virtualization (NFV) brought the concept of
                compute virtualization to networking. The two have become
                closely intertwined, as SDN drives on-demand deployment of
                virtual network services when and where they are needed.
              </p>
            </p>
            <p className="text-justify">
              The drive for network programmability naturally led to an embrace
              of open source networking initiatives at every layer of the
              networking stack. OpenDaylight is by far the largest and most
              mature project in this new stack, and a core component of the open
              source networking ecosystem.
            </p>
          </div>
        </div>
        <div className="training py-16 grid sm:grid-cols-1 md:grid-cols-2">
          <div className="training-text text-start ">
            <h2 className="training-title pb-5">Training </h2>
            <p className="text-justify pb-5">
              New to Software-Defined Networking? Need to understand the
              specifics of OpenDaylight?
              <span className="block">
                Here are some online training options.
              </span>
            </p>
            <p className="text-justify pb-5">
              Linux Foundation Training
              <ul className="list-disc pl-8 py-3">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://training.linuxfoundation.org/training/introduction-to-open-source-networking-technologies/"
                    className="link"
                  >
                    Interoperability of different physical and virtual device
                    types from different vendors.
                  </a>
                </li>
              </ul>
            </p>
            <p>
              See also the
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/user/opendaylightproject"
                  className="link"
                >
                  {' '}
                  YouTube channel{' '}
                </a>
              </span>
              for other tutorials.
            </p>
          </div>
          <div className="training-image flex justify-center">
            {theme === 'dark-theme' ? (
              <img
                style={{ width: 700, height: 250 }}
                src={training_dark}
                alt="ODL Dark Logo"
              />
            ) : (
              <img
                style={{ width: 700, height: 250 }}
                src={training_light}
                alt="ODL Light Logo"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
