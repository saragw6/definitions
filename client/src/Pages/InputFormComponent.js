import React, { Component } from 'react';
import '../stylesheets/Forms.css'; // Import css modules stylesheet as styles
import { Input } from '../Libraries/ReactToolboxLibrary';

export default class InputForm extends Component {
  // Set default props
  static defaultProps = {
    isRequired: false,
    inputType: 'Text',
    labelInput: 'Default question',
    inputHint: 'Your answer',
    onChange: () => {},
    labelRequiredMessage: 'This is a required question',
    maxLength: 50
  }

  handleChange = (label, isRequired, value) => {
    const {onChange} = this.props;
    const errorStyle = 'errorStyle'.concat(label);
    const showError = 'showError'.concat(label);
    onChange(label, isRequired, showError, errorStyle, value);
  };

  render() {
    const { inputType, labelInput, inputHint, labelRequiredMessage, isRequired, value, label, showError, errorStyle, maxLength } = this.props;

    return (
      <div className={errorStyle}>
        <label>{labelInput}</label>&nbsp;{(isRequired  && <span className="error">*</span> )}
        <Input className="queerInput" style={{background: 'transparent'}} type={inputType} hint={inputHint} value={value} onChange={this.handleChange.bind(this, label, isRequired)} maxLength={maxLength} />
        {(showError  &&
          <label className='error errorMessage'>{labelRequiredMessage}</label>)
        }
      </div>
    )
  }
}