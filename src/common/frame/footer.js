import React, {Component} from 'react';

class Footer extends Component {

  render () {

    return (
      <footer id="footer-wrapper">
        <div className="container-fluid mar-container">
          <div className="collapse navbar-collapse justify-content-md-between">
            <ul className="nav navbar-nav flex-row">
              <li><a className="mar-btn" href="/">About Us</a></li>
              <li><a className="mar-btn" href="/">Contact</a></li>
              <li><a className="mar-btn" href="/">Terms & Condition</a></li>
              <li><a className="mar-btn" href="/">Privacy Policy</a></li>
              <li><a className="mar-btn" href="/">Delivery</a></li>
              <li><a className="mar-btn" href="/">Returns & Exchange</a></li>
              <li><a className="mar-btn" href="/">FAQs</a></li>
            </ul>
            <ul id="sns-list" className="navbar-nav flex-row">
              <li><a className="mar-btn" href="/"><i className="fab fa-facebook-f"/></a></li>
              <li><a className="mar-btn" href="/"><i className="fab fa-instagram"/></a></li>
            </ul>
          </div>
        </div>
      </footer>

    )
  }
}
export default Footer
