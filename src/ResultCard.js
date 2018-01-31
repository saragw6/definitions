import React, { Component } from 'react';
import { Card, CardTitle, CardText} from 'react-toolbox/lib/card';


class ResultCard extends Component {

  render() {

    return(
      <div>
        <Card style={{width: '350px', margin: '10px'}}>
        <CardTitle
          title={this.props.term}
        />
        <CardText>{ this.props.def }</CardText>
      </Card>
    </div>
    );
  }

}

export default ResultCard;