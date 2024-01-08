import React from 'react';

function Details(props) {

  // Property Variablen definieren
  const { name, rank, price } = props;

  const listStyle = {
    textAlign: 'left',
    fontSize: 30,
  };

  return (
    <div style={{ marginTop: 60}}>
      <h1 style={{ textAlign: 'center', fontSize: 50, fontWeight: 600, marginBottom: -30, marginLeft: -15 }}>
        Details
      </h1>
      <div className="HomeContainer">
        <div className="HomeContent">
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {/* Properties setzen */}
            <li style={listStyle}>Name: {name}</li>
            <li style={listStyle}>Rank: {rank}</li>
            <li style={listStyle}>Price USD: {price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
