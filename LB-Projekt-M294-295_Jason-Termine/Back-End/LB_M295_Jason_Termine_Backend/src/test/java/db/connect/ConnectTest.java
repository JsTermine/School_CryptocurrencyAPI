package db.connect;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import db.CoinRepository.Coin;

class ConnectTest {

	/**
     * Asserts the connection to the database and asserts that coins get returned
     */
	@Test
    public void testGetAllCoins() {
        // Arrange
        Connect connect = new Connect("[BENUTZERNAME]", "[PASSWORD]");
        connect.connect();

        // Act
        List<Coin> coins = connect.getAllCoins();

        // Assert
        assertNotNull(coins);
        assertTrue(coins.size() > 0);

        connect.close();
    }

	/**
     * Asserts the connection to the database and asserts that the Rank of the Coin gets returned
     */
    @Test
    public void testFindCoinByRank() {
        // Arrange
        Connect connect = new Connect("[BENUTZERNAME]", "[PASSWORD]");
        connect.connect();
        int targetRank = 1;

        // Act
        Coin coin = connect.findCoinByRank(String.valueOf(targetRank));

        // Assert
        assertNotNull(coin);
        assertEquals(targetRank, coin.getRank());

        connect.close();
    }

}
