import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4>
        { data.link ? <a href={data.link}>{data.company}</a> : data.company } - {data.position}
      </h4>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Project.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Project;
