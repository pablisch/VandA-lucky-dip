import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './components/Navbar';
// import App from './App';

// describe('App', () => { 
//   test('renders the App component', () => {
//     render(<App />);
//     // Check if the App component is present
//     const appElement = screen.getByLabelText('App');
//     expect(appElement).toBeInTheDocument();
//   });
// });

test('renders the Navbar component', () => {
  render(<Navbar handleCategoryChange={() => {}} />);

  // Check if the Navbar component is present
  const navbarElement = screen.getByLabelText('Navigation Bar');
  expect(navbarElement).toBeInTheDocument();

  // Check if the 'Get Lucky' category is present
  const getLuckyCategory = screen.getByLabelText('Select Random Category');
  expect(getLuckyCategory).toBeInTheDocument();

  // Check if the 'Paintings' category is present
  const paintingsCategory = screen.getByLabelText('Select Paintings Category');
  expect(paintingsCategory).toBeInTheDocument();

  // You can add similar checks for other categories as well
});
