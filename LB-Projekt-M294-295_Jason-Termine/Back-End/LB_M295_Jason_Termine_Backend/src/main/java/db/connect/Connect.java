package db.connect;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import db.CoinRepository.Coin;

/**
 * This class contains the following (self explanatory) Methods:
 * getAllCoins
 * findCoinByRank
 * findCoinByName
 * 
 * Database queries are hardcoded to enable consistent responses
 */
public class Connect {

    String url = "jdbc:mysql://localhost:3306/coinsapi";
    String user;
    String password;

    Connection conn = null;
    Statement stmt = null;

    public Connect(String user, String password) {
        this.user = user;
        this.password = password;
    }

    /**
     * Initialize connection with url, username and password
     */
    public void connect() {
        try {
        	
            conn = java.sql.DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();
            System.out.println("Connected to the database");
            
        } catch (Exception e) {
        	
            System.out.println(e.toString());
            
        }
    }

    /**
     * close connection
     */
    public void close() {
        try {
        	
            conn.close();
            stmt.close();
            System.out.println("Connection closed");
            
        } catch (Exception e) {
        	
            System.out.println(e.toString());
            
        }
    }
    
  /**
   * Returns ArrayList of all coins
   * @return coins
   */
    public List<Coin> getAllCoins() {
    	
        String sql = "SELECT * FROM tickers";
        List<Coin> coins = new ArrayList<>();

        try {
        	
            ResultSet rs = stmt.executeQuery(sql);
            
            while (rs.next()) {
            	String id = rs.getString("id");
                String name = rs.getString("name");
                int rank = rs.getInt("rank");
                String price_usd = rs.getString("price_usd");

                Coin coin = new Coin(id, name, rank, price_usd);
                coins.add(coin);
            }
            
        } catch (SQLException e) {
        	
            throw new RuntimeException(e);
            
        }
        return coins;
    }

    /**
     * Return Coin filtered by rank
     * @param rank
     * @return coin
     */
    public Coin findCoinByRank(String rank) {
    	
        String sql = "SELECT * FROM tickers WHERE `rank` = " + rank;
        Coin coin = null;
        
        try {
        	
            ResultSet rs = stmt.executeQuery(sql);
            
            while (rs.next()) {
            	String id = rs.getString("id");
                String name = rs.getString("name");
                int rank1 = rs.getInt("rank");
                String price_usd = rs.getString("price_usd");

                coin = new Coin(id, name, rank1, price_usd);
            }
            
        } catch (SQLException e) {
        	
            throw new RuntimeException(e);
            
        }
        return coin;
    }
    
    /**
     *  Returns Coin filtered by rank
     * @param name
     * @return 
     */
    public Coin findCoinByName(String name) {
    	
        String sql = "SELECT * FROM tickers WHERE name LIKE '" + name + "'";
        Coin coin = null;
        
        try {
        	
            ResultSet rs = stmt.executeQuery(sql);
            
            while (rs.next()) {
            	String id = rs.getString("id");
                String name1 = rs.getString("name");
                int rank = rs.getInt("rank");
                String price_usd = rs.getString("price_usd");

                coin = new Coin(id, name1, rank, price_usd);
            }
            
        } catch (SQLException e) {
        	
            throw new RuntimeException(e);
            
        }
        return coin;
    }
}