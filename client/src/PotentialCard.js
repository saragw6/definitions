import React from 'react';
import ResultCard from './ResultCard.js';
import Button from 'react-toolbox/lib/button/Button';

class PotentialCard extends ResultCard {
  constructor(props) {
    super(props);
    this.state = {
      visible: true //is there a better way to handle this? //at least re-masonry, in the future. nonmvp
    };
    this.rejectPotential = this.rejectPotential.bind(this);
    this.acceptPotential = this.acceptPotential.bind(this);
  }

  rejectPotential(){
    alert("reject potential definition: " + this.props.term + " id: " + this.props.entry_id);
    fetch('/potentials/' + this.props.entry_id, {method: 'DELETE'}); //error handling?
    this.setState({visible: false});
  }

  acceptPotential(){
    var fetchOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify(this.props)};

    alert("accept potential definition: " + this.props.term + " id: " + this.props.entry_id);
    fetch('/entries/', fetchOptions)
      .then(fetch('/potentials/' + this.props.entry_id, {method: 'DELETE'}));
     //error handling? !!!
    this.setState({visible: false});
  }

  render() {
    return (this.state.visible && <div>
    {super.render()}
    <Button label="reject" onClick={this.rejectPotential} raised />
    <Button label="accept" onClick={this.acceptPotential} raised primary />
    </div>)
  }
}

export default PotentialCard;