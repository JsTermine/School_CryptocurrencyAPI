package db.CoinRepository;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class CoinTest {

	/**
	 * Asserts if params  given to the Coin constructor returns with the same values
	 */
	@Test
    public void testConstructor() {
        Coin coin = new Coin("BTC", "Bitcoin", 1, "50000.00");
        assertEquals("BTC", coin.getId());
        assertEquals("Bitcoin", coin.getName());
        assertEquals(1, coin.getRank());
        assertEquals("50000.00", coin.getPriceUsd());
    }

	/**
     * Asserts the getters
     */
    @Test
    public void testGetterMethods() {
        Coin coin = new Coin("ETH", "Ethereum", 2, "4000.00");
        assertEquals("ETH", coin.getId());
        assertEquals("Ethereum", coin.getName());
        assertEquals(2, coin.getRank());
        assertEquals("4000.00", coin.getPriceUsd());
    }

}
