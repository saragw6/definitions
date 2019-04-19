
// Manages the state for a single text input in the form
export const TextInputState = (component, key) => {
  const defaultState = {
    value: '',
    error: false
  }

  const onChange = (label, isRequired, showError, value) => {
    component.setState(prevState => ({
      [key]: {
        error: value === '',
        value
      }
    }))
  }

  const onBlur = () => {
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
      component.state[key] = defaultState
    },

    /* 
     * - Only to be called from component render method
     * - result will be passed as props to `client/src/Pages/InputFormComponent`
     */
    createInputParams: function(state) {
      return {
        onChange: onChange,
        onBlur: onBlur,
        showError: state[key].error,
        value: state[key].value
      }
    },

    reset() {
      component.setState({
        [key]: defaultState
      })
    }
  }
}

