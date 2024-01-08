package wiss.m295;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import db.CoinRepository.Coin;
import db.connect.Connect;

@RestController
@SpringBootApplication
public class App {

	public final Connect connect = new Connect("[BENUTZERNAME]", "[PASSWORD]");
	
	/**
	 *  Main App to start SpringBoot Application with all Endpoints
	 */
	public static void main(String[] args) {

		SpringApplication.run(App.class, args);
	}
	
	/**
	 *  Index Page for introduction
	 * @return
	 */
	@GetMapping("/")
	public String index() {
		return "Hello, this is my LB_M295";
	}

	
	/**
	 * Opens connection for incoming requests and closes the connection after sending a Response
	 * @return coins
	 */
	@GetMapping("/all")
	public ResponseEntity<List<Coin>> getAllCoins() {

		connect.connect();
		List<Coin> coins = connect.getAllCoins();
		connect.close();

		if (coins.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(coins);

		}
	}

	
	/**
	 * Opens connection for incoming requests and closes the connection after sending a Response
	 * Returns a single Coin filtered by Rank
	 * @param rank
	 * @return coin
	 */
	@GetMapping("/rank/{rank}")
	public ResponseEntity<Coin> findCoinByRank(@PathVariable String rank) {

		connect.connect();
		Coin result = connect.findCoinByRank(rank);
		connect.close();

		if (result == null) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}

	
	/**
	 * Opens connection for incoming requests and closes the connection after sending a Response
	 * Returns a single Coin filtered by Name
	 * @param name
	 * @return coin
	 */
	@GetMapping("/name/{name}")
	public ResponseEntity<Coin> findCoinByName(@PathVariable String name) {

		connect.connect();
		Coin result = connect.findCoinByName(name);
		connect.close();

		if (result == null) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}
	
}
