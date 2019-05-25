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
      <div className="attribute-container">
          {this.state.attributesrating.map(
                (attributeItem, i) => (
                  <div key={i} className="attribute-item">
                    {attributeItem.attribute_name} 
                    <div className="attribute-stars">
                      <div className="stars-outer">
                        <div className="stars-inner" style={{width: Math.round(attributeItem.average_value/5*100-2.5)+'%'}}></div>
                      </div>
                    </div>
                  </div>
                )
          )}
      </div>
    );
  }
}

export default AttributesOverview;
