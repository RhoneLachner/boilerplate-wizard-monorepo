import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to React JS Boilerplate')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Home />);
    expect(screen.getByText(/A modern, production-ready React boilerplate/)).toBeInTheDocument();
  });

  it('renders technology stack list', () => {
    render(<Home />);
    expect(screen.getByText('React 18')).toBeInTheDocument();
    expect(screen.getByText('Vite')).toBeInTheDocument();
    expect(screen.getByText('React Router')).toBeInTheDocument();
    expect(screen.getByText('Vitest')).toBeInTheDocument();
    expect(screen.getByText('Playwright')).toBeInTheDocument();
  });

  it('renders counter with initial value of 0', () => {
    render(<Home />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
nTheDocument();

});
