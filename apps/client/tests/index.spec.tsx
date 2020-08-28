import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MockedProvider>
        <Index />
      </MockedProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
