import React from 'react';
import Form from './FormComponent';
import {Chip, theme, ThemeProvider} from "../Libraries/ReactToolboxLibrary";

import '../stylesheets/defineForm.css';

const snackbarMessage = "One or more required fields are blank";
const submissionFailureMessage = "Oh no! Something went wrong, please try again.";

const submissionSuccessMessage = (termName) => {
  return `Your proposed definition for ${termName} was submitted successfully`
};

const defaultFieldValues = {
  submitterName: "",
  termName: "",
  termDefinition: "",
  termMeaningToSubmitter: "",
  submitterIdentities: "",
};

export default class DefineForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedTerms: ['Loading requests...'],
      stateBar: false,
      snackbarMessage: '',
      ...defaultFieldValues
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(label, isRequired, showErrorInput, value) {
    this.setState({[label]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.formChild.hasErrors()) {
      this.setState({
        stateBar: true,
        snackbarMessage: snackbarMessage
      });

      return;
    }

    const state = this.state;

    const payload = {
      name: state.submitterName,
      term: state.termName,
      definition: state.termDefinition,
      action: 1,
      identity: state.submitterIdentities,
      explanation: state.termMeaningToSubmitter
    };

    const respondToFetch = (response) => {
      let wasSuccessful = response.status === 200;
      let snackBarMessage = wasSuccessful ? submissionSuccessMessage(state.termName) : submissionFailureMessage;

      if (wasSuccessful) {
        this.setState(defaultFieldValues);
      }

      this.setState({stateBar: true, snackbarMessage: snackBarMessage})
    }

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    fetch('/entries', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(respondToFetch);
  }

  content() {
    let requestedChips = this.state.requestedTerms.map(term => {return <Chip>{term}</Chip>});

    return(
      <div className="form-header">
        <p>Queer Undefined is a collection of informal definitions to help people understand LGBTQ+ terms they don't know!</p>

        <p>Help us out by picking a word and telling us what it means to you. Choose any word you think deserves to be in this collection, and feel free to include your personal perspective and explain why the word is meaningful to you. If you want, you can tell us a bit about your identity to help make sure we're including definitions from people with various identities.</p>

        <p>To link to other words use tick marks (NOT single quotes). For example, <code>`LGBTQ+`</code> will link to the definition of LGBTQ+.</p>

        <p>Check out the <a href='https://queerundefined.com/about'>about</a> page to read more about this project.</p>

        <p>The following terms were requested by other users. If you know what one means, please contribute a definition!</p>

        {requestedChips}
      </div>
    );
  }

  handleSnackbarClick = (event, instance) => {
    this.setState({ stateBar: false, snackbarMessage: ''});
  };

  handleSnackbarTimeout = (event, instance) => {
    this.setState({ stateBar: false, snackbarMessage: '' });
  };

  //randomly display 10 requested terms
  getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
      return arr;
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  componentDidMount() {
    fetch('/requested')
        .then(response => response.json())
        .then(data => {
          let requestedTerms = this.getRandom(data, 10) || ['No requests yet!'];
          this.setState({ requestedTerms: requestedTerms })
        });
  }

  render() {
    const {
      submitterName,
      termName,
      termDefinition,
      termMeaningToSubmitter,
      submitterIdentities,
      stateBar,
      snackbarMessage
    } = this.state;

    return(
      <ThemeProvider theme={theme}>
        <Form title='Submit a Definition'
              formType='define'
              ref={instance => { this.formChild = instance; }}
              onSubmit={this.handleSubmit}
              content={this.content()}
              onClickSnackBar={this.handleSnackbarClick.bind(this)}
              onTimeoutSnackBar={this.handleSnackbarTimeout.bind(this)}
              stateBar={stateBar}
              snackbarMessage={snackbarMessage}
              inputs={[
                {
                  labelInput: 'Name',
                  subtitle: '(Only if you want credit)',
                  isRequired: false,
                  label: 'submitterName',
                  value: submitterName,
                  onChange: this.handleChange
                },
                {
                  labelInput: 'What term are you defining?',
                  isRequired: true,
                  label: 'termName',
                  value: termName,
                  onChange: this.handleChange
                },
                {
                  labelInput: 'Define the term and/or say what it means to you:',
                  isRequired: true,
                  label: 'termDefinition',
                  value: termDefinition,
                  onChange: this.handleChange,
                  multiline: true,
                  maxLength: 3000
                },
                {
                  labelInput: 'What has this term meant in your experience? How have you embodied this term?',
                  isRequired: false,
                  label: 'termMeaningToSubmitter',
                  value: termMeaningToSubmitter,
                  onChange: this.handleChange,
                  multiline: true,
                  maxLength: 3000
                },
                {
                  labelInput: 'How do you identify?',
                  subtitle: '(Optional. Ex: race, location, age, gender identity, socioeconomic status, etc)',
                  isRequired: false,
                  label: 'submitterIdentities',
                  value: submitterIdentities,
                  onChange: this.handleChange
                },
              ]}
        >
        </Form>
      </ThemeProvider>
    );
  }
}
