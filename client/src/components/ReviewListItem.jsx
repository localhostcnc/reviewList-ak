/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  reviewDateFormatted() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let d = new Date(this.props.data.date);
    return monthNames[d.getMonth()] + ' ' + d.getFullYear();
  }

  render() {
    return (
      <div className="review-item-box">
        <div>
          <div className="table-cell">
            <img className="author-picture" alt="" width="48" height="48" src={this.props.data.author_picture} />
          </div>
          <div className="table-cell">
            <div className="author-name">{this.props.data.author_name}</div>
            <div className="review-date">{this.reviewDateFormatted()}</div>
          </div>
        </div>
        <div className="review-content">{this.props.data.content}</div>
      </div>
    );
  }
}

export default ReviewListItem;
