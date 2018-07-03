import React, { Component } from 'react';
import { Card, CardTitle, CardText} from 'react-toolbox/lib/card';

// import Button from 'react-toolbox/lib/button/Button';
// import Tooltip from 'react-toolbox/lib/tooltip';
// const TooltipButton = Tooltip(Button);


//TODO: tooltip explanation that one is the author and one is the author's identity?
//TODO: stop inline styling

//todo: link identities too?

class ResultCard extends Component {


  titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  lowerCase(str) {
    return str.toLowerCase();
  }


  defWithLinks(def) {
    if (def === undefined) {
      return;
    }
    return def.split('`').map(function(word, index) {
      var url = "/#/" + word;
      var newWord = index % 2 !== 0 ? <a href={url} key={url + index}>{word}</a> : word;
      return newWord;
    });
  }

  paragraphsAndLinks(def) {
    if (def === undefined) {
      return;
    }
    var paragraphs = def.split("\n");
    //console.log(paragraphs);
    if (paragraphs.length === 1) {return this.defWithLinks(def);}
    //console.log("paragraphs > 1:\n" + paragraphs);
    return paragraphs.map((paragraph, index) => {
      if (paragraph === "") {return "";}
      if (paragraphs.length - 1 === index) {return this.defWithLinks(paragraph);}
      return <div key={paragraph + index}>{this.defWithLinks(paragraph)}<br /><br /></div>
    });
  }

  render() {
    console.log(this.props);
    // var name;
    // var identity;
    // if (this.props.author !== undefined) {
    //   console.log(this.props.author);
    //   var result = fetch('/authors/' + this.props.author).then(res => {return res.json()}).then(json => {name = json.name; identity = json.identity});
    //   console.log(result);
    // }



    return(
      <div>
        <Card style={{width: '350px', margin: '10px'}}>
        <CardTitle
          title={this.lowerCase(this.props.term)}
        />
        <CardText>{this.paragraphsAndLinks(this.props.definition)}<br /><br />{this.defWithLinks(this.props.explanation)}<p style={{textAlign: 'right', color: '#606060', fontSize: '16px', paddingTop: '10px'}}>{this.props.name}</p><p style={{textAlign: 'right', color: '#606060', fontSize: '12px', lineHeight: '12px'}}>{this.props.author_id}</p></CardText>
      </Card>
    </div>
    );
  }


}

//report button on corner: 
//<div style={{textAlign: 'right', marginTop: '-65px', marginBottom: '25px', paddingRight: '5px'}}>
//          <TooltipButton icon='error_outline' tooltip="report"  style={{minWidth:'30px', padding:'0', paddingLeft:'6px', marginRight:'-6px'}}/>
//        </div>

export default ResultCard;