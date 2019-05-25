import React from 'react';
import ReviewList from './ReviewList';

class SearchBar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  onSearchClick(e) {
    if (e.which == 13) {
      const value = document.getElementById('search-entry').value;
      this.props.callback(value);
    }
  }

  render() {
    return (
      <div className="search">
        <span>
          <input
            id="search-entry"
            type="text"
            placeholder="Search reviews"
            onKeyUp={(e) => {this.onSearchClick(e)}}
          />
        </span>
        {/* <div>
          <span>
            <button onClick={() => {this.onBtnClick()}}>Back to all reviews</button>
          </span>
        </div> */}
      </div>
    );
  }
}

export default SearchBar;
