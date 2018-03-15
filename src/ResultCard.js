import React, { Component } from 'react';
import { Card, CardTitle, CardText} from 'react-toolbox/lib/card';

//TODO: tooltip explanation that one is the author and one is the author's identity?
//TODO: stop inline styling

class ResultCard extends Component {


  titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

//uses definitions in link bc github
  defWithLinks(def) {
    return def.split('\`').map(function(word, index) {
      var url = "/definitions/?=" + word;
      var newWord = index % 2 !== 0 ? <a href={url}>{word}</a> : word;
      return newWord;
    });

  }


  render() {

    return(
      <div>
        <Card style={{width: '350px', margin: '10px'}}>
        <CardTitle
          title={this.titleCase(this.props.term)}
        />
        <CardText>{this.defWithLinks(this.props.def)}<p style={{textAlign: 'right', color: '#606060', fontSize: '16px', paddingTop: '10px'}}>{this.props.name}</p><p style={{textAlign: 'right', color: '#606060', fontSize: '12px', lineHeight: '12px'}}>{this.props.id}</p></CardText>
      </Card>
    </div>
    );
  }



}

export default ResultCard;