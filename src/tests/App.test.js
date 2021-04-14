import { render, screen } from '@testing-library/react';
import App from '../components/App';
import {location} from '../data/forecast.json';


test('renders', () => {
    render(<App location={location}/>);
  const linkElement = screen.getByText('Weather App');
  expect(linkElement).toBeInTheDocument();
});
