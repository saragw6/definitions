import React from 'react';
import 'jest-dom/extend-expect'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from "history";
import { App } from '../src/Libraries/ComponentsLibrary';
import { render, fireEvent, waitForElement} from 'react-testing-library';
import Auth from '../src/__mocks__/Auth'
 
const auth = new Auth();

// Our APP component relies on the router being in context
function renderWithRouter(
    ui,
    {
      route = '/*',
      history = createMemoryHistory({ initialEntries: [route] }),
    } = {}
  ) {
    return {
      ...render(<Router history={history}>{ui}</Router>),
      // adding `history` to the returned utilities to allow us
      // to reference it in our tests
      history,
    }
  }

  
it('Renders main page', async () => {
    // Arrange
    const { debug, getByTestId } = renderWithRouter(<App auth={auth} term="" />)
    const input_for_SearchTerm = getByTestId('mainInputSearchTerm')

    // Assert
    expect(input_for_SearchTerm.value).toBe('')
  
    // Act
    fireEvent.change(input_for_SearchTerm, {target: {value: 'abrogender'}})
  
    // Assert
    expect(input_for_SearchTerm.value).toBe('abrogender')
    console.log(input_for_SearchTerm.value)

  });