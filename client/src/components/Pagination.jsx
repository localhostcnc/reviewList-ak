
class Pagination extends React.Component {
  constructor(props){
    super(props);
  }

  navigateToPage(newPageNumber) {
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
      <div>
        {arr.map((i) => 
          (<span className="pagination-button" key={i} onClick={() => this.navigateToPage(i)}>{i}</span>)
        )}
      </div>
    );
  }
}

export default Pagination;