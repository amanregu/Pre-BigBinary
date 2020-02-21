import React from 'react';

import './style.scss';

const DisplayRepositories = (props) => {
  const { repositories } = props;

  const repoNames = repositories.map((repo) => (
    <div className="list-item-wrapper">
      <li className="list-item" key={repo._id}>
        {repo.name}
      </li>
      <button className="star-btn" type="button">
        <span className="btn-text">Star</span>
      </button>
    </div>
  ));
  return (
    <div className="ul-container">
      <ul>{repoNames}</ul>
    </div>
  );
};
export default DisplayRepositories;
