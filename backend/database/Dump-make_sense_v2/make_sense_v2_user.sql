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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL DEFAULT 'user.png',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Rampelberg','Hélène','helene@mail.com','West Africa','1707215253910--helene.jpg'),(2,'Buchelet','Florence','florence.buchelet@gmail.com','Americas','1707295817872--Florence.jpg'),(3,'Rousseaux','Vincent','Vincent@mail.com','France','1707215117463--vincent.jpg'),(4,'Zian','Farid','farid@mail.com','Lebanon','1707215192273--Farid.jpg'),(5,'Nigon','Thomas','thomas@mail.com','Americas','1707215394186--thomas.jpg'),(6,'Ticon','Frédéric','fred@mail.com','Philippines','1707215475165--Fred.jpg'),(7,'Saillard','Marie','marie@mail.com','France','1707215540218--Marie.jpg'),(8,'Fantino','Robin','robin@mail.com','Lebanon','1707215601805--Robin.jpg'),(9,'Daburon','Cyril','cyril@mail.com','Americas','1707215719156--cyril.jpg'),(10,'Moussaoui','Rayane','rayane@mail.com','Americas','1707215773732--Rayan.jpg'),(11,'Lobez','Xavier','xavier@mail.com','Lebanon','1707215833217--Xavier.jpg'),(12,'Imbrasse','Romain','romain@mail.com','Philippines','1707215881471--Romain.jpg'),(13,'Merino','Lucas','lucas@mail.com','Americas','1707215928317--Lucas.jpg'),(14,'Thierry','Matthieu','matthieu@mail.com','West Africa','1707215997339--Mathieu.jpg'),(15,'Gouillart','Pierre Adrien','PA@mail.com','Americas','1707216094880--Pierre-Adrien.jpg'),(16,'Ozarowski','Julien','julienOne@mail.com','Americas','1707216242432--Julien.jpg'),(17,'Samyn','Sébastien','seb@mail.com','West Africa','1707216298523--Sebastien.jpg'),(18,'Rouvillain','Caroline','caroline@mail.com','France','1707216408226--Caroline.jpg'),(19,'Catry','Dorothée','doudou@mail.com','Philippines','1707216486641--DorothÃ©e.jpg'),(20,'Billardon','Julien','julienTwo@mail.com','Americas','1707216540502--JulienD.jpg'),(21,'Lozach','Grégoire','greg@mail.com','West Africa','1707216594302--Gregoire.jpg'),(22,'Depret','Felix','felix@mail.com','Lebanon','1707216644975--Felix.jpg'),(23,'Deschamps','Gwenaëlle','gwen@mail.com','France','1707216732581--Gwenaelle.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-07 16:58:01
