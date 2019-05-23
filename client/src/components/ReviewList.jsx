/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import $ from 'jquery';
import ReviewListItem from './ReviewListItem';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    this.loadReviews.call(this);
  }

  loadReviews() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3030/reviews',
      data: {n: 50},
      contentType: 'application/json',
      success: (result) => {
        this.setState({
          reviews: result,
        });
      },
      error: (err) => { console.log(err); },
    });
  }

  render() {
    return (
      <div>
          I am ReviewList Component!
        <ul>
          {this.state.reviews.map((review, i) => (
            <ReviewListItem key={i} data={review} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ReviewList;
