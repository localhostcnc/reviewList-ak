/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import ReviewListItem from './ReviewListItem';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }


  render() {
    return (
      <div>
          I am ReviewList Component!
        <ul>
          {this.props.data.map((review, i) => (
            <ReviewListItem key={i} data={review} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ReviewList;
