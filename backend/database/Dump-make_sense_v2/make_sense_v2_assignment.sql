-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: make_sense_v2
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignment` (
  `assignment_id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `role` varchar(10) NOT NULL,
  `decision_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`assignment_id`),
  KEY `decision_id` (`decision_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `assignment_ibfk_1` FOREIGN KEY (`decision_id`) REFERENCES `decision` (`decision_id`),
  CONSTRAINT `assignment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (1,'2024-02-07','Impacté',15,21),(2,'2024-02-07','Impacté',15,13),(3,'2024-02-07','Expert',15,9),(4,'2024-02-07','Expert',15,10),(5,'2024-02-07','Expert',14,17),(6,'2024-02-07','Impacté',14,12),(7,'2024-02-07','Impacté',14,20),(8,'2024-02-07','Expert',14,11),(9,'2024-02-07','Expert',13,16),(10,'2024-02-07','Expert',13,5),(11,'2024-02-07','Impacté',13,10),(12,'2024-02-07','Impacté',13,22),(13,'2024-02-07','Expert',12,11),(14,'2024-02-07','Expert',12,13),(15,'2024-02-07','Impacté',12,19),(16,'2024-02-07','Impacté',12,8),(17,'2024-02-07','Expert',11,6),(18,'2024-02-07','Expert',11,7),(19,'2024-02-07','Impacté',11,18),(20,'2024-02-07','Impacté',11,3),(21,'2024-02-07','Expert',10,15),(22,'2024-02-07','Expert',10,17),(23,'2024-02-07','Impacté',10,23),(24,'2024-02-07','Impacté',10,4),(25,'2024-02-07','Expert',9,4),(26,'2024-02-07','Expert',9,16),(27,'2024-02-07','Impacté',9,2),(28,'2024-02-07','Impacté',9,21),(29,'2024-02-07','Expert',8,5),(30,'2024-02-07','Expert',8,19),(31,'2024-02-07','Impacté',8,10),(32,'2024-02-07','Impacté',8,9),(33,'2024-02-07','Expert',7,9),(34,'2024-02-07','Expert',7,12),(35,'2024-02-07','Impacté',7,22),(36,'2024-02-07','Impacté',7,3),(37,'2024-02-07','Expert',6,1),(38,'2024-02-07','Expert',6,17),(39,'2024-02-07','Impacté',6,14),(40,'2024-02-07','Impacté',6,20),(41,'2024-02-07','Expert',5,2),(42,'2024-02-07','Expert',5,11),(43,'2024-02-07','Impacté',5,7),(44,'2024-02-07','Impacté',5,16),(45,'2024-02-07','Expert',4,3),(46,'2024-02-07','Expert',4,1),(47,'2024-02-07','Impacté',4,18),(48,'2024-02-07','Impacté',4,8),(49,'2024-02-07','Expert',3,17),(50,'2024-02-07','Expert',3,12),(51,'2024-02-07','Impacté',3,23),(52,'2024-02-07','Impacté',3,10),(53,'2024-02-07','Expert',2,7),(54,'2024-02-07','Expert',2,4),(55,'2024-02-07','Impacté',2,13),(56,'2024-02-07','Impacté',2,21),(57,'2024-02-07','Expert',1,16),(58,'2024-02-07','Expert',1,13),(59,'2024-02-07','Impacté',1,19),(60,'2024-02-07','Impacté',1,2);
/*!40000 ALTER TABLE `assignment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-07 16:58:00
