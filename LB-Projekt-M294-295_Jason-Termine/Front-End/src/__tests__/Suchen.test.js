import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Details from "../components/Details"

/********** ChatGPT ab dieser Linie bis und mit Line 21 **********/
test('renderd die Details richtig', () => {
    const props = {
      name: 'Tether',
      rank: 3,
      price: 3333,
    };
  
    const { getByText } = render(<Details {...props} />);
  
    // Überprüfe, dass das Komponent die Details richtig renderd
    expect(getByText('Details')).toBeInTheDocument();
    expect(getByText('Name: Tether')).toBeInTheDocument();
    expect(getByText('Rank: 3')).toBeInTheDocument();
    expect(getByText('Price USD: 3333')).toBeInTheDocument();
  });