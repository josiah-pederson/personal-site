import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import projects from '../data/resume/projects';
import Proj from '../components/Resume/Projects';
import { skills } from '../data/resume/skills';
import pdf from '../data/resume/JosiahPedersonResume.pdf';

const sections = [
  'Experience',
  'Projects',
  'Skills',
  'Education',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Josiah Pederson's Resume. Hack Reactor Software Engineering Immersive, Wheaton College, Apple, Inc."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <p className="container">
            TL;DR? <a href={pdf} download>Download my resume</a>
          </p>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Courses data={skills} />
      <Proj data={projects} />
      <Experience data={positions} />
      <Education data={degrees} />
      {/* <Skills skills={skills} categories={categories} /> */}
      <References />

    </article>
  </Main>
);

export default Resume;
