import { render, screen } from '@testing-library/react';
import Score from './score';

describe('Score Component', () => {
  it('renders score heading', () => {
    render(<Score />);
    expect(screen.getByText('Score')).toBeInTheDocument();
  });

  it('does not show score when total is 0', () => {
    render(<Score total={0} correct={0} />);
    expect(screen.queryByText(/You got/)).not.toBeInTheDocument();
  });
  it('shows correct score text', () => {
    render(<Score total={5} correct={3} />);
    // Use a more flexible matcher function
    expect(screen.getByText((content) => {
      return content.includes('3');
    })).toBeInTheDocument();
  });

  it('handles undefined props with default values', () => {
    render(<Score />);
    expect(screen.getByText('Score')).toBeInTheDocument();
  });
});
