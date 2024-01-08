-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: coinsapi
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS coinsapi;

USE coinsapi;
--
-- Table structure for table `tickers`
--

DROP TABLE IF EXISTS `tickers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickers` (
  `id` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `rank` int DEFAULT NULL,
  `price_usd` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickers`
--

LOCK TABLES `tickers` WRITE;
/*!40000 ALTER TABLE `tickers` DISABLE KEYS */;
INSERT INTO `tickers` VALUES ('90','Bitcoin',1,'34100'),('80','Ethereum',2,'1790.78'),('518','Tether',3,'1'),('2710','Binance Coin',4,'227.15'),('33285','USD Coin',5,'1'),('58','XRP',6,'0.546218'),('46971','Staked Ether',7,'1787.81'),('48543','Solana',8,'32.22'),('257','Cardano',9,'0.293839'),('2','Dogecoin',10,'0.069219'),('2713','TRON',11,'0.094082'),('77729','The Open Network',12,'2.05'),('2751','ChainLink',13,'11.49'),('33422','Wrapped Bitcoin',14,'34070.93'),('45219','Polkadot',15,'4.19'),('1','Litecoin',16,'67.93'),('2321','Bitcoin Cash',17,'245.41'),('45088','Shiba Inu',18,'0.000008'),('48591','Binance USD',19,'1'),('44883','Avalanche',20,'10.92'),('33833','UNUS SED LEO',21,'3.97'),('89','Stellar',22,'0.11359'),('28','Monero',23,'161.85'),('32479','TrueUSD',24,'1'),('33531','OKB',25,'45.18'),('33830','Cosmos',26,'7.17'),('47305','Uniswap',27,'4.12'),('118','Ethereum Classic',28,'16.3'),('46981','Lido DAO',29,'1.83'),('32607','Filecoin',30,'3.67'),('12377','Maker',31,'1444.51'),('2741','VeChain',32,'0.019171'),('33536','Matic Network',33,'0.621894'),('33085','Quant',34,'107.81'),('93847','Arbitrum',35,'0.929604'),('46018','Aave',36,'80.48'),('48563','NEAR Protocol',37,'1.24'),('46183','Injective Protocol',38,'13.31'),('70485','Kaspa',39,'0.050909'),('33234','Bitcoin SV',40,'49.25'),('70497','Optimism',41,'1.38'),('46968','Frax',42,'1'),('48569','Stacks',43,'0.658192'),('48561','The Graph',44,'0.100877'),('44863','Render Token',45,'2.36'),('36447','THORChain',46,'2.54'),('34406','Algorand',47,'0.101616'),('69801','USDD',48,'0.995407'),('2679','EOS',49,'0.631102'),('3682','Tezos',50,'0.727205'),('32360','Theta Token',51,'0.671469'),('258','Decentraland',52,'0.349405'),('133','Neo',53,'9.31'),('33644','Fantom',54,'0.234502'),('67117','Bitget Token',55,'0.46107'),('45161','The Sandbox',56,'0.329974'),('46575','Axie Infinity',57,'4.88'),('32893','Red Pulse Phoenix',58,'0.724362'),('62645','Mina Protocol',59,'0.622865'),('33819','Crypto.com Chain',60,'0.059277'),('48589','Flow',61,'0.530518'),('64671','Pax Dollar',62,'1'),('51539','eCash',63,'0.000028'),('45930','APEcoin',64,'1.37'),('42227','PAX Gold',65,'1990.57'),('48555','Hedera Hashgraph',66,'0.05196'),('42855','Tether Gold',67,'2004.03'),('93841','Pepe',68,'0.000001'),('33213','Rocket Pool',69,'24.02'),('34391','Chiliz',70,'0.06516'),('44035','Tokenize Xchange',71,'5.77'),('134','Zcash',72,'27.84'),('45577','Gala',73,'0.018178'),('44178','Trust Wallet Token',74,'1.03'),('447','IOTA',75,'0.154752'),('64675','Kava',76,'0.638757'),('48547','FTX Token',77,'1.27'),('42531','Klaytn',78,'0.131883'),('48581','Curve DAO Token',79,'0.475593'),('77735','GMX',80,'46.17'),('45467','Elrond eGold',81,'29.18'),('32351','Huobi Token',82,'2.34'),('48537','Terra Classic',83,'0.000065'),('48703','Casper',84,'0.033084'),('54377','dYdX',85,'2.37'),('47304','Compound',86,'45.6'),('51947','Floki Inu',87,'0.000037'),('32604','Nexo',88,'0.613668'),('46642','Wemix Token',89,'1.07'),('100423','First Digital USD',90,'1'),('8','Dash',91,'28.12'),('42441','Arweave',92,'4.79'),('237','Qtum',93,'2.97'),('93845','Sui',94,'0.459898'),('184','Basic Attention Token',95,'0.201279'),('48711','Liquity USD',96,'0.99531'),('32334','Zilliqa',97,'0.018614'),('46966','1inch',98,'0.289648'),('33718','Fetch',99,'0.348855'),('32354','SingularityNET',100,'0.230202');
/*!40000 ALTER TABLE `tickers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-31  8:11:30
