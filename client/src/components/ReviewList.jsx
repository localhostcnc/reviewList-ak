/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReviewListItem from './ReviewListItem';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    let filterLine = '';
    let selectedKeyword = this.props.filterWord;
    let filteredReviews = this.props.filterWord;

    if (selectedKeyword !== '') { // we are in search mode
      if (filteredReviews.length === 0) {
        filterLine = (<span className="filter-return-review">None of our guests have mentioned "{selectedKeyword}"</span>);
      } else if (filteredReviews.length === 1){
        filterLine = (<span className="filter-return-review">1 guest has mentioned "{selectedKeyword}"</span>)
      } else {
        filterLine = (<span className="filter-return-review">{this.props.data.length} guests has mentioned "{selectedKeyword}"</span>);
      }
    }

    return (
      <div>
        {filterLine}
        <ul>
          {this.props.data.map((review, i) => (<ReviewListItem key={i} data={review} />))}
        </ul>
      </div>
    );
  }
}

export default ReviewList;
