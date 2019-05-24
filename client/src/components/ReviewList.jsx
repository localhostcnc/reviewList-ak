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
    // let keyword = this.props.filterWord;
    // let filteredReviews = this.props.reviewsToShow;

    // if (keyword !== '') { // we are in search mode
    //   if (filteredReviews.length === 0) {
    //     filterLine = (<div>None of our guests have mentioned `${keyword}`</div>);
    //   } else if (filteredReviews.length === 1){
    //     filterLine = (<div>1 guest has mentioned `${keyword}`</div>)
    //   } else {
    //     filterLine = (<div>`${this.props.allReviews.length}` guests has mentioned `${keyword}`</div>);
    //   }
    // }

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
