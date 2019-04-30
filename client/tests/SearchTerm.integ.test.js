import React from 'react';
import 'jest-dom/extend-expect'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from "history";
import { App } from '../src/Libraries/ComponentsLibrary';
import { render, fireEvent, waitForElement} from 'react-testing-library';
const domTestingLib = require('dom-testing-library')
const { queries } = domTestingLib
import * as customQueries from '../src/utils/test-utils'

import Auth from '../src/__mocks__/Auth'

const entries = [
  {
      time_submitted: "2018-01-28T04:36:11.618Z",
      name: "Jace/Alec",
      term: "Abrogender",
      definition: "I define it as a sort of layer gender.",
      entry_id: 214,
      sort_as: ["Abrogender", "abrosexual", "abroromantic", "trans masc person"]
  }
]

const mockResponse = (data, status = 200) => jest.fn().mockReturnValue(
  Promise.resolve({
    status: status,
    json: () => data
  })
)
global.fetch = mockResponse(entries);

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

it('Renders main page and searches for a term', async () => {
    // Arrange
    const defaultQueries = customQueries.default
    const { getByTestId, getByText, history, container } = renderWithRouter(<App auth={auth} term="" />,
    { queries: { ...queries, ...defaultQueries }, })
    const input_for_SearchTerm = getByTestId('mainInputSearchTerm')
    // Assert
    expect(history.location.pathname).toBe('/*')
    expect(input_for_SearchTerm.value).toBe('')
    expect(fetch).toHaveBeenCalledWith('/terms')
  
    // Act
    await fireEvent.change(input_for_SearchTerm, {target: {value: 'abrogender'}})

    // Assert
    expect(input_for_SearchTerm.value).toBe('abrogender')

    // Act
    await fireEvent.keyDown(input_for_SearchTerm, { key: 'Enter', keyCode: 13})

    // Assert
    expect(fetch).toHaveBeenCalledWith('/entries/abrogender')

    // Act
    const resultCardDescriptionContainer = await waitForElement(() => getByText(/I define it as a sort of layer gender/))

    // Arrange
    const resultCard = container.querySelector('.result-card')
    const termHeaderInResultCard = resultCard.querySelector('h5')

    // Assert
    expect(termHeaderInResultCard.innerHTML).toBe('abrogender')
    expect(resultCard).toContainElement(resultCardDescriptionContainer)
  });