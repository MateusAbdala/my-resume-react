import React, { Component } from 'react';

export default class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYm-KcyvHy3PDkmh0V9KzkUk26255h0RwthshiaoanTnfH2B_IRg',
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/MateusAbdala')
      .then(result => {
        return result.json();
      }).then(data => {
        this.setState({ profile: data.avatar_url });
      });
  }

  goTo(element) {
    scrollTo(0,document.getElementById(element).offsetTop);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand" onClick={() => this.goTo('about')}>
          <span className="d-block d-lg-none">Mateus Abdala</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={this.state.profile} alt="profile photo" />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.goTo('about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.goTo('experience')}>Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.goTo('education')}>Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.goTo('skills')}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.goTo('interests')}>Interests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.goTo('awards')}>Awards</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}