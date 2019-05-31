import React from 'react';
import $ from 'jquery';

class TotalSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewcount: 0,
      averageRating: 0,
    };
  }

  componentDidMount() {
    this.loadData.call(this);
  }

  loadData() {
    $.ajax({
      method: 'GET',
      url: '/reviews/summary/reviewcount',
      success: (result) => {
        this.setState({
          reviewcount: result.count,
        });
      },
      error: (err) => {
        console.log('error');
      },
    });

    $.ajax({
      method: 'GET',
      url: '/reviews/summary/averagerating',
      success: (result) => {
        this.setState({
          averageRating: result.average_rating,
        });
      },
      error: (err) => {
        console.log('error');
      },
    });
  }

  render() {
    return (
      <div className="total-summary-box">
        <div className="stars-outer">
          <div className="stars-inner" style={ {width: Math.round(this.state.averageRating/5*100-2.5)+'%'}}></div>
        </div>
        <div className="summary-reviews">{this.state.reviewcount} Reviews </div>
      </div>
    );
  }
}

export default TotalSummary;
