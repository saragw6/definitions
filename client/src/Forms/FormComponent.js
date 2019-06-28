import React, {Component} from 'react';
import '../stylesheets/Forms.css'; // Import css modules stylesheet as styles
import InputForm from '../Pages/InputFormComponent'
import {Button, Snackbar} from '../Libraries/ReactToolboxLibrary';

export default class Form extends Component {
  // Set default props
  static defaultProps = {
    inputs: [{labelInput: '', isRequired: true}],
    title: 'Default Title',
    content: (<div/>),
    stateBar: false,
    onSubmit: (e) => { e.preventDefault() },
    onClickSnackBar: (e, i) => { e.preventDefault() },
    onTimeoutSnackBar: (e,i) => { e.preventDefault() }
  }

  createInputs = (inputs) => {
    return inputs.map((input, index) => {
      return (<InputForm key={index} label={input.label} value={input.value} labelInput={input.labelInput}
                         isRequired={input.isRequired} showError={input.showError} errorStyle={input.errorStyle}
                         onChange={input.onChange} multiline={input.multiline} onBlur={input.onBlur}/>)
    })
  }

  hasErrors() {
    return this.props.inputs.some((input) => input.isRequired && input.value.trim().length === 0);
  }

  render() {
    const {title, hideTitle, hideButton, content, inputs, onSubmit, onClickSnackBar, onTimeoutSnackBar, stateBar, snackbarMessage} = this.props;

    const titleDiv = hideTitle ? null : (<div className='page-title'>{title}</div>)
    const buttonDiv = hideButton ? null : (
      <div className='submitBox'>
        <Button className='queerButton' onMouseUp={onSubmit} label='Submit' raised primary/>
      </div>
    )

    return (
      <div className="flex-container" data-testid='form-container'>
        <form onSubmit={onSubmit} data-testid='request-form'>
          <div className='form'>
            {titleDiv}
            {content}
            <span className='error'>* Required</span>

            <div className='inputsBox'>
              {this.createInputs(inputs)}
            </div>
            {buttonDiv}
          </div>
        </form>

        <Snackbar
          action='Dismiss'
          active={stateBar}
          label={snackbarMessage}
          timeout={3000}
          type='accept'
          onClick={onClickSnackBar}
          onTimeout={onTimeoutSnackBar}
          className='queerSnackbar'
        />

      </div>
    )
  }
}
