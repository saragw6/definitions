
// Manages the state for a single text input in the form
const TextInputState = function(component, key, label, isRequired) {
  const updateCb = (label, isRequired, showError, value) => {
    component.setState(prevState => ({
      [key]: {
        error: value === '',
        value
      }
    }))
  }

  const blurCb = () => {
    component.setState(prevState => ({
      [key]: {
        error: prevState[key].value === '',
        value: prevState[key].value
      }
    }))
  }

  return {
    // Only to be called from component constructor
    initialize: function () {
      component.state[key] = {
        value: '',
        error: false
      }
    },

    // Only to be called from component render method
    createInputParams: function(state) {
      return {
        labelInput: label,
        isRequired: isRequired,
        onChange: updateCb,
        onBlur: blurCb,
        showError: state[key].error,
        value: state[key].value
      }
    }
  }
}

export const ReportFormState = component => {
  const questions = [
    TextInputState(component, 'email', 'Email address', true),
    TextInputState(component, 'reason', 'Why should this definition be taken down?', true)
  ]

  return {
    // Only to be called from component constructor
    initialize: function () {
      component.state = {}
      questions.forEach(q => q.initialize())
    },

    // Only to be called from component render method
    createInputParams: function (state) {
      return questions.map(q => q.createInputParams(state))
    }
  }
}

