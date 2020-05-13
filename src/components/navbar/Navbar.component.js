import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class Navbar extends Component {

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let activeClass = 'normal';
      if (window.scrollY >= 72) {
        activeClass = 'top';
      }
      this.setState({ activeClass : activeClass});
    });
  }
  componentDidUpdate() {
  }

  componentWillUnmount() { window.removeEventListener('scroll'); }

  render() {
    return (
      <nav id="mainNav" className={`top-bar navbar navbar-expand-lg navbar-light fixed-top py-3 ${this.state ? this.state.activeClass : ''}`}>
        <div className="container">
          <span className="navbar-brand js-scroll-trigger">BBL MA</span>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/baggers">Baggers</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}
export default withRouter(Navbar)
