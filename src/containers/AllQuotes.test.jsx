import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllQuotes from './AllQuotes';
import { MemoryRouter } from 'react-router-dom';

describe('AllQuotes container', () => {
  it('displays a loading screen then a list of quotes', async () => {
    render(
      <MemoryRouter>
        <AllQuotes />
      </MemoryRouter>
    );

    screen.getByAltText('Loading');

    const ul = await screen.findByTestId('quotes');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
