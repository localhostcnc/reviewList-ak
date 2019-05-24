import React from 'react';
import $ from 'jquery';

class TotalSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewcount: 0,
    };
  }

  componentDidMount() {
    this.loadSummaryCount.call(this);
  }

  loadSummaryCount() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3030/reviews/summary/reviewcount',
      success: (result) => {
        this.setState({
          reviewcount: result.count,
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
        <ul> {this.state.reviewcount} </ul>
      </div>
    );
  }
}

export default TotalSummary;
