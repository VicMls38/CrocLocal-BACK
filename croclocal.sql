-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : mar. 26 nov. 2024 à 10:18
-- Version du serveur :  10.4.13-MariaDB
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `croclocal`
--

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

DROP TABLE IF EXISTS `avis`;
CREATE TABLE IF NOT EXISTS `avis` (
  `id_avis` int(11) NOT NULL AUTO_INCREMENT,
  `id_consommateurs` int(11) NOT NULL,
  `siret_producteurs` varchar(100) NOT NULL,
  `note_avis` int(11) NOT NULL,
  `date_avis` datetime NOT NULL,
  `message_avis` text NOT NULL,
  `reponse_avis` text DEFAULT NULL,
  PRIMARY KEY (`id_avis`),
  KEY `avis_consommateurs` (`id_consommateurs`),
  KEY `avis_producteurs` (`siret_producteurs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `id_commandes` int(11) NOT NULL AUTO_INCREMENT,
  `id_consommateurs` int(11) NOT NULL,
  `status_commandes` varchar(100) NOT NULL,
  PRIMARY KEY (`id_commandes`),
  KEY `commandes_consommateurs` (`id_consommateurs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `consommateurs`
--

DROP TABLE IF EXISTS `consommateurs`;
CREATE TABLE IF NOT EXISTS `consommateurs` (
  `id_consommateurs` int(11) NOT NULL AUTO_INCREMENT,
  `email_consommateurs` varchar(255) NOT NULL,
  `mdp_consommateurs` varchar(255) NOT NULL,
  `nom_consommateurs` varchar(100) NOT NULL,
  `prenom_consommateurs` varchar(100) NOT NULL,
  `tel_consommateurs` varchar(50) NOT NULL,
  `cp_consommateurs` varchar(50) NOT NULL,
  `ville_consommateurs` varchar(150) NOT NULL,
  `adresse_consommateurs` varchar(255) NOT NULL,
  `description_consommateurs` text DEFAULT NULL,
  PRIMARY KEY (`id_consommateurs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `evenements`
--

DROP TABLE IF EXISTS `evenements`;
CREATE TABLE IF NOT EXISTS `evenements` (
  `id_evenements` int(11) NOT NULL AUTO_INCREMENT,
  `siret_producteurs` varchar(100) NOT NULL,
  `date_evenements` date NOT NULL,
  `description_evenement` text NOT NULL,
  `image_evenement` longblob DEFAULT NULL,
  PRIMARY KEY (`id_evenements`),
  KEY `evenements_producteurs` (`siret_producteurs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `favoris`
--

DROP TABLE IF EXISTS `favoris`;
CREATE TABLE IF NOT EXISTS `favoris` (
  `siret_producteurs` varchar(100) NOT NULL,
  `id_consommateurs` int(11) NOT NULL,
  PRIMARY KEY (`siret_producteurs`,`id_consommateurs`),
  KEY `favoris_consommateurs` (`id_consommateurs`),
  KEY `siret_producteurs` (`siret_producteurs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `mesproduits`
--

DROP TABLE IF EXISTS `mesproduits`;
CREATE TABLE IF NOT EXISTS `mesproduits` (
  `id_produits` int(11) NOT NULL,
  `siret_producteurs` varchar(100) NOT NULL,
  PRIMARY KEY (`id_produits`,`siret_producteurs`),
  KEY `mesProduits_producteurs` (`siret_producteurs`),
  KEY `id_produits` (`id_produits`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ouvertures`
--

DROP TABLE IF EXISTS `ouvertures`;
CREATE TABLE IF NOT EXISTS `ouvertures` (
  `siret_producteurs` varchar(100) NOT NULL,
  `jour_semaine` varchar(50) NOT NULL,
  `heureDebut_ouvertures` time NOT NULL,
  `heureFin_ouvertures` time NOT NULL,
  `pauseDebut_ouvertures` time NOT NULL,
  `pauseFin_ouvertures` time NOT NULL,
  PRIMARY KEY (`siret_producteurs`,`jour_semaine`),
  KEY `ouvertures_semaine` (`jour_semaine`),
  KEY `siret_producteurs` (`siret_producteurs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `panierautorise`
--

DROP TABLE IF EXISTS `panierautorise`;
CREATE TABLE IF NOT EXISTS `panierautorise` (
  `siret_producteurs` varchar(100) NOT NULL,
  `jour_semaine` varchar(50) NOT NULL,
  `id_typesPanier` int(11) NOT NULL,
  `nb_panierAutorise` int(11) NOT NULL,
  PRIMARY KEY (`siret_producteurs`,`jour_semaine`,`id_typesPanier`),
  KEY `panierAutorise_semaine` (`jour_semaine`),
  KEY `panierAutorise_typesPanier` (`id_typesPanier`),
  KEY `siret_producteurs` (`siret_producteurs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `paniercommande`
--

DROP TABLE IF EXISTS `paniercommande`;
CREATE TABLE IF NOT EXISTS `paniercommande` (
  `id_panierCommande` int(11) NOT NULL AUTO_INCREMENT,
  `id_commandes` int(11) NOT NULL,
  `siret_producteurs` varchar(100) NOT NULL,
  `id_typesPanier` int(11) NOT NULL,
  `nb_panierCommande` int(11) NOT NULL,
  `dateTimeRecup_panierCommande` datetime NOT NULL,
  PRIMARY KEY (`id_panierCommande`),
  KEY `panierCommande_producteurs` (`siret_producteurs`),
  KEY `panierCommande_commandes` (`id_commandes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `producteurs`
--

DROP TABLE IF EXISTS `producteurs`;
CREATE TABLE IF NOT EXISTS `producteurs` (
  `siret_producteurs` varchar(100) NOT NULL,
  `codeAPE_producteurs` varchar(100) NOT NULL,
  `enseigne_producteurs` varchar(150) NOT NULL,
  `email_producteurs` varchar(255) NOT NULL,
  `mdp_producteurs` varchar(255) NOT NULL,
  `nom_producteurs` varchar(100) NOT NULL,
  `prenom_producteurs` varchar(100) NOT NULL,
  `tel_producteurs` varchar(100) NOT NULL,
  `cp_producteurs` varchar(50) NOT NULL,
  `ville_producteurs` varchar(150) NOT NULL,
  `adresse_producteurs` varchar(255) NOT NULL,
  `description_producteurs` text NOT NULL,
  `img_producteurs` longblob DEFAULT NULL,
  PRIMARY KEY (`siret_producteurs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `id_produits` int(11) NOT NULL AUTO_INCREMENT,
  `id_typesProduits` int(11) NOT NULL,
  `nom_produits` varchar(255) NOT NULL,
  PRIMARY KEY (`id_produits`),
  KEY `produits_typesProduits` (`id_typesProduits`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `semaine`
--

DROP TABLE IF EXISTS `semaine`;
CREATE TABLE IF NOT EXISTS `semaine` (
  `jour_semaine` varchar(50) NOT NULL,
  PRIMARY KEY (`jour_semaine`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `typespanier`
--

DROP TABLE IF EXISTS `typespanier`;
CREATE TABLE IF NOT EXISTS `typespanier` (
  `id_typesPanier` int(11) NOT NULL AUTO_INCREMENT,
  `categorie_typesPanier` varchar(100) NOT NULL,
  `prix_typesPanier` float NOT NULL,
  PRIMARY KEY (`id_typesPanier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `typesproduits`
--

DROP TABLE IF EXISTS `typesproduits`;
CREATE TABLE IF NOT EXISTS `typesproduits` (
  `id_typesProduits` int(11) NOT NULL AUTO_INCREMENT,
  `nom_typesProduits` varchar(100) NOT NULL,
  PRIMARY KEY (`id_typesProduits`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `avis_consommateurs` FOREIGN KEY (`id_consommateurs`) REFERENCES `consommateurs` (`id_consommateurs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `avis_producteurs` FOREIGN KEY (`siret_producteurs`) REFERENCES `producteurs` (`siret_producteurs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes_consommateurs` FOREIGN KEY (`id_consommateurs`) REFERENCES `consommateurs` (`id_consommateurs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `evenements`
--
ALTER TABLE `evenements`
  ADD CONSTRAINT `evenements_producteurs` FOREIGN KEY (`siret_producteurs`) REFERENCES `producteurs` (`siret_producteurs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `favoris`
--
ALTER TABLE `favoris`
  ADD CONSTRAINT `favoris_consommateurs` FOREIGN KEY (`id_consommateurs`) REFERENCES `consommateurs` (`id_consommateurs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favoris_producteurs` FOREIGN KEY (`siret_producteurs`) REFERENCES `producteurs` (`siret_producteurs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `mesproduits`
--
ALTER TABLE `mesproduits`
  ADD CONSTRAINT `mesProduits_producteurs` FOREIGN KEY (`siret_producteurs`) REFERENCES `producteurs` (`siret_producteurs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mesProduits_produits` FOREIGN KEY (`id_produits`) REFERENCES `produits` (`id_produits`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `ouvertures`
--
ALTER TABLE `ouvertures`
  ADD CONSTRAINT `ouvertures_producteurs` FOREIGN KEY (`siret_producteurs`) REFERENCES `producteurs` (`siret_producteurs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ouvertures_semaine` FOREIGN KEY (`jour_semaine`) REFERENCES `semaine` (`jour_semaine`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `panierautorise`
--
ALTER TABLE `panierautorise`
  ADD CONSTRAINT `panierAutorise_producteurs` FOREIGN KEY (`siret_producteurs`) REFERENCES `producteurs` (`siret_producteurs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `panierAutorise_semaine` FOREIGN KEY (`jour_semaine`) REFERENCES `semaine` (`jour_semaine`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `panierAutorise_typesPanier` FOREIGN KEY (`id_typesPanier`) REFERENCES `typespanier` (`id_typesPanier`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `paniercommande`
--
ALTER TABLE `paniercommande`
  ADD CONSTRAINT `panierCommande_commandes` FOREIGN KEY (`id_commandes`) REFERENCES `commandes` (`id_commandes`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `panierCommande_producteurs` FOREIGN KEY (`siret_producteurs`) REFERENCES `producteurs` (`siret_producteurs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `produits_typesProduits` FOREIGN KEY (`id_typesProduits`) REFERENCES `typesproduits` (`id_typesProduits`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
