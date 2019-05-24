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
      // data: {n: 50},
      contentType: 'application/json',
      success: (result) => {
        this.setState({
          reviews: result,
        });
      },
      error: (err) => { console.log(err); },
    });
  }

  handleSearch(keyword) {
    this.setState({
      searchFilter: keyword,
    });
  }

  render() {
    return (
      <div>
        <TotalSummary />
        {/* <SearchBar callback={this.handleSearch.bind(this)} /> */}
        <AttributesOverview />
        <ReviewList data={this.state.reviews} />
      </div>
    );
  }
}

export default ReviewSection;
