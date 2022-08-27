import React from 'react';
import PropTypes from 'prop-types';

import Project from './Projects/Project';

const Proj = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Projects</h3>
    </div>
    {data.map((project) => (
      <Project
        data={project}
        key={project.company}
      />
    ))}
  </div>
);

Proj.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Proj.defaultProps = {
  data: [],
};

export default Proj;
