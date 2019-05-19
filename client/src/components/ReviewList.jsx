import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class ReviewList extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
           reviews: []
        }

    }

    componentDidMount() {
        this.loadReviews.call(this);
    }

    loadReviews() {
        $.ajax ({
            type: 'GET',
            url:'http://localhost:3030/reviews',
            contentType:"application/json",
            success:(result) => {
                console.log('success');
                console.log(result);
                this.setState({
                    reviews: result
                });
            },
            error: (err) => {console.log(err)}
        })
    }

    render() {
        return (
            <div>
                I am ReviewList Component!
                <ul>
                {this.state.reviews.map((review) => 
                    <li>
                        <b>{review.review_id} said:</b>
                        {review.content}
                        <br /><br />
                    </li>        
                )}
                </ul>
            </div>
        );
    }
}

export default ReviewList;