import React from 'react';
import $ from 'jquery';
import TotalSummary from './TotalSummary';
import AttributesOverview from './AttributesOverview';
import ReviewList from './ReviewList';
import SearchBar from './SearchBar';


class ReviewSection extends React.Component {
  constructor() {
    super();
    this.state = {
      filterWord: '',
      allReviews: [],
      reviewsToShow: [],
    };
  }

  componentDidMount() {
    this.loadReviews.call(this);
  }

  loadReviews() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3030/reviews',
      // data: {n: 50},
      contentType: 'application/json',
      success: (result) => {
        this.setState({
          allReviews: result,
          reviewsToShow: result,
        });
      },
      error: (err) => { console.log(err); },
    });
  }

  updateKeyword(keyword) {
    this.setState({
      filterWord: keyword,
    });
  }

  updateFilteration(keyword) {
    var result = [];
    for(var i = 0 ; i < this.state.allReviews.length; i++) {
      var eachReview = this.state.allReviews[i];
      if (eachReview.content.includes(keyword)) {
        result.push(eachReview);
      }
    }
    this.setState({
      reviewsToShow: result,
    });
  }


  handleSearch(keyword) {
    this.updateKeyword(keyword);
    this.updateFilteration(keyword);
  }

  render() {
    return (
      <div>
        <TotalSummary />
        <SearchBar callback={(keyword) => { this.handleSearch(keyword) }} />
        <AttributesOverview />
        <ReviewList data={this.state.reviewsToShow} filterWord={this.state.filterWord} />
      </div>
    );
  }
}

export default ReviewSection;
