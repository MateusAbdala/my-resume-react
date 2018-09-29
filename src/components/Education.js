import React, { Component } from 'react';

export default class Content extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">University of North Paraná</h3>
              <div className="subheading mb-3">Science Technologist</div>
              <p>Analysis and systems development</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2018 - present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">State Technical School Dr. Solon Tavares</h3>
              <div className="subheading mb-3">Software development</div>
              <p>Two awards from MEP and call for Mostratec</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2016 - 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">State School Dr. Carlos Augusto de Moura e Cunha</h3>
              <div className="subheading mb-3">Polytechnic High School</div>
              <p>Two awards from OBMEP</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2006 - 2017</span>
            </div>
          </div>

        </div>
      </section>
    );
  }
}