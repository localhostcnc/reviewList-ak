import React from 'react';
import TotalSummary from './TotalSummary';
import AttributesOverview from './AttributesOverview';
import ReviewListItem from './ReviewListItem';

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
        <ReviewListItem />
      </div>
    );
  }
}

export default ReviewSection;
