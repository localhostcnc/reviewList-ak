/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReviewListItem from './ReviewListItem';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  onBtnClick() {
    this.props.clearSearchFunction();
  }

  render() {
    let filterLine = '';
    let filterDetailsContainer = '';
    
    let selectedKeyword = this.props.filterWord;
    let filteredReviews = this.props.data;

    if (selectedKeyword !== '') { // we are in search mode
      if (filteredReviews.length === 0) {
         // Review attributes should hide + all reviews
        filterLine = (<span className="returned-review">None of our guests have mentioned “<strong>{selectedKeyword}</strong>”</span>);
      } else if (filteredReviews.length === 1){
         // Review attributes should hide
        filterLine = (<span className="returned-review">1 guest has mentioned “<strong>{selectedKeyword}</strong>”</span>)
      } else {
         // Review attributes should hide
        filterLine = (<span className="returned-review">{filteredReviews.length} guests has mentioned “<strong>{selectedKeyword}</strong>”</span>);
      }

      filterDetailsContainer = (
          <div className="filter-container">
            {filterLine} 
            <span className="back-button" onClick={() => {this.onBtnClick()}}>Back to all reviews</span>
          </div>
      )
    }
    return (
      <div>
          {filterDetailsContainer}
          {filteredReviews.map((review, i) => 
            (<ReviewListItem key={i} data={review} filterWord={this.props.filterWord} />))}
      </div>
    );
  }
}

export default ReviewList;
