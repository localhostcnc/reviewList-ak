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
      <div className="total-summary-box">
        <div className="attribute-container-summary">
          <div className="attribute-stars-summary">
            <div className="stars-outer-summary">
              <div className="stars-inner-summary" id="count-style" style={ {width: Math.round(this.state.reviewcount/5*100-2.5)+'%'}}>{this.state.reviewcount} Reviews </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalSummary;
