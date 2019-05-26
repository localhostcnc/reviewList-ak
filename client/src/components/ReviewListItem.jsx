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

  showMore() {
    this.setState({
      showingMore: true
    });
  }

  highlight(text) {
    let keyword = this.props.filterWord;

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

  createSpanFromSubstr(from, to) { // create a span, containing highlighted text from this substr of reviewText
    const reviewText = this.props.data.content;

    let text = reviewText.substr(from, to);
    let highlightedText = this.highlight(text)
    return (<span dangerouslySetInnerHTML={highlightedText}></span>);
  }

  render() {
    let firstSection = '';
    let secondSection = '';
    const charLimit = 150;
    const reviewText = this.props.data.content;

    if (reviewText.length <= charLimit) {
      firstSection = this.createSpanFromSubstr(0, charLimit);
    } else {
      // check to not break a word within the text
      let breakingPoint = charLimit;
      while (reviewText[breakingPoint] != ' ' && breakingPoint > 100) {
        breakingPoint--;
      }

      firstSection = (<span>
          {this.createSpanFromSubstr(0, breakingPoint)}
          {this.state.showingMore ? '' 
            : (<span onClick={() => this.showMore()} className="read-more-button">...Read more</span>)}
        </span>);
      secondSection = this.state.showingMore ? this.createSpanFromSubstr(breakingPoint) : '';
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
