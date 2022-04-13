import { render, screen } from '@testing-library/react';
import Timer from './Timer';

test('shows the initial time', () => {
  render(<Timer initial={40} />);

  const percentage = screen.getByText('40');
  expect(percentage).toBeInTheDocument();
});

test('decrements the timer', async () => {
  render(<Timer initial={40} />);

  const percentage = await screen.findByText('39');
  expect(percentage).toBeInTheDocument();
});
