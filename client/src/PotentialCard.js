import React from 'react';
import ResultCard from './ResultCard.js';
import Button from 'react-toolbox/lib/button/Button';

class PotentialCard extends ResultCard {
  rejectPotential(){
    alert("reject potential definition");
  }

  acceptPotential(){
    alert("accept potential definition");
  }

  render() {
    return <div>
    {super.render()}
    <Button label="reject" onClick={this.rejectPotential} raised />
    <Button label="accept" onClick={this.acceptPotential} raised primary />
    </div>
  }
}

export default PotentialCard;