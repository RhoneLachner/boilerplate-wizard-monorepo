import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />);
    expect(
      screen.getByText('BOILERPLATE WIZARD - React & JavaScript')
    ).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Home />);
    expect(
      screen.getByText('A minimal React foundation with essential tools')
    ).toBeInTheDocument();
  });
});
