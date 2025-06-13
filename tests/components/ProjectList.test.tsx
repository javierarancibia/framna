import { render, screen, fireEvent } from '@testing-library/react';
import ProjectList from '@/components/ProjectList';

const mockProjects = [
  {
    id: '1',
    name: 'Project One',
    description: 'This is project one.',
    image: 'https://example.com/image.jpg',
  },
  {
    id: '2',
    name: 'Project Two',
    description: 'This is project two.',
  },
];

describe('ProjectList component', () => {
  it('renders a list of projects', () => {
    render(<ProjectList projects={mockProjects} />);
    expect(screen.getByText('Project One')).toBeInTheDocument();
    expect(screen.getByText('Project Two')).toBeInTheDocument();
  });

  it('shows delete button if admin is true', () => {
    render(<ProjectList projects={mockProjects} admin />);
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    expect(deleteButtons.length).toBe(2);
  });

  it('does not show delete button if admin is false', () => {
    render(<ProjectList projects={mockProjects} />);
    const deleteButtons = screen.queryAllByRole('button', { name: /delete/i });
    expect(deleteButtons.length).toBe(0);
  });

  it('shows message when no projects are provided', () => {
    render(<ProjectList projects={[]} />);
    expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
  });

  it('calls confirm when delete is clicked', () => {
    window.confirm = jest.fn(() => false); // cancel the delete
    render(<ProjectList projects={mockProjects} admin />);
    fireEvent.click(screen.getAllByRole('button', { name: /delete/i })[0]);
    expect(window.confirm).toHaveBeenCalledWith(
      'Are you sure you want to delete this project?'
    );
  });
});
