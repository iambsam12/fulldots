import React from 'react';
import './header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo1.png'

const Header = () => {
    return <div className="navss">
        <nav className="navbar navbar-expand-lg header">
            <div className="containerss" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Link to='/' id='link' className="navbar-brand d-flex">
                    <img src={logo} alt="" style={{ height: '90px', width: '95px' }} />
                    <h4 className='ltd-name mt-2 pt-1'><span style={{ fontSize: '23px' }}>महारानीझोडा</span><br />साना किसान कृषि सहकारी <br /> संस्था लि.</h4>
                    {/* <img alt="logo of co-operative ltd." height={75} width={75} /> */}
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li>
                            <NavLink
                                exact="true"
                                to="/"
                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                            >
                                गृहपृष्ठ
                            </NavLink>
                        </li>
                        <li >
                            <NavLink
                                to="/aboutus"
                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                            >
                                हाम्रोबारे
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/our-works"
                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                            >
                                हाम्रो कामहरु
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/news-section"
                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                            >
                                समाचार कक्ष
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/announcement"
                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                            >
                                घोषणाहरु
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/download"
                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                            >
                                डाउनलोड
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/partners"
                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                            >
                                दाता साझेदार
                            </NavLink>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    </div>;
};

export default Header;
