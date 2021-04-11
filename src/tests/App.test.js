import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';


test('renders h1 element', () => {
    render(<App />);
  const linkElement = screen.getByText('Weather App');
  expect(linkElement).toBeInTheDocument();
});
