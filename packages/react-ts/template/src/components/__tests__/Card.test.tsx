import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  it('renders title when provided', () => {
    render(<Card title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<Card description="Test description" />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <Card>
        <div>Child content</div>
      </Card>
    );
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('renders title, description, and children together', () => {
    render(
      <Card title="Test Title" description="Test description">
        <div>Child content</div>
      </Card>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Card className="custom-class" title="Test" />);
    const cardElement = screen.getByText('Test').closest('div');
    expect(cardElement).toHaveClass('custom-class');
  });

  it('has default styling classes', () => {
    render(<Card title="Test" />);
    const cardElement = screen.getByText('Test').closest('div');
    expect(cardElement).toHaveClass('bg-white', 'p-6', 'rounded-lg', 'shadow-sm');
  });
});
