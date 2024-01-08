import React, { useState } from "react";
import "../css/App.css";
import Details from "./Details";

function Home() {

  // State um Responsedaten zu speichern
  const [data, setData] = useState({
    name: "",
    rank: 0,
    price: 0,
  });

  // State um Fehlermeldung zu setzen
  const [setSearchResult] = useState("");

  // API abfrage bei Bedarf starten
  const handleSearch = async (currencyName) => {

    try {
      // Request an API senden mit fetch
      const response = await fetch(`http://localhost:8080/all`);

      // Response in JSON-Format setzen
      const jsonData = await response.json();

      // JSON in konsole überprüfen
      console.log(jsonData);

      // Response nach Währungsname filtern
      const filteredCurrency = jsonData.find(
        (currency) => currency.name === currencyName
      );

      // Fehlerbehandlung wenn die Währung nicht gefunden wird
      if (!filteredCurrency) {
        setSearchResult(`Kryptowährung ${currencyName} nicht gefunden.`);
        return;
      }

      // Gefilterte Response in konsole überprüfen
      console.log("Filtered Response: " + Object.values(filteredCurrency));

      // Werte der gefilterten Response ins State setzen
      setData({
        name: filteredCurrency.name,
        rank: filteredCurrency.rank,
        price: filteredCurrency.priceUsd,
      });

    } catch (error) {
      // Fehlerbehandlung wenn API-Request scheitert
      console.log("API anfrage Fehlgeschlagen: " + error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: 50, fontWeight: 600 }}>
        Home
      </h1>
      <div className="HomeContainer">
        <div className="HomeContent">
          <h1>Wähle eine Währung aus:</h1>
          <div className="ButtonContainer">
            <button onClick={() => handleSearch("Bitcoin")} className="Button">
              Bitcoin
            </button>
            <button onClick={() => handleSearch("Ethereum")} className="Button">
              Ethereum
            </button>
            <button onClick={() => handleSearch("Tether")} className="Button">
              Tether
            </button>
          </div>
        </div>
      </div>
      {/* Details Komponente rendern */}
      <Details name={data.name} rank={data.rank} price={data.price} />

    </div>
  );
}

export default Home;
