-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 09 déc. 2019 à 11:56
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

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `ART_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ART_NOM` varchar(50) NOT NULL,
  PRIMARY KEY (`ART_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `OPE_TYPE` varchar(200) NOT NULL,
  `OPE_VALEUR` int(11) NOT NULL,
  `ART_ID` int(11) NOT NULL,
  `RAY_ID` int(11) NOT NULL,
  PRIMARY KEY (`OPE_ID`),
  KEY `OPERATION_ARTICLE_FK` (`ART_ID`),
  KEY `OPERATION_RAYON0_FK` (`RAY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  ADD CONSTRAINT `OPERATION_RAYON0_FK` FOREIGN KEY (`RAY_ID`) REFERENCES `rayon` (`RAY_ID`);

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
