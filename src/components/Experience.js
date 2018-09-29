import React, { Component } from 'react';

export default class Content extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Unicred do Brasil</div>
              <p>Development and maintenance of web-based softwares, practicing agile development with Scrum and developing with Angular(server side rendering), Bootstrap, Karma, Java, Hibernate, SpringBoot and other tools.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2018 - Present</span>
            </div>
          </div>

        </div>

      </section>
    );
  }
}