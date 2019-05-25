/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  reviewDateFormatted() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const d = new Date(this.props.data.date);
    return `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
  }

  reviewContentHilighted() {
    const word = this.props.filterWord;
    let newContent;
    if (word.length === 0) {
      newContent = this.props.data.content;
    } else {
      //https://stackoverflow.com/questions/3954927/js-regex-how-to-replace-the-captured-groups-only
      //https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
      newContent = this.props.data.content.replace(new RegExp(`(${word})`, 'gi'), '<b>$1</b>');
    }
    // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
    return { __html: newContent };
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
        <div className="review-content" dangerouslySetInnerHTML={this.reviewContentHilighted()}></div>
      </div>
    );
  }
}

export default ReviewListItem;
