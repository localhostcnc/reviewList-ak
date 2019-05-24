import React from 'react';


class SearchBar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  onSearchClick() {
    const value = document.getElementById('search-entry');
    this.props.callback(value);
  }


  render() {
    return (
      <div>
        <span>
          <input
            id="search-entry"
            type="search"
            className="search"
            placeholder="Search reviews"
            onClick={this.onSearchClick.bind(this)}
          />
        </span>
      </div>
    );
  }
}

export default SearchBar;
