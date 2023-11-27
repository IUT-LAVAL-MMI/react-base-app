import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './ToDoList.css';

export default class ToDoList extends React.Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string, highlighted: PropTypes.bool,
    })).isRequired,
    addEntry: PropTypes.func.isRequired,
    removeEntry: PropTypes.func.isRequired,
    highlightEntry: PropTypes.func,
  };

  static defaultProps = {
    highlightEntry: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
    };
  }

  get currentText() {
    const { currentText } = this.state;
    return currentText;
  }

  set currentText(text) {
    this.setState({
      currentText: text,
    });
  }

  createEntry() {
    const { addEntry } = this.props;
    const text = this.currentText.trim();
    if (text !== '') {
      addEntry(text);
    }
    this.currentText = '';
  }

  render() {
    const {
      entries, removeEntry, highlightEntry,
    } = this.props;
    return (
      <>
        <ul className={styles.todoListEntries}>
          {entries.map((entry, i) => (
            <li // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={classNames(styles.todoListEntry,
                { [styles.highlighted]: entry.highlighted })}
            >
              <button type="button" className={styles.closeBtn} onClick={() => { removeEntry(i); }}>X</button>
              &nbsp;
              <span>{entry.text}</span>
              {highlightEntry && (
                <>
&nbsp;
                  <button type="button" className={styles.highlightBtn} onClick={() => { highlightEntry(i); }}>!</button>
                </>
              )}
            </li>
          ))}
        </ul>
        <form className={styles.todoListForm}>
          <input type="text" required value={this.currentText} onChange={(e) => { this.currentText = e.target.value; }} />
          <button type="submit" onClick={(e) => { this.createEntry(); e.preventDefault(); }}>New</button>
        </form>
      </>
    );
  }
}
