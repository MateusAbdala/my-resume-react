import React, { Component } from 'react';

export default class Content extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Honorable mention on OBMEP 2016 - Brazilian Mathematical Olympiad</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Bronze Medal on OBMEP 2014 - Brazilian Mathematical Olympiad</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup>
              Place - information and communication of MEP 2017 (Professional Education Show)</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Finalist - 32<sup>nd</sup> MOSTRATEC (International Science and Technology Show)</li>
          </ul>
        </div>
      </section>
    );
  }
}