import React, { useState } from "react";
import Details from "./Details";

function Suchen() {
  // State für den Rang (Rank) setzen
  const [searchRank, setSearchRank] = useState("");

  // State um Responsedaten zu speichern
  const [data, setData] = useState({
    name: "",
    rank: 0,
    price: 0,
  });

  // API abfrage bei Bedarf starten
  const handleSearch = async () => {
    // Rank zu Integer parsen
    let rank = parseInt(searchRank);

    /********** ChatGPT ab dieser Line bis und mit Line 25 *************/
    // Alert-Fehlermeldung bei eingabe kleiner 1 oder grösser 100 und bei keiner Eingabe
    if (isNaN(rank) || rank < 1 || rank > 100) {
      alert("Ungültiger Rang! Bitte einen Rang von 1 bis und mit 100 eingeben!");
      return;
    }

    try {
      // Request an API senden mit fetch
      const response = await fetch(`http://localhost:8080/all`);

      // Response in JSON-Format setzen
      const jsonData = await response.json();

      // JSON in konsole überprüfen 
      console.log(jsonData);

      // Response nach Währungsrang filtern
      const filteredCurrency = jsonData.find(
        (currency) => currency.rank === rank
      );

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
        Suchen
      </h1>
      <div className="HomeContainer" style={{ height: "18vh" }}>
        <div className="HomeContent">
          <h1>
            Suche eine Währung nach Ranking aus: <br /> (Wertebereich 1 bis 100)
          </h1>
          <div className="SearchContainer">
            <input
              type="text"
              placeholder="Suche nach Ranking"
              value={searchRank}
              onChange={(e) => setSearchRank(e.target.value)} // ChatGPT
              className="SearchInput"
            />
            <button onClick={handleSearch} className="SearchButton">
              <span role="img" aria-label="Lupe Symbol">
                🔍
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Details Komponente rendern */}
      <Details name={data.name} rank={data.rank} price={data.price} />
    </div>
  );
}

export default Suchen;
