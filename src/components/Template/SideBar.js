import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

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
      <p>Hey, I&apos;m Josiah! I like solving problems.
        As a Software Engineer, Immersive Resident
        for <a href="https://www.galvanize.com/">Galvanize, Inc.</a> and graduate of
        <a href="https://www.hackreactor.com/learn-python-learn-javascript"> Hack Reactor&apos;s </a>
        19 week Software Enginnering Immersive program, I get to mentor students and solve
        technical problems every day! Previously, I
        provided tech support at <a href="https://www.apple.com">Apple</a> and graduated
        from <a href="https://www.wheaton.edu">Wheaton College</a> with
        a B.A. in Communication.
      </p>
      {
        window.location.pathname.endsWith('/')
          ? null
          : <ul className="actions"><li><Link to="/about" className="button">About Me</Link></li></ul>
      }
    </section>
    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Josiah Pederson.</p>
    </section>
  </section>
);

export default SideBar;
