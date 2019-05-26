import React from 'react';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingMore: false
    }
  }

  reviewDateFormatted() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const d = new Date(this.props.data.date);
    return `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
  }

  highlight(text, keyword) {
    let newContent;
    if (keyword.length === 0) {
      newContent = text;
    } else {
      //https://stackoverflow.com/questions/3954927/js-regex-how-to-replace-the-captured-groups-only
      //https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
      newContent = text.replace(new RegExp(`(${keyword})`, 'gi'), '<b>$1</b>');
    }
    // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
    return { __html: newContent };
  }

  showMore() {
    this.setState({
      showingMore: true
    });
  }

  render() {
    let firstSection = '';
    let secondSection = '';
    const charLimit = 150;
    const reviewText = this.props.data.content;
    
    if (reviewText.length <= charLimit) {
      firstSection = (<span>{reviewText.substr(0, charLimit)}</span>);
    } else {
      // check to not break the a word within the text
      let breakingPoint = charLimit;
      while (reviewText[breakingPoint] != ' ' && breakingPoint > 100) {
        breakingPoint--;
      }

      firstSection = (
        <span>
          <span>{reviewText.substr(0, breakingPoint)} </span>
          <span onClick={() => this.showMore()} className={this.state.showingMore ? 'read-more-button display-none' : 'read-more-button display-inline'}>...Read more</span>
        </span>
      );
      secondSection = (
        <span className={this.state.showingMore ? 'display-inline' : 'display-none'}>{reviewText.substr(breakingPoint)}
        </span>
      );
    }


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
        {/* <div className="review-content" dangerouslySetInnerHTML={this.highlight(this.props.data.content, this.props.filterWord)}></div>
         */}
        <div className="review-content">
          {firstSection}
          {secondSection}
        </div>
      </div>
    );
  }
}

export default ReviewListItem;
