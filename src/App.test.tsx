import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const element = screen.getByText(/ATT Sales Tool/i);
  expect(element).toBeInTheDocument();
});
