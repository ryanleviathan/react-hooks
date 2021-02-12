import React from 'react';
import { render } from '@testing-library/react';
import Quote from './Quote';
import { MemoryRouter } from 'react-router-dom';

describe('Quote component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Quote 
          image="http://image.com"
          character="Bender"
          text="Hello"
        />
      </MemoryRouter>
    );

    expect(asFragment().toMatchSnapshot);
  });
});
