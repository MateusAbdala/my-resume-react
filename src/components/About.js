import React, { Component } from 'react';

export default class Content extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Mateus
            <span className="text-primary">Abdala</span>
          </h1>
          <div className="subheading mb-5">Guaíba, Rio Grande do Sul · Brazil · +55 51 98913-7650 ·
            <a className="email" href="mailto:name@email.com">mateus.gui.abdala@gmail.com</a>
          </div>
          <p className="lead mb-5">My main skills are related to web applications, several times I had to deal with technologies that I did not master, but as I like a challenge, I end up evolving a lot within these opportunities. My goal is to be an example for the company and for my team, I always keep learning and teaching.</p>
          <div className="social-icons">
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/mateus-abdala/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/MateusAbdala">
              <i rel="noopener noreferrer" className="fab fa-github"></i>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/abdalamateus/">
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a rel="noopener noreferrer" target="_blank" href="#">
              <i className="fab fa-facebook-f"></i>
            </a> */}
          </div>
        </div>
      </section>
    );
  }
}