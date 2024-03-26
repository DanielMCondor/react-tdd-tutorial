import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPage } from '../components/main-page';

describe('main page mount', () => {
    it('must display the main page title', () => {
        render(<MainPage />)
        expect(screen.getByText(/simpsons quotes/i)).toBeInTheDocument();
    })
})