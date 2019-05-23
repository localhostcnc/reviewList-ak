import React from 'react';
import $ from 'jquery';

class ReviewListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewItem: [],
    };
  }

  componentDidMount() {
    this.loadReviewItem.call(this);
  }

  loadReviewItem() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3030/reviews',
      contentType: 'application/json',
      success: (result) => {
        this.setState({
          reviewItem: result,
        //   can we say reviewItem: result.content, ??
        });
      },
      error: (err) => {
        console.log('error');
      },
    });
  }

  render() {
    return (
      <div>
          Dang!!! I am reviewlist item!
        <ul>
          {this.state.reviewItem.map(
            (reviewContent, i) => (
              <li key={i}>
                <img width="100" height="100" src={reviewContent.author_picture} />
                <strong>{reviewContent.author_name}</strong>
                <br />{reviewContent.date}
                <br />{reviewContent.content}
              </li>
            ),
          )}
        </ul>
      </div>
    );
  }
}

export default ReviewListItem;
