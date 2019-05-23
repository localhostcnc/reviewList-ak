import React from 'react';
import TotalSummary from './TotalSummary';
import AttributesOverview from './AttributesOverview';
import ReviewList from './ReviewList';

class ReviewSection extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <TotalSummary />
        <AttributesOverview />
        <ReviewList />
      </div>
    );
  }
}

export default ReviewSection;
