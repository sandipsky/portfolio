import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";


const Experience = () => {
  return (
    <section id="experience">
      <h2>My Skills</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="eicons"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="eicons"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="eicons"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="eicons"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>

        {/* end of frontend  */}

        <div className="backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="eicons"/>
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="eicons"/>
              <div>
                <h4>Django</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="eicons"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="eicons"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience