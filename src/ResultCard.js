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
        <CardText>{ this.props.def }<p style={{textAlign: 'right', color: '#606060', fontSize: '16px', paddingTop: '10px'}}>{this.props.name}</p><p style={{textAlign: 'right', color: '#606060', fontSize: '12px', lineHeight: '12px'}}>{this.props.id}</p></CardText>
      </Card>
    </div>
    );
  }

//stop inline styling

}

export default ResultCard;