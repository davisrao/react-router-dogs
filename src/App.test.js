import App from './App';
import { render } from '@testing-library/react';

test('renders learn react link', () => {
  const { container, getByText } = render(<App />);

  const h1Text = getByText("Loading...");
  expect(h1Text).toBeInTheDocument();
});
