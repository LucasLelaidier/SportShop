-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 11 déc. 2019 à 18:30
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `genielog`
--

-- --------------------------------------------------------

--
-- Structure de la table `appartient`
--

DROP TABLE IF EXISTS `appartient`;
CREATE TABLE IF NOT EXISTS `appartient` (
  `RAY_ID` int(11) NOT NULL,
  `ART_ID` int(11) NOT NULL,
  `APP_STOCK` int(11) NOT NULL,
  PRIMARY KEY (`RAY_ID`,`ART_ID`),
  KEY `APPARTIENT_ARTICLE0_FK` (`ART_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `appartient`
--

INSERT INTO `appartient` (`RAY_ID`, `ART_ID`, `APP_STOCK`) VALUES
(1, 1, 32),
(1, 2, 5),
(1, 3, 3),
(2, 8, 56),
(2, 9, 41),
(2, 10, 12),
(2, 11, 3),
(3, 4, 34),
(3, 5, 25),
(3, 6, 89),
(3, 7, 68);

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `ART_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ART_NOM` varchar(50) NOT NULL,
  PRIMARY KEY (`ART_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`ART_ID`, `ART_NOM`) VALUES
(1, 'VTT XC 050 LTD 29\" 11V BLEU'),
(2, 'VTT XC 100 S 29\" 12S ROUGE ET NOIR'),
(3, 'VÉLO VTT ÉLECTRIQUE E-ST 900 FEMME TURQUOISE 27.5\"'),
(4, 'COLLANT RUNNING HOMME KIPRUN WARM RAIN NOIR'),
(5, 'TEE SHIRT RUNNING HOMME RESPIRANT MANCHE LONGUE'),
(6, 'CHAUSSURE RUNNING HOMME GEL ZIRUSS BLEUE'),
(7, 'CHAUSSURE RUNNING HOMME WAVE RIDER 23 BLEUE'),
(8, 'ENSEMBLE PÊCHE DE LA CARPE XTREM-5 360'),
(9, 'MOULINET PÊCHE DE LA CARPE ADONIS 5000 BLACK'),
(10, 'BEDCHAIR PÊCHE DE LA CARPE FULLBREAK'),
(11, 'BARQUES DE PECHE CLASSIC 310');

-- --------------------------------------------------------

--
-- Structure de la table `chef_de_magasin`
--

DROP TABLE IF EXISTS `chef_de_magasin`;
CREATE TABLE IF NOT EXISTS `chef_de_magasin` (
  `CDM_ID` int(11) NOT NULL AUTO_INCREMENT,
  `CDM_NOM` varchar(50) NOT NULL,
  `CDM_PRENOM` varchar(50) NOT NULL,
  `CDM_HASH` varchar(200) NOT NULL,
  `CDM_PP` varchar(200) NOT NULL,
  PRIMARY KEY (`CDM_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `chef_de_magasin`
--

INSERT INTO `chef_de_magasin` (`CDM_ID`, `CDM_NOM`, `CDM_PRENOM`, `CDM_HASH`, `CDM_PP`) VALUES
(1, 'Lelaidier', 'Lucas', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', '');

-- --------------------------------------------------------

--
-- Structure de la table `chef_de_rayon`
--

DROP TABLE IF EXISTS `chef_de_rayon`;
CREATE TABLE IF NOT EXISTS `chef_de_rayon` (
  `CDR_ID` int(11) NOT NULL AUTO_INCREMENT,
  `CDR_NOM` varchar(50) NOT NULL,
  `CDR_PRENOM` varchar(50) NOT NULL,
  `CDR_HASH` varchar(200) NOT NULL,
  `CDR_PP` varchar(200) NOT NULL,
  PRIMARY KEY (`CDR_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `chef_de_rayon`
--

INSERT INTO `chef_de_rayon` (`CDR_ID`, `CDR_NOM`, `CDR_PRENOM`, `CDR_HASH`, `CDR_PP`) VALUES
(1, 'Marlin', 'Alexis', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', ''),
(2, 'Remon', 'Théo', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', ''),
(3, 'Martin', 'Jérémie', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', '');

-- --------------------------------------------------------

--
-- Structure de la table `magasin`
--

DROP TABLE IF EXISTS `magasin`;
CREATE TABLE IF NOT EXISTS `magasin` (
  `MAG_ID` int(11) NOT NULL AUTO_INCREMENT,
  `MAG_VILLE` varchar(50) NOT NULL,
  `MAG_ADRESSE` varchar(200) NOT NULL,
  `CDM_ID` int(11) NOT NULL,
  PRIMARY KEY (`MAG_ID`),
  KEY `MAGASIN_CHEF_DE_MAGASIN_FK` (`CDM_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `magasin`
--

INSERT INTO `magasin` (`MAG_ID`, `MAG_VILLE`, `MAG_ADRESSE`, `CDM_ID`) VALUES
(1, 'Tours', '7 rue du colibri', 1);

-- --------------------------------------------------------

--
-- Structure de la table `operation`
--

DROP TABLE IF EXISTS `operation`;
CREATE TABLE IF NOT EXISTS `operation` (
  `OPE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `OPE_VALEUR` int(11) NOT NULL,
  `OPE_DATE` datetime NOT NULL,
  `ART_ID` int(11) NOT NULL,
  `RAY_ID` int(11) NOT NULL,
  `TYP_ID` int(11) NOT NULL,
  PRIMARY KEY (`OPE_ID`),
  KEY `OPERATION_ARTICLE_FK` (`ART_ID`),
  KEY `OPERATION_RAYON0_FK` (`RAY_ID`),
  KEY `OPERATION_TYPE1_FK` (`TYP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `operation`
--

INSERT INTO `operation` (`OPE_ID`, `OPE_VALEUR`, `OPE_DATE`, `ART_ID`, `RAY_ID`, `TYP_ID`) VALUES
(1, 32, '2019-12-01 10:00:00', 1, 1, 1),
(2, 7, '2019-12-01 11:00:00', 2, 1, 1),
(3, 3, '2019-12-01 11:08:00', 3, 1, 1),
(4, 1, '2019-12-01 17:00:00', 2, 1, 2),
(5, 56, '2019-12-02 04:00:00', 8, 2, 1),
(6, 41, '2019-12-02 09:00:00', 9, 2, 1),
(7, 1, '2019-12-02 15:00:00', 2, 1, 2),
(8, 12, '2019-12-03 08:00:00', 10, 2, 1),
(9, 3, '2019-12-03 08:06:00', 11, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `rayon`
--

DROP TABLE IF EXISTS `rayon`;
CREATE TABLE IF NOT EXISTS `rayon` (
  `RAY_ID` int(11) NOT NULL AUTO_INCREMENT,
  `RAY_NOM` varchar(50) NOT NULL,
  `CDR_ID` int(11) NOT NULL,
  `MAG_ID` int(11) NOT NULL,
  PRIMARY KEY (`RAY_ID`),
  KEY `RAYON_CHEF_DE_RAYON_FK` (`CDR_ID`),
  KEY `RAYON_MAGASIN0_FK` (`MAG_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `rayon`
--

INSERT INTO `rayon` (`RAY_ID`, `RAY_NOM`, `CDR_ID`, `MAG_ID`) VALUES
(1, 'Cycles', 1, 1),
(2, 'Pêche', 2, 1),
(3, 'Running', 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `TYP_ID` int(11) NOT NULL AUTO_INCREMENT,
  `TYP_TYPE` varchar(50) NOT NULL,
  PRIMARY KEY (`TYP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`TYP_ID`, `TYP_TYPE`) VALUES
(1, 'Ajout'),
(2, 'Vente');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `appartient`
--
ALTER TABLE `appartient`
  ADD CONSTRAINT `APPARTIENT_ARTICLE0_FK` FOREIGN KEY (`ART_ID`) REFERENCES `article` (`ART_ID`),
  ADD CONSTRAINT `APPARTIENT_RAYON_FK` FOREIGN KEY (`RAY_ID`) REFERENCES `rayon` (`RAY_ID`);

--
-- Contraintes pour la table `magasin`
--
ALTER TABLE `magasin`
  ADD CONSTRAINT `MAGASIN_CHEF_DE_MAGASIN_FK` FOREIGN KEY (`CDM_ID`) REFERENCES `chef_de_magasin` (`CDM_ID`);

--
-- Contraintes pour la table `operation`
--
ALTER TABLE `operation`
  ADD CONSTRAINT `OPERATION_ARTICLE_FK` FOREIGN KEY (`ART_ID`) REFERENCES `article` (`ART_ID`),
  ADD CONSTRAINT `OPERATION_RAYON0_FK` FOREIGN KEY (`RAY_ID`) REFERENCES `rayon` (`RAY_ID`),
  ADD CONSTRAINT `OPERATION_TYPE1_FK` FOREIGN KEY (`TYP_ID`) REFERENCES `type` (`TYP_ID`);

--
-- Contraintes pour la table `rayon`
--
ALTER TABLE `rayon`
  ADD CONSTRAINT `RAYON_CHEF_DE_RAYON_FK` FOREIGN KEY (`CDR_ID`) REFERENCES `chef_de_rayon` (`CDR_ID`),
  ADD CONSTRAINT `RAYON_MAGASIN0_FK` FOREIGN KEY (`MAG_ID`) REFERENCES `magasin` (`MAG_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
