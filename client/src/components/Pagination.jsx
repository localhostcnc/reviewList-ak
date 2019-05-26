
class Pagination extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPageNumber: 1
    };
  }

  navigateToPage(newPageNumber) {
    this.setState({
      currentPageNumber: newPageNumber
    })

    let n = newPageNumber; // we are reading from the given param, instead of this.state.currentPageNumber
    // because it might not be updated by setState, right now!
    this.props.callback((n-1)*7, n*7);
  }


  render () {

    let length = this.props.allReviewsLength;
    let numberOfPages= Math.ceil(length / 7);

    let arr = [];
    for (var i = 0; i < numberOfPages; i++) {
      arr.push(i+1);
    }

    return (
      <div className="pagination-container">
        {arr.map((i) => 
          (<span className={(i===this.state.currentPageNumber)?"selected":""} 
                  key={i} 
                  onClick={() => this.navigateToPage(i)}
           >{i}</span>)
        )}
      </div>
    );
  }
}

export default Pagination;