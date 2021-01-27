-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 27, 2021 at 01:57 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookreview`
--
CREATE DATABASE IF NOT EXISTS `bookreview` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `bookreview`;

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
CREATE TABLE IF NOT EXISTS `author` (
  `ID` varchar(50) NOT NULL,
  `FirstName` text NOT NULL,
  `LastName` text NOT NULL,
  `Age` text NOT NULL,
  `NumberOfReview` text NOT NULL,
  `Background` text NOT NULL,
  `Email` text NOT NULL,
  `Password` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`ID`, `FirstName`, `LastName`, `Age`, `NumberOfReview`, `Background`, `Email`, `Password`) VALUES
('ASIROIS9191', 'Alexandra', 'Sirois', '20', '2', 'B R U H', 'asirois9191@gmail.com', '');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
CREATE TABLE IF NOT EXISTS `review` (
  `ISBN` bigint NOT NULL,
  `Title` text NOT NULL,
  `Author` text NOT NULL,
  `SmallSummary` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Summary` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Review` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Note` text NOT NULL,
  `PublicationDate` date NOT NULL,
  `ReviewDate` date NOT NULL,
  `WriterID` text NOT NULL,
  PRIMARY KEY (`ISBN`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`ISBN`, `Title`, `Author`, `SmallSummary`, `Summary`, `Review`, `Note`, `PublicationDate`, `ReviewDate`, `WriterID`) VALUES
(9780439023481, 'The Hunger Game', 'Suzanne Collins', 'Districts have to send one boy and one girl to participate in the annual Hunger Games, a fight to the death on live TV.', 'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.\r\n\r\nKatniss is a 16-year-old girl living with her mother and younger sister in the poorest district of Panem, the remains of what used be the United States. Long ago the districts waged war on the Capitol and were defeated. As part of the surrender terms, each district agreed to send one boy and one girl to appear in an annual televised event called, \"The Hunger Games.\" The terrain, rules, and level of audience participation may change but one thing is constant: kill or be killed. When Kat\'s sister is chosen by lottery, Kat steps up to go in her place. Without really meaning to, Katniss becomes a contender. But if she is to win, she will have to start making choices that weigh survival against humanity and life against love.', 'Good Book', '5', '2020-06-01', '2020-12-18', 'ASIROIS9191'),
(9780062024039, 'Divergent', 'Veronica Roth', 'On an appointed day of every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. ', 'In Beatrice Prior’s dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). On an appointed day of every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. For Beatrice, the decision is between staying with her family and being who she really is—she can’t have both. So she makes a choice that surprises everyone, including herself.\r\n\r\nDuring the highly competitive initiation that follows, Beatrice renames herself Tris and struggles alongside her fellow initiates to live out the choice they have made. Together they must undergo extreme physical tests of endurance and intense psychological simulations, some with devastating consequences. As initiation transforms them all, Tris must determine who her friends really are—and where, exactly, a romance with a sometimes fascinating, sometimes exasperating boy fits into the life she\'s chosen. But Tris also has a secret, one she\'s kept hidden from everyone because she\'s been warned it can mean death. And as she discovers unrest and growing conflict that threaten to unravel her seemingly perfect society, she also learns that her secret might help her save those she loves . . . or it might destroy her.', 'perfect book!', '5', '2017-09-08', '2020-12-11', 'ASIROIS9191');
--
-- Database: `departement_info`
--
CREATE DATABASE IF NOT EXISTS `departement_info` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `departement_info`;

-- --------------------------------------------------------

--
-- Table structure for table `enseignant`
--

DROP TABLE IF EXISTS `enseignant`;
CREATE TABLE IF NOT EXISTS `enseignant` (
  `Matricule` varchar(7) NOT NULL,
  `Prénom` varchar(50) DEFAULT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Type_Employer` varchar(200) DEFAULT NULL,
  `Courriel` varchar(200) DEFAULT NULL,
  `Téléphone` varchar(14) DEFAULT NULL,
  `Poste` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Matricule`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `enseignant`
--

INSERT INTO `enseignant` (`Matricule`, `Prénom`, `Nom`, `Type_Employer`, `Courriel`, `Téléphone`, `Poste`) VALUES
('1734055', 'Alexandra', 'Sirois', 'Enseignante', 'alexandra.sirois@edu.cegeptr.qc.ca', '(819) 269-3875', '1921'),
('1827446', 'Mathieu', 'Harvey', 'Technicien', 'mathieu.harvey.01@edu.cegeptr.qc.ca', '(819) 224-1875', '2451'),
('1304095', 'William-Arthur', 'Cinq-Mars', 'Enseignant', 'william.arthur.cinq.mars.01@edu.cegeptr.qc.ca', '(819) 244-0221', '4204');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
