import React, { Component } from 'react';
import '../stylesheets/Forms.css'; // Import css modules stylesheet as styles
import { Input } from '../Libraries/ReactToolboxLibrary';

const normalStyle = 'formInput';
const errorStyle = 'formInput formInputError';

export default class InputForm extends Component {
  // Set default props
  static defaultProps = {
    isRequired: false,
    inputType: 'Text',
    labelInput: 'Default question',
    inputHint: 'Your answer',
    onChange: () => {},
    labelRequiredMessage: 'This is a required question',
    maxLength: 50,
    multiline: false,
    isUnitTest: false,
  }

  handleChange = (label, isRequired, value) => {
    const {onChange} = this.props;
    const showError = 'showError'.concat(label);
    onChange(label, isRequired, showError, value);
  };

  render() {
    const { inputType, labelInput, inputHint, labelRequiredMessage, isRequired, value, label, showError, maxLength, isUnitTest } = this.props;
    const style = showError ? errorStyle : normalStyle;
    const multiline = this.props.multiline && !isUnitTest; /* Disabled during tests due to a bug in react-toolbox that breaks specs when multiline is enabled in the context of unit tests */

    return (
      <div className={style}>
        <label>{labelInput}</label>&nbsp;{(isRequired  && <span className="error">*</span> )}
        <Input data-testid='request-input' className="queerInput" style={{background: 'transparent'}} type={inputType} hint={inputHint} value={value} onChange={this.handleChange.bind(this, label, isRequired)} maxLength={maxLength} multiline={multiline} />
        {(showError  &&
          <label className='error errorMessage'>{labelRequiredMessage}</label>)
        }
      </div>
    )
  }
}
