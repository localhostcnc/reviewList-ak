import React from 'react';
import ReviewList from './ReviewList';

class SearchBar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  onSearchClick() {
    const value = document.getElementById('search-entry').value;
    this.props.callback(value);
  }

  // onBtnClick() {
  //   return(
  //     //filterLine = "",
  //   )}
 

  render() {
    return (
      <div>
        <span>
          <input
            id="search-entry"
            type="text"
            className="search"
            placeholder="Search reviews"
            onKeyPress={() => {this.onSearchClick()}}
          />
        </span>
        <div>
          <span>
            <button onClick={() => {this.onBtnClick()}}>Back to all reviews</button>
          </span>
          </div>
      </div>
    );
  }
}

export default SearchBar;
