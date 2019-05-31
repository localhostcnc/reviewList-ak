import React from 'react';
import $ from 'jquery';
import TotalSummary from './TotalSummary';
import AttributesOverview from './AttributesOverview';
import ReviewList from './ReviewList';
import SearchBar from './SearchBar';
import Pagination from './Pagination';


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
      url: '/reviews',
      // data: {n: 50},
      contentType: 'application/json',
      success: (result) => {
        this.setState({
          allReviews: result,
          reviewsToShow: result.slice(0, 7),
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
    let result;
    if (keyword.length === 0) {
      result = this.state.allReviews;
    } else {
      result = [];
      for(var i = 0 ; i < this.state.allReviews.length; i++) {
        var eachReview = this.state.allReviews[i];
        if (eachReview.content.toLowerCase().includes(keyword.toLowerCase())) {
          result.push(eachReview);
        }
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

  handleSlice(from, to) {
    let reviews = this.state.allReviews;
    reviews = reviews.slice(from, to);

    this.setState({
      reviewsToShow: reviews,
    });
  }

  clearSearch() {
    this.handleSearch('');
  }

  render() {
    let inSearchMode = (this.state.filterWord !== '');

    return (
      <div>
        <div className="total-row">
          <TotalSummary />
          <SearchBar callback={(keyword) => { this.handleSearch(keyword) }} />
        </div>
        {/* hide AttributesOverview when keyword is not found */}
        {inSearchMode ? '' : (<AttributesOverview />)}
        <ReviewList data={this.state.reviewsToShow} filterWord={this.state.filterWord} clearSearchFunction={() => {this.clearSearch()}} />
        {inSearchMode ? '' : (<Pagination callback={(from, to) => this.handleSlice(from, to)} allReviewsLength={this.state.allReviews.length} />)}
      </div>
    );
  }
}

export default ReviewSection;
