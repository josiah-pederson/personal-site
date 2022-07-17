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
        As a student in
        the <a href="https://www.hackreactor.com/learn-python-learn-javascript">Hack Reactor</a> 19
        week software enginnering immersive program, I get to solve lots of problems every day!
        Previously, I worked
        at <a href="https://www.apple.com">Apple</a> and graduated with a liberal arts degree
        from <a href="https://www.wheaton.edu">Wheaton College</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">About Me</Link> : <Link to="/resume" className="button">Learn More</Link>}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
