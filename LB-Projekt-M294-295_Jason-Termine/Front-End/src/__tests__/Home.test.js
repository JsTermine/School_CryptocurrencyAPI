import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Details from "../components/Details"

/********** ChatGPT ab dieser Linie bis und mit Line 37 **********/
test('renderd die Details richtig', () => {
    const props = {
      name: 'Bitcoin',
      rank: 1,
      price: 50000,
    };
  
    const { getByText } = render(<Details {...props} />);
  
    // Überprüfe, dass das Komponent die Details richtig renderd
    expect(getByText('Details')).toBeInTheDocument();
    expect(getByText('Name: Bitcoin')).toBeInTheDocument();
    expect(getByText('Rank: 1')).toBeInTheDocument();
    expect(getByText('Price USD: 50000')).toBeInTheDocument();
  });
  
  test('details mit anderen props rendern', () => {
    const props = {
      name: 'Ethereum',
      rank: 2,
      price: 3000,
    };
  
    const { getByText } = render(<Details {...props} />);
  
    // Überprüfe, dass das Komponent Details richtig rendert mit anderen Werten
    expect(getByText('Details')).toBeInTheDocument();
    expect(getByText('Name: Ethereum')).toBeInTheDocument();
    expect(getByText('Rank: 2')).toBeInTheDocument();
    expect(getByText('Price USD: 3000')).toBeInTheDocument();
  });