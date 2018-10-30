import React, { Component } from 'react';

import Masonry from 'react-masonry-component';

class Glossary extends Component {

  masonryOptions = {
    transitionDuration: ".5s"
	};

  componentDidMount() {
    this._asyncRequest = fetch('/terms')
    	.then(res => res.json())
    	.then(res => {
        this._asyncRequest = null;
        let terms = res.sort().filter((item, pos, array) => !pos || item !== array[pos - 1]);
        this.setState({terms});
      }
    );
  }

  componentWillUnmount() {
    if (this._asyncRequest) this._asyncRequest.cancel();
  }

  getTermLinks(){
      let { terms } = this.state;
      return terms.map((term) => <div style={{padding: "5px",width:"360px", textAlign:"center",fontSize:"20px"}} key={term}><a href={"/search/" + term}>{term}</a></div>);
  }

	render(){
    if (!this.state) return (<div>Loading...</div>);
    else return( <Masonry className="defs" options={this.masonryOptions}>{this.getTermLinks()}</Masonry>);
  }
}

export default Glossary;