// 🧙‍♂️💬 All of these example tests can be removed or customized to your liking!

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

// Mock Next.js router
jest.mock('next/navigation', () => ({
    usePathname: () => '/',
}));

describe('Home Page', () => {
    it('renders the main heading', () => {
        render(<Home />);
        const heading = screen.getByText(
            'BOILERPLATE WIZARD - Next.js & TypeScript'
        );
        expect(heading).toBeInTheDocument();
    });

    it('shows the description text', () => {
        render(<Home />);
        const description = screen.getByText(
            'A modern Next.js + TypeScript foundation with essential tools'
        );
        expect(description).toBeInTheDocument();
    });
});
