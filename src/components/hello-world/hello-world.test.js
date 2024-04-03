import React from 'react';
import { render, screen } from '@testing-library/react';

import HelloWorld from './hello-word';

test('render hello worls', () => {
    render(<HelloWorld />)
    const title = screen.getByText(/hello world/i)
    expect(title).toBeInTheDocument();
})