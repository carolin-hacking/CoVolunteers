import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';



export class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong>
                        { user ? `Welcome ${user.username}`: ""}
                    </strong>
                </span>
                <li className="nav-item">
                    <button onClick={this.props.logout} className="nav-link btn btn-primary btn-sm text-light">Logout</button>
                </li>
            </ul> 
);

        const guestLinks = (
            <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </ul> 
        )

        return (
          <nav className="navbar navbar-expand-sm  bg-light">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand text-primary" href="#">
                Finde Dein Engagement oder Job!
              </a>
              <ul className="navbar-nav">
              <li class="nav-item">
              <a class="nav-item nav-link text-primary" href="/#/fuerhelfer">Für Helfer</a>
              </li>
              </ul>
              <ul className="navbar-nav">
              <li class="nav-item">                    
              <a class="nav-item nav-link text-primary" href="/#/fuereinrichtungen">Für Einrichtungen</a>
              </li>
              </ul>
            </div>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth  
})
export default connect(mapStateToProps, {logout})(Header);
