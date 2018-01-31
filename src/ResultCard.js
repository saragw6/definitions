import React, { Component } from 'react';
import { Card, CardTitle, CardText} from 'react-toolbox/lib/card';

const defs = [{
  'term': 'LGBTQ', 'definition': 'An acronym that stands for Lesbian, Gay, Bisexual, Transgender, Queer. Used as an umbrella term for several gender and sexual minorities'
}];


// https://reactjs.org/docs/lists-and-keys.html
// to update: filter the definitions/terms that you want to include elsewhere.
// then for each object, pass it to ResultCard to create a card.
// make a thing called resultList
// 


//  function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

class ResultCard extends Component {

  getDef(searchterm) {
    var searchdefs = defs.filter((entry) => { return entry["term"] === searchterm });


    if (!(searchdefs[0] === undefined)) {
      console.log(searchdefs[0]["definition"]);
    }

    var result = searchdefs[0] === undefined ? [] : searchdefs[0]["definition"]; //change this

    return result;
  }

//<CardText>{ defs[this.props.term] }</CardText>

  render() {

    // return(
    //   <div>
    //     <Card style={{width: '350px'}}>
    //     <CardTitle
    //       title={this.props.term}
    //     />
    //     <CardText>{ this.getDef(this.props.term) }</CardText>
    //   </Card>
    // </div>
    // );

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