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
-- Table structure for table `decision`
--

DROP TABLE IF EXISTS `decision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `decision` (
  `decision_id` int NOT NULL AUTO_INCREMENT,
  `decision_date` date NOT NULL,
  `decision_delay` varchar(50) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `decision_title` varchar(150) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`decision_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `decision_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `decision`
--

LOCK TABLES `decision` WRITE;
/*!40000 ALTER TABLE `decision` DISABLE KEYS */;
INSERT INTO `decision` VALUES (1,'2024-02-05','Long terme (deux mois)','Décision commencée','Implémentation d\'une Plateforme de Formation en Ligne pour le Développement du Personnel',1),(2,'2024-01-10','Long terme (deux mois)','Première décision prise','Transition vers le Travail à Distance Permanent',2),(3,'2024-01-09','Moyen terme (un mois)','Première décision prise','Adoption d\'une Politique de Réduction des Heures de Travail avec Maintien de Salaire',3),(4,'2024-01-09','Long terme (deux mois)','Décision non aboutie','Transition vers une Approche Agile de Gestion de Projets pour Accroître l\'Innovation et l\'Adaptabilité',4),(5,'2024-01-09','Court terme (deux semaines)','Décision définitive','Introduction d\'un Programme de Mentorat pour Favoriser le Développement Professionnel',5),(6,'2024-01-01','Long terme (deux mois)','Première décision prise','Implémentation d\'un Programme Holistique de Bien-Être des Employés pour Nourrir un Environnement de Travail Sain',6),(7,'2024-01-01','Long terme (deux mois)','Décision non aboutie','Digitalisation Complète des Processus Internes pour Accroître l\'Efficacité Opérationnelle',7),(8,'2023-12-20','Long terme (deux mois)','Décision définitive','Mise en Place d\'un Système de Feedback Régulier pour Améliorer la Communication Interne',8),(9,'2023-12-10','Court terme (deux semaines)','Décision terminée','Instauration d\'une Journée Mensuelle de Partage d\'Idées et de Projets Innovants',9),(10,'2024-02-06','Court terme (deux semaines)','Décision commencée','Introduction d\'un Programme de Flexibilité d\'Horaire pour Favoriser l\'Équilibre Entre Vie Professionnelle et Personnelle',10),(11,'2024-02-06','Court terme (deux semaines)','Décision commencée','Création d\'un Programme de Développement des Compétences pour Renforcer les Capacités Internes',11),(12,'2024-02-06','Long terme (deux mois)','Décision commencée','Instauration d\'un Programme de Reconnaissance des Employés pour Valoriser les Contributions Exceptionnelles',12),(13,'2024-02-06','Court terme (deux semaines)','Décision commencée','Création d\'un Comité de Diversité et Inclusion pour Renforcer l\'Égalité et la Représentation',13),(14,'2024-02-06','Court terme (deux semaines)','Décision commencée','Introduction d\'un Programme de Volontariat d\'Entreprise pour Renforcer l\'Engagement Communautaire',14),(15,'2024-02-06','Moyen terme (Un mois)','Décision commencée','Création d\'un Programme de Flexibilité Financière pour Favoriser le Bien-être Économique des Employés',15);
/*!40000 ALTER TABLE `decision` ENABLE KEYS */;
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
