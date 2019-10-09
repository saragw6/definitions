import React, { Component } from 'react';
import { TooltipButton, Button, Card, CardTitle, CardText } from "../Libraries/ReactToolboxLibrary";

//TODO: tooltip explanation that one is the author and one is the author's identity?

//todo: link identities too?
//todo: why did i make a lowerCase() fn?

class ResultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true}
    this.rejectPotential = this.rejectPotential.bind(this);
    this.acceptPotential = this.acceptPotential.bind(this);
    this.isAuthenticated = props.isAuthenticated
  }

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
      var url = "/search/" + word;
      var newWord = index % 2 !== 0 ? <a href={url} key={url + index}>{word}</a> : word; ////
      return newWord;
    });
  }

  paragraphsAndLinks(def) {
    if (def === undefined) {
      return;
    }
    var paragraphs = def.split("\n");
    if (paragraphs.length === 1) {return this.defWithLinks(def);}
    return paragraphs.map((paragraph, index) => {
      if (paragraph === "") {return "";}
      if (paragraphs.length - 1 === index) {return this.defWithLinks(paragraph);}
      return <div key={paragraph + index}>{this.defWithLinks(paragraph)}<br /><br /></div>
    });
  }

  reportsFor(def) {
    if (def === undefined || def.reports === undefined) {
      return
    }

    const formatDate = isoStr => new Date(isoStr).toLocaleString()
    const reports = def.reports.map((report, key) =>
      <div key={key}>
        <p>
          {report.reason}
        </p>
        <p>
          - {report.email}, {formatDate(report.time_submitted)}
        </p>
        <hr />
      </div>
    )

    return (<div><b>Reports:</b>{reports}</div>)
  }

  rejectPotential(){
    this.props.entry.rejectCb()
    this.setState({visible: false});
  }

  acceptPotential(){
     this.props.entry.acceptCb()
     this.setState({visible: false});
   }

  render() {
    const { reportCb } = this.props

    return(
      <div>
       {this.state.visible &&
        <Card className='result-card'>
        <CardTitle className="result-card-title"
          title={this.lowerCase(this.props.entry["term"])}
        />
        <div className="actions">
         {(this.props.entry["action"] === 1) && this.props.entry["entry_id"]}
         { !this.props.reporting && (
           <TooltipButton
             className='flag-for-removal-button'
             icon='outlined_flag'
             tooltip='flag for removal'
             onClick={reportCb} />
         )}
       </div>
       <CardText>
         <span className="definition">
           {this.paragraphsAndLinks(this.props.entry["definition"])}
         </span>
         <br /><br />
         <span className="explanation">
           {this.defWithLinks(this.props.entry["explanation"])}
         </span>
         <p className="name">{this.props.entry["name"]}</p>
         <p className="identity">{this.props.entry["identity"]}</p>

         {(this.props.entry["action"] === 4) && this.reportsFor(this.props.entry)}
        </CardText>
        {(this.props.entry["action"] === 1) && <div><Button className="reject" label="reject" onClick={this.rejectPotential} raised />
      <Button className="accept queerButton" label="accept" onClick={this.acceptPotential} raised /></div>}
        {(this.props.entry["action"] === 4 && this.isAuthenticated) && <div><Button className="accept" label="dismiss" onClick={this.acceptPotential} raised />
      <Button className="reject queerButton" label="reject" onClick={this.rejectPotential} raised /></div>}
      </Card>}
    </div>
    );
  }


}

export default ResultCard;
