import React, { Component } from 'react';

import Masonry from 'react-masonry-component';

class Glossary extends Component {
	state = {
    terms: [],
  };

  masonryOptions = {
    transitionDuration: ".5s"
	};

  componentDidMount() {
    this._asyncRequest = fetch('/terms')
    	.then(res => {return res.json()})
    	.then(res => {
        this._asyncRequest = null;
        var terms = res.sort().filter(function(item, pos, array) {
        return !pos || item !== array[pos - 1];
    });
        this.setState({terms});
      }
    );
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  getTermLinks(){
  	return this.state.terms.map((term) => {
		    return <div style={{padding: "5px",width:"360px", textAlign:"center",fontSize:"20px"}} key={term}><a href={"/search/" + term}>{term}</a></div>
		 });
  }

	render(){
    if (this.state.terms === []) {
      return (<div>Loading...</div>);
    } else {
      return(
				<Masonry className="defs" options={this.masonryOptions}>{this.getTermLinks()}</Masonry>
      );
    }
  }
}

export default Glossary;