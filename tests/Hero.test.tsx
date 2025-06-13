import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

// Importing jest-dom for extended matchers
describe('Hero component', () => {
  it('renders my name and role', () => {
    render(<Hero />);
    expect(screen.getByText(/Javier Arancibia/i)).toBeInTheDocument();
    expect(screen.getByText(/Front End Developer & Product Builder/i)).toBeInTheDocument();
  });

  it('has an About Me button', () => {
    render(<Hero />);
    const button = screen.getByRole('link', { name: /About Me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/about');
  });
});
