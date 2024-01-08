package db.CoinRepository;

public class Coin {

	private String id;
	private String name;
	private int rank;
	private String priceUsd;
	
	public Coin(String id, String name, int rank, String price_usd) {
		this.id = id;
		this.name = name;
		this.rank = rank;
		this.priceUsd = price_usd; 
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getRank() {
		return rank;
	}

	public String getPriceUsd() {
		return priceUsd;
	}
}
