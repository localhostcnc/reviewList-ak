import React from 'react';
import $ from 'jquery';

class AttributesOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      attributesrating: [],
    };
  }

  componentDidMount() {
    this.loadAttributes.call(this);
  }

  loadAttributes() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3030/attributesrating',
      success: (result) => {
        this.setState({
          attributesrating: result,
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
        <ul>
          {this.state.attributesrating.map(
            (attributeItem, i) => ([attributeItem.attribute_name, attributeItem.average_value]),
          )}
        </ul>
      </div>
    );
  }
}

export default AttributesOverview;
