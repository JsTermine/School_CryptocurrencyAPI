package wiss.m295;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import db.CoinRepository.Coin;

/**
 * Unit test for  App.
 */
public class AppTest 
{
	/**
     * Asserts if all coins get returned with a successful status Code from the Server
     */
	@Test
    public void testGetAllCoinsEndpoint() {
        App app = new App();
        ResponseEntity<List<Coin>> response = app.getAllCoins();

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
