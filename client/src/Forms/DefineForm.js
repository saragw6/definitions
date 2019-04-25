import React from 'react';
import Form from './FormComponent';
import {theme, ThemeProvider} from "../Libraries/ReactToolboxLibrary";

export default class DefineForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitterName: "",
      termName: "",
      termDefinition: "",
      termMeaningToSubmitter: "",
      submitterIdentities: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(label, isRequired, showError, value) {
    this.setState({ [label]: value });
  }

  handleSubmit(event) {
    const state = this.state;

    const payload = {
      /* ???: submitterName */
      term: state.termName,
      definition: state.termDefinition,
      action: 1,
      identity: state.submitterIdentities,
      explanatin: state.termMeaningToSubmitter
    };

    console.log("Submitting!", this.state);
    console.log("Submitting!", payload);

    event.preventDefault();
  }

  content() {
    return(
      <div className="define-form">
        <p>I'm collecting informal definitions to help people understand LGBTQ+ terms they don't know!</p>

        <p>Help me out by picking a word and telling me what it means to you. Choose any word you think deserves to be in this collection. If you want, you can tell me a bit about your identity to help me make sure I'm including definitions from people with various identities.</p>

        <p>To link to other words use tick marks (NOT single quotes). For example, `LGBTQ+` will link to the definition of LGBTQ+.</p>

        <p>People have requested definitions for these terms:</p>

        <p>Bisexual Jesus | tea | paroromantic | pomosexual  | demifluid | therian | kiki | apressexual | binarism | demiflux | gendervague | pondusgender | omnisensual | pillow princess | bicurious | gynosexual | epicene | ventulian | fingender | wtfsexual | transfeminine | transmasculine | fraysexual | nonbinary femme | body dysphoria | pass | radfem | zedsexual | brotherboy | sistergirl | nblw | split attraction model | juxera | cassgender | metamour | nonbinary girl | greyromantic | intergender | minsexual | alterous attraction | trisexual | lesbian labrys | librafluid | juxera | blue jean femme | ceterosexual | aperiosexual | bellusromantic | genderfuck | two spirit | gendernull | allosexual | queerplatonic | bossy bottom | to read | doe | stag | asexy | generous | biromantic homosexual | fluidflux | aquarigender | arithmagender</p>
      </div>
    );
  }

  render() {
    const {
      submitterName,
      termName,
      termDefinition,
      termMeaningToSubmitter,
      submitterIdentities
    } = this.state;

    return(
      <ThemeProvider theme={theme}>
        <Form title='Submit a Definition'
              onSubmit={this.handleSubmit}
              content={this.content()}
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
                  onChange: this.handleChange
                },
                {
                  labelInput: 'What has this term meant in your experience? How have you embodied this term?',
                  isRequired: false,
                  label: 'termMeaningToSubmitter',
                  value: termMeaningToSubmitter,
                  onChange: this.handleChange
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
