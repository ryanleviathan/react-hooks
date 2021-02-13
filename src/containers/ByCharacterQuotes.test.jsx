import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ByCharacterQuotes from './ByCharacterQuotes';
import { MemoryRouter } from 'react-router-dom';

describe('ByCharacterQuotes container', () => {
  it('displays quotes by a character', async() => {
    render(
      <MemoryRouter>
        <ByCharacterQuotes match={{ params: { character: 'Bender' } }} />
      </MemoryRouter>
    );

    screen.getByText('Loading');

    const ul = await screen.findByTestId('quotes');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
