import React, {Component} from 'react';
import Form from './FormComponent';
import {theme, ThemeProvider} from "../Libraries/ReactToolboxLibrary";

/*const RequestForm = () => {
    return(
      <div style={{"display":"flex","width":"100%","justifyContent":"center"}}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeJjF6QREqxIZDOc5t6QmXtAbjTxTVjaMZoUOJU1TX-gyk9bw/viewform?embedded=true" width="80%" height="562px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </div>
    );
}

export default RequestForm;*/

export default class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {Term:'', showErrorTerm: false, errorStyleTerm: 'formInput', stateBar: false, snackbarMessage: ''};
  }

  createContent = () => {
    return (<div>
      <p>I'm collecting informal definitions to help people understand LGBTQ+ terms they don't know!</p>
      <p>You can request a term here that you want someone else to define on <a
        href='queerundefined.com'>queerundefined.com</a></p>
      <p>You can read more about this project here: <a
        href='http://queerundefined.com/about'>http://queerundefined.com/about</a></p>
    </div>)
  }

  handleSubmit(e) {
    if(e) e.preventDefault();
    const term = this.state.Term;
    if(term.trim().length === 0) {
      const snackBarMessage = 'You should provide a term!'
      this.setState({...this.state,
        stateBar: true, showErrorTerm: true, errorStyleTerm:'formInput formInputError', snackbarMessage: snackBarMessage})
    }
    else {
      fetch('/requested/' + term, {method: 'POST'})
        .then(response => {
          let snackBarMessage = 'Your request for '.concat(term).concat(' was successful')
          if(response.status !== 200)
            snackBarMessage = 'Oh no! Something went wrong, please try again.'

          this.setState({...this.state, stateBar: true, Term: '', snackbarMessage: snackBarMessage})
        });
    }
  }

  handleSnackbarClick = (event, instance) => {
    this.setState({ ...this.state, stateBar: false});
  };

  handleSnackbarTimeout = (event, instance) => {
    this.setState({ ...this.state, stateBar: false});
  };

  handleChange = (label, isRequired, showError, errorStyle ,value) => {
    if(value.length === 0 && isRequired)
      this.setState({...this.state, [label]: value, [showError]: true, [errorStyle]: 'formInput formInputError'});
    else
      this.setState({...this.state, [label]: value, [showError]: false, [errorStyle]: 'formInput'});
  };

  render() {
    const { showErrorTerm, errorStyleTerm, Term, stateBar, snackbarMessage } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Form title='Request a Term | Queer Undefined'
              content={this.createContent()}
              inputs={[
                {labelInput: 'What term do you want defined?', isRequired: true, label:'Term', value: Term,
                  onChange:this.handleChange, showError: showErrorTerm, errorStyle: errorStyleTerm }
                ]}
              onSubmit={this.handleSubmit.bind(this)}
              onClickSnackBar={this.handleSnackbarClick.bind(this)}
              onTimeoutSnackBar={this.handleSnackbarTimeout.bind(this)}
              stateBar={stateBar}
              snackbarMessage={snackbarMessage}
        >
        </Form>
      </ThemeProvider>
    )
  }
}