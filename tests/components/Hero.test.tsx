import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

// Importing jest-dom for extended matchers
describe('Hero component', () => {
  it('renders my name and role', () => {
    render(<Hero />);
    expect(screen.getByText(/Javier Arancibia/i)).toBeInTheDocument();
    expect(screen.getByText(/Front End Developer & Product Builder/i)).toBeInTheDocument();
  });

});
