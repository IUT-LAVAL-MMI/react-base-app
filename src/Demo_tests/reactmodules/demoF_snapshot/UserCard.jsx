import React from 'react';
import classNames from 'classnames';

export default class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      lastSwitch: 'aucune',
    };
  }

  switchUserSelection() {
    const { selected } = this.state;
    this.setState({
      selected: !selected,
      lastSwitch: Date.now(),
    });
  }

  render() {
    const {
      firstname, lastname, birthdate, location,
    } = this.props;
    const { selected, lastSwitch } = this.state;
    const identity = `${firstname} ${lastname}`;

    const selectedButtonClass = classNames('btn', 'btn-small', { active: selected });
    return (
      <div className="card">
        <div className="card-header">
          <h3>{identity}</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <span>
                Birthdate:
                {birthdate}
              </span>
            </div>
            <div className="col">
              <span>
                Location:
                {location}
              </span>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col">
              <small>
                Last selection:
                {lastSwitch}
              </small>
            </div>
            <div className="col">
              <button
                type="button"
                className={selectedButtonClass}
                aria-pressed={selected}
                onClick={() => this.switchUserSelection()}
              >
                Sélectionner
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
