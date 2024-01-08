import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import GlobalNavigation from '../components/GlobalNavigation';

/********** ChatGPT ab dieser Linie bis und mit Line 33 **********/
test('rendert die Navigation richtig', () => {
    const { getByText } = render(
      <Router>
        <GlobalNavigation />
      </Router>
    );
  
    // Überprüfe, dass das Komponent die Links der Navigation richtig rendert
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Suchen')).toBeInTheDocument();
  });
  
  test('hat die richtigen Linkziele', () => {
    const { getByText } = render(
      <Router>
        <GlobalNavigation />
      </Router>
    );
  
    // Überprüfe, dass die Links die richtigen Ziele haben
    const homeLink = getByText('Home');
    const suchenLink = getByText('Suchen');
  
    expect(homeLink.getAttribute('href')).toBe('/');
    expect(suchenLink.getAttribute('href')).toBe('/suchen');
  });  