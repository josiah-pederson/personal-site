import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Josiah Pederson</h2>
        <p><a href="mailto:josiahcpederson@gmail.com">josiahcpederson@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Josiah. I like solving problems.
        I am a <a href="https://www.hackreactor.com/learn-python-learn-javascript">Hack Reactor</a> 19 week
        software enginnering immersive student and graduate
        of <a href="https://www.wheaton.edu">Wheaton College</a>.
        Previously, I worked
        at <a href="https://www.apple.com">Apple</a> and
        and did freelance videography on the side.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Template by Michael D&apos;Angelo.</p>
    </section>
  </section>
);

export default SideBar;
