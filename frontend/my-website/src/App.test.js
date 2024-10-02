import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const headingElement = screen.getByText(/Pratik Shrestha's Personal Website/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  
  const homeLink = screen.getByText(/Home/i);
  const projectsLink = screen.getByText(/Projects/i);
  const aboutLink = screen.getByText(/About/i);
  const contactLink = screen.getByText(/Contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
