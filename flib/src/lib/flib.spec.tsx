import { render } from '@testing-library/react';

import Flib from './flib';

describe('Flib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Flib />);
    expect(baseElement).toBeTruthy();
  });
});
