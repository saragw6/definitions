import React, { Component } from 'react';
import '../stylesheets/Forms.css'; // Import css modules stylesheet as styles
import { Input } from '../Libraries/ReactToolboxLibrary';

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {label: '', showError: false, errorStyleBck: 'formInput'};
  }

  // Set default props
  static defaultProps = {
    name: 'name',
    isRequired: false,
    inputType: 'Text',
    labelInput: 'Default question',
    inputHint: 'Your answer',
    labelRequiredMessage: 'This is a required question'
  }

  handleChange = (name, isRequired, value) => {
    console.log('Name', name, ' Val', value, ' isRequired', isRequired)
    if(value.length === 0 && isRequired)
      this.setState({...this.state, [name]: value, showError: true, errorStyleBck: 'formInput formInputError'});
    else
      this.setState({...this.state, [name]: value, showError: false, errorStyleBck: 'formInput'});
  };

  render() {
    const { name, inputType, labelInput, inputHint, labelRequiredMessage, isRequired } = this.props;
    const { showError, errorStyleBck } = this.state;

    return (
      <div className={errorStyleBck}>
        <label>{labelInput}</label>&nbsp;{(isRequired  && <span className="error">*</span> )}
        <Input style={{background: 'transparent'}} type={inputType} hint={inputHint} value={this.state.label} name={name} onChange={this.handleChange.bind(this, 'label', isRequired)} maxLength={50} />
        {(showError  &&
          <label className='error errorMessage'>{labelRequiredMessage}</label>)
        }
      </div>
    )
  }
}