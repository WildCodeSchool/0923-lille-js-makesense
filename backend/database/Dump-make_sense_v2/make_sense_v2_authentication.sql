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
-- Table structure for table `authentication`
--

DROP TABLE IF EXISTS `authentication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authentication` (
  `authentication_id` int NOT NULL AUTO_INCREMENT,
  `hashed_password` text NOT NULL,
  `auth_date_time` datetime NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`authentication_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `authentication_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authentication`
--

LOCK TABLES `authentication` WRITE;
/*!40000 ALTER TABLE `authentication` DISABLE KEYS */;
INSERT INTO `authentication` VALUES (1,'$argon2d$v=19$m=19456,t=2,p=4$cU5FTg1urIIz2yPNydehOw$JNWe4E+rE6mjob361kkgsjxbbczpGSPGQDmg7eOjWN8','2024-02-06 10:17:44',1),(2,'$argon2d$v=19$m=19456,t=2,p=4$qCzrZYM6wGlkX9av4IjyGg$+i0tH1F1vACZnr/VFq7PZwhZfLwzVObfhJDjlqrzx4A','2024-02-06 11:21:34',2),(3,'$argon2d$v=19$m=19456,t=2,p=4$fRBg2SUuPdF0ZhxbteHHVg$rEUPkRRyqqrT6kOHrSBnap1WFUpASB0qQrMipwrt4RU','2024-02-06 11:24:21',3),(4,'$argon2d$v=19$m=19456,t=2,p=4$cb6ke2GeIJecs2IAPrM1HA$AKTGrKqNR7fkL2mlM/lkaHyusOwMDuCivIV7n6eqY+U','2024-02-06 11:26:07',4),(5,'$argon2d$v=19$m=19456,t=2,p=4$cXBvHhS0N7UE4XEMGom3YA$azhCMZBHjrRXCSxQr+KdPV75hWkvrtU5+su/H9uat/w','2024-02-06 11:29:06',5),(6,'$argon2d$v=19$m=19456,t=2,p=4$3JzRjsKiQDE/HgKPAt6kzQ$T6iRuQ2ON5KVyDG0OSMDPAEV5PmROhxuNuVrwnMkiOM','2024-02-06 11:30:55',6),(7,'$argon2d$v=19$m=19456,t=2,p=4$24f8umusNfZ9erP6Y/Pnxw$8PrQpCUXf5sC91Yh1XNiMRD2u0XXUL2HbNUXLkwhuOM','2024-02-06 11:31:59',7),(8,'$argon2d$v=19$m=19456,t=2,p=4$wcd+QbUQjgNRE/ecMmH12Q$49yQEDYRa0yvUDdbxJpiilByV3AyKDyKGtTWe9XWGnw','2024-02-06 11:32:59',8),(9,'$argon2d$v=19$m=19456,t=2,p=4$3yBFoV8DNSY45iZRtKoMVA$E8oSjKvkFVn2wPYjaNFRN/a3hlsZAfirtZlZLC5faxM','2024-02-06 11:34:46',9),(10,'$argon2d$v=19$m=19456,t=2,p=4$QDq5pRPaUFWzT/zO33mIrg$YgYel1xijHopHW3MKV64wCrUuIgKoibUdCFNmlC5ETw','2024-02-06 11:35:52',10),(11,'$argon2d$v=19$m=19456,t=2,p=4$ZX9Ro/63KLRRblMO+SoCMA$EQSTH0RXfqG32Qi8laFfpx2Pp0OKQjstH1fidK/gs8g','2024-02-06 11:36:53',11),(12,'$argon2d$v=19$m=19456,t=2,p=4$Ei3Pm/F5XG8WorIpkmq65A$MNwQLbDHBsj8edCSwWTnhbWIFpNzqW62uhkO30eJmUg','2024-02-06 11:37:43',12),(13,'$argon2d$v=19$m=19456,t=2,p=4$Wx892xyCKImCSMjlb93fiw$/6oG+awFJ+r9gfRtmBf9OGJhzooIRb7u0el4BLyui4E','2024-02-06 11:38:28',13),(14,'$argon2d$v=19$m=19456,t=2,p=4$atV8vvw+o38yK4IgMkv06A$Rhk5Mi4c3CYkALhAqzqFkS9wZQwF4TyPmZSwmH5vEkM','2024-02-06 11:39:36',14),(15,'$argon2d$v=19$m=19456,t=2,p=4$gjSqgGtGLT24pwSYrBUnwg$AGGuOHk06Gi9pokuu3lF/jKBy2RZ98GMBYSx6i+XycM','2024-02-06 11:40:39',15),(16,'$argon2d$v=19$m=19456,t=2,p=4$18epFUVT9VfJ1Pq2e116Ug$BtYSnxukpOczEpGt2wX7NyDO9tvQRVOkI0RjC4iZqtE','2024-02-06 11:43:15',16),(17,'$argon2d$v=19$m=19456,t=2,p=4$OMNtThZofmS/vUguo6F2mw$pysT44PSPVxDIVoUPCxEDQjHmD6bLJzNSSsqXMQsMu8','2024-02-06 11:44:41',17),(18,'$argon2d$v=19$m=19456,t=2,p=4$xD9tVuczIgT2+jRvcl/u1w$82eytoR+ERXL139v9xmwbgSQcj4JycXzpG9XBeDME8E','2024-02-06 11:46:18',18),(19,'$argon2d$v=19$m=19456,t=2,p=4$mN72f0jHEE8qGDG+Tq7ptw$eAlM9lm8DLP0WwgUi3o5hvsIisxCVOdRl8n5/eh0l+k','2024-02-06 11:47:40',19),(20,'$argon2d$v=19$m=19456,t=2,p=4$EYJYWirbLyxxHZMadeTIvQ$aqhrpVhkXzv6rw++/Us0tszNdXrbfZpilfqjq9F4m6E','2024-02-06 11:48:39',20),(21,'$argon2d$v=19$m=19456,t=2,p=4$EWLHAPI0balXJqU+qDAcAg$1q8G4LBVi6lRtMUsMXAgDBoXga+q2fiCMKlzr2/8P64','2024-02-06 11:49:37',21),(22,'$argon2d$v=19$m=19456,t=2,p=4$3q/6zM7FAA7n+gQHNOh1IQ$XSS3iWTHWytaLKa7f3teliRHpUdbIHYbHaN1xY+RLuM','2024-02-06 11:50:27',22),(23,'$argon2d$v=19$m=19456,t=2,p=4$q/vliR41vVjAPrMEJn3pSA$qlP4ukD6zhxjfxvtkJAaJLjd1g8u3EoJhjiXlgCrAAQ','2024-02-06 11:51:49',23);
/*!40000 ALTER TABLE `authentication` ENABLE KEYS */;
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
