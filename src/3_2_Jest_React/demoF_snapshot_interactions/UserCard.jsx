import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function UserCard({
  firstname, lastname, birthdate, location,
}) {
  const [selectedState, setSelectedState] = useState({ selected: false, lastSwitch: 'aucune' });

  const switchUserSelection = () => {
    setSelectedState({
      selected: !selectedState.selected,
      lastSwitch: Date.now(),
    });
  };

  const identity = `${firstname} ${lastname}`;

  return (
    <div className="card">
      <div className="card-header">
        <h3>{identity}</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <span>
              Birthdate:&nbsp;
              {birthdate}
            </span>
          </div>
          <div className="col">
            <span>
              Location:&nbsp;
              {location}
            </span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col">
            <small>
              Last selection:&nbsp;
              {selectedState.lastSwitch}
            </small>
          </div>
          <div className="col">
            <button
              type="button"
              className={classnames('btn', 'btn-small', { active: selectedState.selected })}
              aria-pressed={selectedState.selected}
              onClick={switchUserSelection}
            >
              Sélectionner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  location: PropTypes.string,
};

UserCard.defaultProps = {
  location: 'unknown',
};

export default UserCard;
