import React, { Component } from 'react';

export default class Content extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>
          <p>Apart from being a web developer, I enjoy my free time being with friends and family. Currently i am praticing brazilian jiu jitsu</p>
          <p className="mb-0">When <i>forced</i> indoors, I follow a number of sci-fi and fantasy genre movies and podcasts, I am an aspiring musician, and I spend a large amount of my free time exploring the latest technology advancements in the web development world.</p>
        </div>
      </section>
    );
  }
}