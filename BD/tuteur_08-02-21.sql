-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 08, 2021 at 03:06 PM
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
-- Database: `tuteur`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `courriel` varchar(200) NOT NULL,
  `nom_utlisateur` varchar(200) NOT NULL,
  `mot_de_passe` varchar(200) NOT NULL,
  `nom` varchar(200) NOT NULL,
  PRIMARY KEY (`courriel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `commentaire_tuteur`
--

DROP TABLE IF EXISTS `commentaire_tuteur`;
CREATE TABLE IF NOT EXISTS `commentaire_tuteur` (
  `Session_tutorat` int NOT NULL,
  `Matricule_Tutoré` varchar(7) NOT NULL,
  `Matricule_tuteur` varchar(7) NOT NULL,
  `Commentaire` longtext NOT NULL,
  PRIMARY KEY (`Session_tutorat`,`Matricule_Tutoré`),
  KEY `fk_commentaireTuteur_MatriculeTuteur` (`Matricule_tuteur`),
  KEY `fk_commentaireTuteur_MatriculeTutorer` (`Matricule_Tutoré`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `commentaire_tutorer`
--

DROP TABLE IF EXISTS `commentaire_tutorer`;
CREATE TABLE IF NOT EXISTS `commentaire_tutorer` (
  `Session_tutorat` int NOT NULL AUTO_INCREMENT,
  `Matricule_Tuteur` varchar(7) NOT NULL,
  `Matricule_Tutoré` varchar(7) NOT NULL,
  `Note_tuteur` int NOT NULL,
  PRIMARY KEY (`Session_tutorat`,`Matricule_Tuteur`),
  KEY `fk_commentaireTutorer_MatriculeTuteur` (`Matricule_Tuteur`),
  KEY `fk_commentaireTutorer_MatriculeTutorer` (`Matricule_Tutoré`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cours`
--

DROP TABLE IF EXISTS `cours`;
CREATE TABLE IF NOT EXISTS `cours` (
  `Code` varchar(15) NOT NULL,
  `Nom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `CodeProgramme` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cours`
--

INSERT INTO `cours` (`Code`, `Nom`, `CodeProgramme`) VALUES
('1011X4RI', 'Corps humain I', '180.A0'),
('1011Z4RI', 'Microbiologie appliquée aux aliments', '120.A0 '),
('1012Y4RI', 'Microbiologie et immunologie', '180.A0'),
('1012Z3RI', 'Corps humain II', '180.A0'),
('1012Z4RI', 'Biologie humaine I', '120.A0 '),
('1012Z5RI', 'Biologie humaine et microbio.', '111.A0'),
('1013Z3RI', 'Corps humain III', '180.A0'),
('1013Z5RI', 'Biologie humaine II', '120.A0 '),
('1014Z4RI', 'Corps humain IV', '180.A0'),
('101HJZ05', 'Notions de biologie', '111.A0'),
('1072Z3RI', 'Soins d\'urgence', '310.A0'),
('1093Y3RI', 'Exigences physiques du travail policier I', '310.A0'),
('1094Y2RI', 'Exigences physiques du travail policier II', '310.A0'),
('1095Y3RI', 'Exigences physiques du travail policier III', '310.A0'),
('1096Y2RI', 'Exigences physiques du travail policier IV', '310.A0'),
('111103RI', 'Santé, sécurité et fonction de travail', '111.A0'),
('111106RI', 'Anat. et physiologie tête cou', '111.A0'),
('111204RI', 'Méthodes d\'examens', '111.A0'),
('111214RI', 'L\'hygiéniste et la prévention', '111.A0'),
('111215RI', 'Prosthodontie', '111.A0'),
('111304RI', 'Pathologie buccale', '111.A0'),
('111307RI', 'Techniques d\'instrumentation', '111.A0'),
('111314RI', 'Enseign. mesures préventives', '111.A0'),
('111404RI', 'Anamnèse et traitements', '111.A0'),
('111405RI', 'Radiologie dentaire', '111.A0'),
('111414RI', 'Dentisterie opératoire', '111.A0'),
('111503RI', 'Mesures prév. prat. profes.', '111.A0'),
('111505RI', 'Int. prév. santé dent. publi.', '111.A0'),
('11151ERI', 'Stage clinique II', '111.A0'),
('111604RI', 'Stage en santé dentaire publ.', '111.A0'),
('111606RI', 'Hygiène dentaire et ortho.', '111.A0'),
('11161BRI', 'Stage clinique III', '111.A0'),
('111624RI', 'Préparation marché du travail', '111.A0'),
('111HKL04', 'Stage clinique I', '111.A0'),
('120103RI', 'Introduction à la profession', '120.A0 '),
('120104RI', 'Stratégies de l\'alimentation', '120.A0 '),
('120106RI', 'Préparation des aliments I', '120.A0 '),
('120205RI', 'Éléments de gestion des SA I', '120.A0 '),
('120206RI', 'Préparation des aliments II', '120.A0 '),
('120303RI', 'Nutrition fondamentale', '120.A0 '),
('120306RI', 'Transformation des aliments', '120.A0 '),
('120316RI', 'Éléments de gestion des SA II', '120.A0 '),
('120404RI', 'Nutrition appliquée à diverses clientèles', '120.A0 '),
('120406RI', 'Technologie alimentaire', '120.A0 '),
('120416RI', 'Production et distribution des aliments', '120.A0 '),
('120505RI', 'Coordination d\'un SA', '120.A0 '),
('120506RI', 'Contrôle de la qualité', '120.A0 '),
('120516RI', 'Nutrition clinique', '120.A0 '),
('120603RI', 'Projet de fin d\'études (ESP)', '120.A0 '),
('120605RI', 'Stratégies de communication', '120.A0 '),
('12060JRI', 'Stage', '120.A0 '),
('120HKZ03', 'Nutrition et santé dentaire', '111.A0'),
('18010DRI', 'Introduction à la profession et aux soins', '180.A0'),
('180203RI', 'Pharmacologie et adm. sécuritaire médicaments', '180.A0'),
('18020ARI', 'Évaluation clinique et médecine générale', '180.A0'),
('180319RI', 'Périnatalité', '180.A0'),
('180329RI', 'Pédiatrie', '180.A0'),
('18040ARI', 'Gériatrie, perte d\'autonomie et perspectives', '180.A0'),
('18040BRI', 'Chirurgie de base et mesures d\'urgence', '180.A0'),
('180509RI', 'Médecine et chirurgie avancées', '180.A0'),
('180518RI', 'Soins infirmiers spécialisés', '180.A0'),
('180528RI', 'Santé mentale', '180.A0'),
('18060PRI', 'Soins ambulatoires et intégration', '180.A0'),
('201174RI', 'Mathématiques appliquées 1', '221.C0'),
('201196RI', 'Mathématiques de l\'architecture', '221.A0'),
('2011V4RI', 'Mathématiques I', '270.AC'),
('2011W4RI', 'Mathématiques 1', '241.A0 241.D0'),
('2011Y3RI', 'Logique et arithmétique de l\'ordinateur', '420.B0'),
('2011Y5RI', 'Mathématiques appliquées', '235.B0'),
('2011Z4RI', 'Mathématiques appliquées au GC I', '221.B0'),
('2011Z5RI', 'Mathématiques de l\'électronique I', '243.B0'),
('201274RI', 'Mathématiques appliquées 2', '221.C0'),
('2012W4RI', 'Mathématiques 2', '241.A0 241.D0'),
('2012W5RI', 'Mathématiques électronique I', '243.D0'),
('2012Y5RI', 'Statistiques appliquées', '235.B0'),
('2012Z4RI', 'Mathématiques appliquées au GC II', '221.B0'),
('2012Z5RI', 'Mathématiques de l\'électronique II', '243.B0'),
('2013X4RI', 'Algèbre linéaire et statistiques appliquées à l\'informatique', '420.B0'),
('2014Z4RI', 'Méthodes statistiques', '241.D0'),
('2014Z5RI', 'Mathématiques électronique II', '243.D0'),
('202193RI', 'Chimie', '270.AC'),
('2021Z4RI', 'Éléments de biochimie des aliments', '120.A0 '),
('2022Z4RI', 'Notions fondamentales de chimie des aliments', '120.A0 '),
('203274RI', 'Cinématique et dynamique', '241.D0'),
('203275RI', 'Physique générale', '221.A0'),
('203284RI', 'Physique générale', '221.C0'),
('2032W5RI', 'Cinématique et dynamique des éléments de machines', '241.A0'),
('2032Z4RI', 'Mécanique appliquée', '221.B0'),
('203304RI', 'Physique générale', '235.B0'),
('203374RI', 'Statique et résistance des matériaux', '241.D0'),
('203384RI', 'Statique et résistance des matériaux', '221.A0'),
('203394RI', 'Physique appliquée', '221.C0'),
('203395RI', 'Statique et résistance des matériaux', '221.B0'),
('2033Y5RI', 'Physique milieu industriel', '243.D0'),
('2033Z4RI', 'Statique', '241.A0'),
('221104RI', 'Mécanique des fluides', '221.C0'),
('221105RI', 'Levé topométrique', '221.B0'),
('221106RI', 'Communication graphique', '221.A0'),
('221125RI', 'Études de projets en GC', '221.B0'),
('221126RI', 'Santé/sécurité et exer. profes./Stage I', '221.B0'),
('221133RI', 'Profession, santé et sécurité', '221.A0'),
('221153RI', 'Croquis architectural', '221.A0'),
('221163RI', 'Préconstruction', '221.A0'),
('221173RI', 'Initiation à la ventilation/climatisation et à la réfrig.', '221.C0'),
('221174RI', 'Init. plomberie et chauffage', '221.C0'),
('221184RI', 'Initiation à la profession', '221.C0'),
('221194RI', 'Dessin 1', '221.C0'),
('221203RI', 'Caractéristiques de l\'oeuvre architecturale', '221.A0'),
('221204RI', 'Plan et devis', '221.B0'),
('221205RI', 'Dessin assisté par ordinateur 1', '221.A0'),
('221213RI', 'Éléments énergétiques', '221.C0'),
('221225RI', 'Matériaux granulaires', '221.B0'),
('221235RI', 'Dessin 2', '221.C0'),
('221243RI', 'Design architectural', '221.A0'),
('221245RI', 'Conception en plomberie', '221.C0'),
('221253RI', 'Principes ventil./climat. 1', '221.C0'),
('221254RI', 'Méthodes constructives 1 - bois', '221.A0'),
('221264RI', 'Dessins d\'ouvrages de GC I', '221.B0'),
('221303RI', 'Dessin d\'ouvrages de GC II', '221.B0'),
('221305RI', 'Éléments climatiques', '221.C0'),
('221326RI', 'Projet 1 - bois', '221.A0'),
('221343RI', 'Codes et règlements', '221.A0'),
('221344RI', 'Enrobés bitumineux', '221.B0'),
('221353RI', 'Méthodes constructives 2 - acier', '221.A0'),
('221354RI', 'Sols I', '221.B0'),
('221363RI', 'Dessin assisté par ordinateur 2', '221.A0'),
('221364RI', 'Traitements de données topométriques', '221.B0'),
('221373RI', 'Principes de chauffage', '221.C0'),
('221374RI', 'Proc. régul. 1 circuits élec.', '221.C0'),
('221383RI', 'Principes de réfrigération', '221.C0'),
('221404RI', 'Comportement des structures', '221.B0'),
('221405RI', 'Béton de ciment', '221.B0'),
('221406RI', 'Génie municipal', '221.B0'),
('221426RI', 'Projet 2 - acier', '221.A0'),
('221433RI', 'Cahier des charges', '221.A0'),
('221443RI', 'Relevé de bâtiments', '221.A0'),
('221453RI', 'Méthodes constructives 3 - béton', '221.A0'),
('221454RI', 'Estimation et soumission', '221.B0'),
('221463RI', 'Concepts structuraux', '221.A0'),
('221464RI', 'Conception en réfrigération', '221.C0'),
('221473RI', 'Services du bâtiment 1', '221.A0'),
('221474RI', 'Conception en chauffage', '221.C0'),
('221483RI', 'Procédés de régulation 2', '221.C0'),
('221484RI', 'Principes ventil./climat. 2', '221.C0'),
('221493RI', 'Électricité du bâtiment', '221.C0'),
('2214A3RI', 'Estimation 1', '221.C0'),
('221503RI', 'Structure de bois', '221.B0'),
('221504RI', 'Dessin assisté par ordinateur spécialisé', '221.A0'),
('221507RI', 'Stage II / relation professionnelle', '221.B0'),
('221526RI', 'Projet 3 - béton', '221.A0'),
('221534RI', 'Services du bâtiment 2', '221.A0'),
('221535RI', 'Gestion de chantier', '221.B0'),
('221544RI', 'Rénovation et expertise', '221.A0'),
('221545RI', 'Immotique et fonct. systèmes', '221.C0'),
('221554RI', 'Structure d\'acier', '221.B0'),
('221564RI', 'Détails de construction 1', '221.A0'),
('221573RI', 'Surveillance et coordination de travaux', '221.A0'),
('221574RI', 'Conception ventil./climat.', '221.C0'),
('221593RI', 'Conception/implantation travaux de GC', '221.B0'),
('2215A3RI', 'Infrastructures routières I', '221.B0'),
('2215B3RI', 'Génie civil et environnement', '221.B0'),
('2215C3RI', 'Estimation 2', '221.C0'),
('2215D3RI', 'Gestion de projet', '221.C0'),
('221603RI', 'Structure de béton armé', '221.B0'),
('221607RI', 'Projet synthèse de programme', '221.C0'),
('221613RI', 'Estimation et planification', '221.A0'),
('221615RI', 'Projet synthèse', '221.B0'),
('221623RI', 'Gestion de projet', '221.A0'),
('221626RI', 'Projet 4 - rénovation et recyclage', '221.A0'),
('221633RI', 'Stage', '221.A0'),
('221643RI', 'Projets d\'installation', '221.C0'),
('221653RI', 'Efficacité énergétique', '221.C0'),
('221654RI', 'Maintenance des systèmes', '221.C0'),
('221663RI', 'Protection incendie', '221.C0'),
('221664RI', 'Détails de construction 2', '221.A0'),
('221674RI', 'Modélisation et rendérisation', '221.A0'),
('221694RI', 'Concepts novateurs et spécialités du bâtiment', '221.A0'),
('2216A4RI', 'Matériel et dessin de présentation', '221.A0'),
('2216C4RI', 'Infrastructures routières II', '221.B0'),
('2216D4RI', 'Inspection des ouvrages', '221.B0'),
('2216E4RI', 'Sols II', '221.B0'),
('235103RI', 'Procédés de production du bois', '235.B0'),
('235105RI', 'Nouvelles organisations du travail', '235.B0'),
('235106RI', 'Santé et sécurité au travail', '235.B0'),
('2351Z3RI', 'Outils d\'organisation', '241.D0'),
('235204RI', 'Gestion de la qualité', '235.B0'),
('235206RI', 'Analyse des méthodes de travail', '235.B0'),
('235305RI', 'Mesure du travail', '235.B0'),
('235306RI', 'Planification de la production', '235.B0'),
('235404RI', 'Techniques d\'aménagement', '235.B0'),
('235405RI', 'Contrôle de la qualité', '235.B0'),
('235406RI', 'Stocks et entrepôts', '235.B0'),
('2354Z4RI', 'Nouvelles organis. du travail', '241.A0'),
('235505RI', 'Supervision de la production', '235.B0'),
('235524RI', 'Gestion de la maintenance', '235.B0'),
('2355G3RI', 'Organisation de la production en moyenne série', '241.A0'),
('235605RI', 'Gestion de projets', '235.B0'),
('235607RI', 'Optimisation de la production', '235.B0'),
('241103RI', 'Métrologie appliquée à la maintenance', '241.D0'),
('241104RI', 'Introduction usinage numérique', '241.A0'),
('241106RI', 'Introduction usinage conventionnel', '241.A0'),
('241113RI', 'Sécurité et fonctions de travail', '241.D0'),
('241114RI', 'Croquis, plans et devis', '241.D0'),
('241115RI', 'Systèmes hydrauliques', '241.D0'),
('241124RI', 'Mécanismes industriels', '241.D0'),
('2411B4RI', 'Métrologie', '241.A0 '),
('241205RI', 'Usinage conventionnel et numérique I', '241.A0'),
('241206RI', 'Dessin technique et croquis', '241.A0 '),
('241215RI', 'Dessin et construction mécanique', '241.A0'),
('241224RI', 'Systèmes pneumatiques', '241.D0'),
('241225RI', 'Procédés de fabrication', '241.A0'),
('241234RI', 'Travaux d\'atelier', '241.D0'),
('2412Z3RI', 'Plans et croquis', '235.B0'),
('241304RI', 'Assemblages et alignement', '241.D0'),
('241305RI', 'Prog. commande numérique', '241.A0'),
('241306RI', 'Dessins de détails et d\'ens.', '241.A0'),
('241313RI', 'Dessin technique', '241.D0'),
('241324RI', 'Commandes séquentielles', '241.D0'),
('241334RI', 'Lubrification', '241.D0'),
('2413Y4RI', 'Systèmes mécaniques', '235.B0'),
('2413Z4RI', 'Dessin assisté par ordinateur', '235.B0'),
('241404RI', 'Planif. et contrôle qualité', '241.A0'),
('241405RI', 'Usinage conv. et numérique II', '241.A0'),
('241406RI', 'Réseaux hyd. et pneumatiques', '241.D0'),
('241415RI', 'Tolérances dimensionnelles et géométriques', '241.A0'),
('241423RI', 'Résistance des matériaux', '241.A0'),
('241424RI', 'Éléments machines/mécanismes', '241.A0'),
('241426RI', 'Activités de fabrication', '241.D0'),
('2414Z3RI', 'Métrologie', '235.B0'),
('241503RI', 'Gamme de fabrication', '241.A0'),
('241504RI', 'Gestion projets de conception', '241.A0'),
('241505RI', 'Systèmes hydrau./pneumatique', '241.A0'),
('241525RI', 'Conception systèmes mécan. I', '241.A0'),
('241534RI', 'Gestion de la maintenance 1', '241.D0'),
('241545RI', 'Projet de fabrication I', '241.A0'),
('241555RI', 'Tournage numérique avancé', '241.A0'),
('241564RI', 'Conception gabarit de montage', '241.A0'),
('241565RI', 'Mécanismes automatisés', '241.D0'),
('241574RI', 'Modélisation paramétrique', '241.A0'),
('241575RI', 'Hydraulique avancé', '241.D0'),
('241584RI', 'Automatisation I', '241.A0'),
('241594RI', 'Conception d\'out. de fabrica.', '241.A0'),
('2415A4RI', 'Conception mécanique', '241.D0'),
('2415K5RI', 'Programmation graphique', '241.A0'),
('2415Y3RI', 'Introduction aux procédés mécaniques', '235.B0'),
('241603RI', 'Conception bâtis de machines', '241.A0'),
('241606RI', 'Projet de conception', '241.A0'),
('241607RI', 'Projet de fabrication II', '241.A0'),
('241608RI', 'Projet', '241.D0'),
('241613RI', 'Services techniques', '241.D0'),
('241644RI', 'Analyse de vibration', '241.D0'),
('241645RI', 'Dépannages industriels', '241.D0'),
('241654RI', 'Automatisation II', '241.A0'),
('241664RI', 'Modélisation avancée', '241.A0'),
('241674RI', 'Production outillages fabri.', '241.A0'),
('241684RI', 'Auto. procédés fabrication', '241.A0'),
('241694RI', 'Entretien machines fabrica.', '241.A0'),
('2416A4RI', 'Circuits hydraulique/pneuma.', '241.A0'),
('2416C4RI', 'Gestion de maintenance II', '241.D0'),
('2416F5RI', 'Conception systèmes mécan. II', '241.A0'),
('2416Y3RI', 'Systèmes automatisés', '235.B0'),
('2416Z4RI', 'Pneumatique et hydraulique', '243.D0'),
('243104RI', 'Ordinateur-poste de travail', '243.B0'),
('243106RI', 'Circuits électriques à courant continu', '243.B0'),
('243113RI', 'Santé et sécurité', '243.D0'),
('243114RI', 'Circuits logiques', '243.B0'),
('243115RI', 'Automatisation', '243.D0'),
('243123RI', 'Dessins industriels', '243.D0'),
('243124RI', 'Technologie de l\'information', '243.D0'),
('243134RI', 'Robotique', '243.D0'),
('243205RI', '243205RIRéseau ', '243.B0'),
('243206RI', 'Circuits électriques à courant alternatif', '243.B0'),
('243214RI', 'Travaux d\'atelier', '243.D0'),
('243215RI', 'Régulation de procédés', '243.D0'),
('243225RI', ' Circuits électriques', '243.D0'),
('2432Z3RI', 'Introduction à la régulation', '221.C0'),
('243305RI', 'Électronique numérique', '243.B0'),
('243306RI', 'Électronique analogique', '243.B0'),
('243315RI', 'Systèmes de télécommunications', '243.B0'),
('243316RI', 'Réseau II', '243.B0'),
('243326RI', 'Moteurs électriques', '243.D0'),
('243336RI', 'Régulation avancée', '243.D0'),
('243346RI', 'Circuits électroniques', '243.D0'),
('2433X4RI', 'Électricité I', '241.D0'),
('243406RI', 'Système d\'alimentation', '243.B0'),
('243415RI', 'Électronique de puissance', '243.D0'),
('243416RI', 'Automatisation avancée', '243.D0'),
('243425RI', 'Infrastructures réseau', '243.D0'),
('243435RI', 'Panneaux de commande industriels', '243.D0'),
('2434A5RI', 'Système d\'exploitation Unix', '243.B0'),
('2434C5RI', 'Métrologie RF', '243.B0'),
('2434E5RI', 'Microprocesseur', '243.B0'),
('2434R4RI', 'Système d\'exploitation Microsoft', '243.B0'),
('2434R5RI', 'Réseau III', '243.B0'),
('2434T5RI', 'Circuits RF', '243.B0'),
('2434T8RI', 'Émission et réception I - communication analogique', '243.B0'),
('2434Z4RI', 'Électricité II', '241.D0'),
('243504RI', 'Dessin électronique', '243.B0'),
('243514RI', 'Sécurité machine', '243.D0'),
('243515RI', 'Maintenance et dépannage', '243.D0'),
('243516RI', 'Mesures industrielles', '243.D0'),
('243524RI', 'Interfaces opérateurs', '243.D0'),
('243525RI', 'Système de positionnement', '243.D0'),
('2435A4RI', 'Serveurs et sécurités', '243.B0'),
('2435A5RI', 'Microcontrôleurs', '243.B0'),
('2435C5RI', 'Traitement de l\'information et des signaux', '243.B0'),
('2435C6RI', 'Émission et réception II - communication numérique', '243.B0'),
('2435E5RI', 'Réseau IV', '243.B0'),
('2435T5RI', 'Réseaux hertziens', '243.B0'),
('2435T6RI', 'Réseaux câblés et optiques', '243.B0'),
('2435W5RI', 'Systèmes ordinés', '243.B0'),
('2435X5RI', 'Périphériques', '243.B0'),
('2435Z4RI', 'Dispositifs puissance électr.', '241.D0'),
('2435Z5RI', 'Systèmes électriques et électroniques', '235.B0'),
('243614RI', 'Système de contrôle réparti', '243.D0'),
('243615RI', 'Réseaux électriques et protections', '243.D0'),
('243616RI', 'Projet installation en instrumentation (ESP)', '243.D0'),
('243626RI', 'Robotique appliquée', '243.D0'),
('2436C7RI', 'Intégration d\'un système de télécommunication', '243.B0'),
('2436E3RI', 'Maintenance et dépannage de systèmes ordinés', '243.B0'),
('2436R3RI', 'Projet en réseautique - synthèse réseau', '243.B0'),
('2436R4RI', 'Machines virtuelles', '243.B0'),
('2436R6RI', 'Stage en milieu industriel', '243.B0'),
('2436R7RI', 'Projet électronique - systèmes ordinés', '243.B0'),
('2436T5RI', 'Réseaux sans fil', '243.B0'),
('2436T6RI', 'Stage en milieu industriel', '243.B0'),
('2436T7RI', 'Maintenance/dépannage de système de télécommunication', '243.B0'),
('270103RI', 'Métallographie', '270.AC'),
('270115RI', 'Sciences des matériaux', '270.AC'),
('270124RI', 'Techno. fab/soudage', '270.AC'),
('2703W3RI', 'Matériaux et procédés d\'élaboration', '241.A0 '),
('2704W3RI', 'Planification des traitements thermiques', '241.A0'),
('2704Z3RI', 'Introduction aux procédés métallurgiques', '235.B0'),
('2704Z5RI', 'Matériaux et soudage', '241.D0'),
('310123RI', 'Méthodes d\'observation', '310.A0'),
('310133RI', 'Fonction et organisation de la police', '310.A0'),
('310143RI', 'Système juridique du Québec', '310.A0'),
('310223RI', 'Infractions criminelles', '310.A0'),
('310233RI', 'Interventions lors d\'incidents mineurs', '310.A0'),
('310243RI', 'Lois du Québec et règlements municipaux', '310.A0'),
('310315RI', 'Pouvoirs et devoirs', '310.A0'),
('310323RI', 'Ressources communautaires', '310.A0'),
('310333RI', 'Droit privé', '310.A0'),
('310343RI', 'Criminologie', '310.A0'),
('310354RI', 'Interventions en sécurité routière', '310.A0'),
('310413RI', 'Interventions relatives aux drogues', '310.A0'),
('310414RI', 'Opérations planifiées', '310.A0'),
('310423RI', 'Réinsertion sociale', '310.A0'),
('310433RI', 'Enquête I', '310.A0'),
('310533RI', 'Interventions en capacités affaiblies', '310.A0'),
('310534RI', 'Enquête II', '310.A0'),
('310543RI', 'Techniques spécialisées en communication', '310.A0'),
('310553RI', 'Interventions circulation et accidents routiers', '310.A0'),
('310563RI', 'Stage d\'observation', '310.A0'),
('3105Z3RI', 'Aspect légaux de la profession', '420.B0'),
('310623RI', 'Stratégies d\'intervention', '310.A0'),
('310633RI', 'Conduite préventive', '310.A0'),
('310634RI', 'Interventions policières appliquées', '310.A0'),
('310643RI', 'Jeunes en difficulté', '310.A0'),
('310644RI', 'Communication de la preuve', '310.A0'),
('310654RI', 'Interventions en situation de crise', '310.A0'),
('3501X3RI', 'Tech. de base de la communication', '310.A0'),
('3501Z3RI', 'Psychologie du développement humain I', '388.A0'),
('3502X3RI', 'Comportement/interaction en milieu de travail', '235.B0'),
('3502Z4RI', 'Interrelations/communication', '111.A0'),
('3503Z3RI', 'Psychologie de l\'enfant', '180.A0'),
('3504W3RI', 'Communication en informatique', '420.B0'),
('3504X3RI', 'Psychologie de l\'adolescence à la fin de vie', '180.A0'),
('3504Y3RI', 'Fonctionnement et gestion des équipes', '235.B0'),
('3504Z3RI', 'Psychologie du développement humain II', '388.A0'),
('3505Z4RI', 'Problématiques professionnelles', '310.A0'),
('350903RI', 'Communication en milieu de travail', '570.E0 120.A0 221.A0 243.B0 221.C0'),
('3871W3RI', 'Travail social et société', '388.A0'),
('3871X3RI', 'Familles et société', '180.A0'),
('3872Y3RI', 'Communautés culturelles et ethniques', '310.A0'),
('3872Z3RI', 'Santé et société', '180.A0'),
('3874Y3RI', 'Clientèles différenciées', '310.A0'),
('388.A0', 'Ressources en travail social', '388.A0'),
('388124RI', 'Communication en relation d\'aide', '388.A0'),
('388163RI', 'Introduction au travail social', '388.A0'),
('388173RI', 'Anim. de groupe et trav. d\'équipe', '388.A0'),
('388226RI', 'Stage d\'implication', '388.A0'),
('388253RI', 'Législation et droits 1', '388.A0'),
('388254RI', 'Processus intervention auprès des individus 1', '388.A0'),
('388263RI', 'Contexte social I', '388.A0'),
('388314RI', 'Intervention collective 1', '388.A0'),
('388324RI', 'Processus d\'intervention auprès des individus II', '388.A0'),
('388334RI', 'Intervention sociale de groupe', '388.A0'),
('388373RI', 'Législations et droits II', '388.A0'),
('388423RI', 'Contexte social II', '388.A0'),
('388433RI', 'Travail social et famille', '388.A0'),
('388443RI', 'Travail social et dépendances', '388.A0'),
('388474RI', 'Intervention collective II', '388.A0'),
('388484RI', 'Intervention socio- juridique', '388.A0'),
('388494RI', 'Travail social et groupes sociaux', '388.A0'),
('38852KRI', 'Stage d\'analyse', '388.A0'),
('388544RI', 'Intervention collective III', '388.A0'),
('388593RI', 'Intervention sociale en situation de crise', '388.A0'),
('3885A3RI', 'Travail social et santé mentale', '388.A0'),
('3885Z3RI', 'Santé mentale et toxicomanie', '310.A0'),
('38862VRI', 'Stage d\'intervention', '388.A0'),
('393114RI', 'Introduction à la profession', '393.B0'),
('393124RI', 'Intro. à la gestion des documents et des archives', '393.B0'),
('393134RI', 'Analyse et description bibliographique', '393.B0'),
('393163RI', 'Sources et recherche d\'information I', '393.B0'),
('393234RI', 'Accueil des publics', '393.B0'),
('393244R', 'Conservation des documents', '393.B0'),
('393253RI', 'Indexation I', '393.B0'),
('393254RI', 'Bases de données documentaires', '393.B0'),
('393263RI', 'Typologie des documents', '393.B0'),
('393264RI', 'Classification I', '393.B0'),
('393323RI', 'Indexation II', '393.B0'),
('393343RI', 'Promotion des services d\'information', '393.B0'),
('393354RI', 'Gestion des milieux documentaires', '393.B0'),
('393364RI', 'Traitement des documents administratifs et des archives', '393.B0'),
('393374RI', 'Description et accès', '393.B0'),
('393434RI', 'Sources et recherche d\'information II', '393.B0'),
('393444RI', 'Systèmes intégrés de gestion de bibliothèque', '393.B0'),
('393454RI', 'Gestion de l\'information numérique', '393.B0'),
('393464RI', 'Gestion et développement des collections', '393.B0'),
('393473RI', 'Classification II', '393.B0'),
('393503RI', 'Préparation aux stages', '393.B0'),
('393533RI', 'Synthèse du traitement intellectuel', '393.B0'),
('393543RI', 'Technologies en bibliothèques', '393.B0'),
('393544RI', 'Diffusion et mise en valeur des archives', '393.B0'),
('393553RI', 'Médiation culturelle', '393.B0'),
('393554RI', 'Référence et formation', '393.B0'),
('393603RI', 'Projet (ÉSP)', '393.B0'),
('393HJR21', 'Stage', '393.B0'),
('4102Z3RI', 'Gestion des ressources humaines', '235.B0'),
('4104Z3RI', 'Gestion du personnel', '120.A0 '),
('4105X3RI', 'Représentation technique', '221.C0'),
('4105Z4RI', 'Estimation des coûts de production', '235.B0'),
('420116RI', 'Introduction à la programmation', '420.B0'),
('420124RI', 'Développement Web I', '420.B0'),
('420134RI', 'Métiers-Technologies-Applications', '420.B0'),
('4201R3RI', 'Logiciels d\'application générale', '393.B0'),
('4201T3RI', 'Informatique appliquée au GC', '221.B0'),
('4201U3RI', 'Systèmes d\'information et de production', '235.B0'),
('4201V3RI', 'Introduction à la micro-informatique', '570.E0'),
('4201Y3RI', 'Informatique de base', '270.AC'),
('420214RI', 'Principes liés aux bases de données', '420.B0'),
('420215RI', 'Programmation orientée objet', '420.B0'),
('420224RI', 'Développement Web II', '420.B0'),
('420236RI', 'Système d\'exploitation et composantes matérielles', '420.B0'),
('4202W3RI', 'Informatique', '221.C0'),
('420316RI', 'Cybersécurité', '420.B0'),
('420325RI', 'Programmation d\'interface graphique', '420.B0'),
('420326RI', 'Base de données I', '420.B0'),
('420336RI', 'Développement Web III', '420.B0'),
('420416RI', 'Base de données II', '420.B0'),
('420417RI', 'Génie logiciel', '420.B0'),
('420425RI', 'Programmation réalité virtuelle - Jeux - Simulations', '420.B0'),
('420444RI', 'Assurance qualité logicielle', '420.B0'),
('420517RI', 'Projet d\'intégration-Phase I', '420.B0'),
('420526RI', 'Domaines d\'exploration technologique I', '420.B0'),
('420614RI', 'Domaines d\'exploration technologique II', '420.B0'),
('420616RI', 'Projet d\'intégration - Phase II', '420.B0'),
('42061VRI', 'Stage en entreprise', '420.B0'),
('420636RI', 'Programmation d\'applications mobiles', '420.B0'),
('5101Z3RI', 'Dessin d\'observation', '570.E0'),
('5102Z3RI', 'Théorie de la couleur', '570.E0'),
('5204Z3RI', 'Histoire de l\'art', '570.E0'),
('570103RI', 'Matériaux et finis I', '570.E0'),
('570104RI', 'Études et projets I', '570.E0'),
('570114RI', 'Dessin assisté par ordinateur I', '570.E0'),
('570124RI', 'Croquis technique', '570.E0'),
('570203RI', 'Matériaux et finis II', '570.E0'),
('570204RI', 'Études et projets II', '570.E0'),
('570206RI', 'Présentation graphique I', '570.E0'),
('570214RI', 'Dessin assisté par ordinateur II', '570.E0'),
('570303RI', 'Couleur et design', '570.E0'),
('570304RI', 'Principes de construction I', '570.E0'),
('570308RI', 'Études et projets III', '570.E0'),
('570314RI', 'Dessin assisté par ordinateur III', '570.E0'),
('570324RI', 'Éléments sur mesure I', '570.E0'),
('570404RI', 'Éclairage', '570.E0'),
('570408RI', 'Études et projets IV', '570.E0'),
('570414RI', 'Dessin assisté par ordinateur IV', '570.E0'),
('570503RI', 'Éléments sur mesure II', '570.E0'),
('570504RI', 'Principes de construction II', '570.E0'),
('570508RI', 'Études et projets V', '570.E0'),
('570514RI', 'Espace-concept', '570.E0'),
('570604RI', 'Projet de fin d\'études', '570.E0'),
('570608RI', 'Études et projets VI', '570.E0'),
('570613RI', 'Design et culture du XXe siècle', '570.E0'),
('570614RI', 'Pratique professionnelle', '570.E0'),
('570623RI', 'Stage en milieu de travail', '570.E0'),
('570624RI', 'Présentation graphique II', '570.E0'),
('643636RI', 'Stage', '243.D0');

-- --------------------------------------------------------

--
-- Table structure for table `cours_enseigner`
--

DROP TABLE IF EXISTS `cours_enseigner`;
CREATE TABLE IF NOT EXISTS `cours_enseigner` (
  `Matricule` varchar(7) NOT NULL,
  `Cours` varchar(15) NOT NULL,
  PRIMARY KEY (`Matricule`,`Cours`),
  KEY `fk_cours_enseigner_cours` (`Cours`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `disponibiliter`
--

DROP TABLE IF EXISTS `disponibiliter`;
CREATE TABLE IF NOT EXISTS `disponibiliter` (
  `Code` varchar(40) NOT NULL,
  `Jours` varchar(50) NOT NULL,
  `Session` varchar(50) NOT NULL,
  `Année` int NOT NULL,
  `Heure_début` int NOT NULL,
  `Heure_fin` int NOT NULL,
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dispo_tuteur`
--

DROP TABLE IF EXISTS `dispo_tuteur`;
CREATE TABLE IF NOT EXISTS `dispo_tuteur` (
  `Matricule` varchar(7) NOT NULL,
  `Code_Dispo` varchar(40) NOT NULL,
  PRIMARY KEY (`Matricule`,`Code_Dispo`),
  KEY `fk_dispo_tuteur` (`Code_Dispo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `eleves`
--

DROP TABLE IF EXISTS `eleves`;
CREATE TABLE IF NOT EXISTS `eleves` (
  `Matricule` varchar(7) NOT NULL,
  `Nom` varchar(200) NOT NULL,
  `Courriel` varchar(200) NOT NULL,
  `Programme` varchar(15) NOT NULL,
  `Téléphone` varchar(14) NOT NULL,
  `Enseignant_ressource` varchar(7) NOT NULL,
  PRIMARY KEY (`Matricule`),
  KEY `fk_enseignant_ressource` (`Enseignant_ressource`),
  KEY `fk_programme_eleve` (`Programme`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `eleves`
--

INSERT INTO `eleves` (`Matricule`, `Nom`, `Courriel`, `Programme`, `Téléphone`, `Enseignant_ressource`) VALUES
('1734055', 'Alexandra Sirois', 'alexandra.sirois.01@edu.cegeptr.qc.ca', '420.BO', '(819) 269-3875', '1734055'),
('1773906', 'Zachary Lafrenière', 'zachary.lafrenière.01@edu.cegeptr.qc.ca', '111.A0', '(819) 944-1542', '1734055');

-- --------------------------------------------------------

--
-- Table structure for table `enseignant`
--

DROP TABLE IF EXISTS `enseignant`;
CREATE TABLE IF NOT EXISTS `enseignant` (
  `Matricule` varchar(7) NOT NULL,
  `Nom` varchar(200) NOT NULL,
  `Courriel` varchar(200) NOT NULL,
  `Département` varchar(200) NOT NULL,
  `Téléphone` varchar(14) NOT NULL,
  PRIMARY KEY (`Matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `enseignant`
--

INSERT INTO `enseignant` (`Matricule`, `Nom`, `Courriel`, `Département`, `Téléphone`) VALUES
('1734055', 'Alexandra Sirois', 'alexandra.sirois.01@edu.cegeptr.qc.ca', 'Mathématique', '(819) 269-3875');

-- --------------------------------------------------------

--
-- Table structure for table `programme`
--

DROP TABLE IF EXISTS `programme`;
CREATE TABLE IF NOT EXISTS `programme` (
  `Code` varchar(15) NOT NULL,
  `Nom` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `programme`
--

INSERT INTO `programme` (`Code`, `Nom`, `description`) VALUES
('111.A0', 'Techniques d’hygiène dentaire', 'En tant qu’hygiéniste dentaire, tu dépisteras les maladies buccodentaires en plus d’effectuer des traitements tels que le polissage des dents, la pose de scellants et le détartrage. Tu collaboreras avec le ou la dentiste en appliquant différentes mesures visant à prévenir et à guérir les maladies buccodentaires. L’hygiéniste dentaire est également responsable de promouvoir la santé buccale auprès de la population.\r\n\r\nDans ton cheminement, tu auras des cours de biologie, notamment sur les structures et les fonctions de la tête et du cou. Tu apprendras à connaitre les matériaux utilisés en dentisterie en plus d’acquérir des notions sur la saine nutrition et la santé dentaire. Enfin, les nombreux laboratoires et stages cliniques te prépareront adéquatement à intégrer le marché du travail.'),
('120.A0', 'Techniques de diététique', 'Développer des produits alimentaires, s’occuper du contrôle de la qualité des aliments et gérer un service alimentaire sont des responsabilités qui relèvent d’un technicien ou d’une technicienne en diététique. Tu pourras aussi évaluer la composition d’un menu en plus de participer à la mise en œuvre d’un plan de traitement nutritionnel. Tu seras une personne de référence pour prodiguer des conseils nutritionnels à différentes clientèles.\r\n\r\nAu cours de ta formation, tu étudieras la contribution des nutriments sur l’organisme humain de même que les liens entre les types d’aliments et leur préparation culinaire. Tu auras des cours de biologie et de chimie des aliments. Tu verras également des notions de gestion et de contrôle de l’hygiène et de la salubrité qui te prépareront à coordonner un service alimentaire ou à assurer la qualité des produits en industrie.'),
('180.A0', 'Techniques de soins infirmiers', 'Comme infirmier ou infirmière, tu détermineras l’état de santé d’une personne et tu assureras la réalisation de son plan de soins. Tu enseigneras des méthodes de prévention de la maladie à un patient ou une patiente et à ses proches. Tu pourras intervenir auprès d’enfants, d’adultes et de personnes âgées.\r\n\r\nDans ton cheminement, tu auras des cours de biologie qui te permettront de bien connaitre le corps humain et son fonctionnement. Tu développeras différentes méthodes d’évaluation et de soins. Au terme de ta formation et des stages que tu auras réalisés, tu maitriseras les notions d’intervention, notamment en chirurgie, en périnatalité et en santé mentale, propres à l’exercice de la profession d’infirmier ou d’infirmière.'),
('221.A0', 'Technologie de l’architecture', 'En tant que technologue en architecture, tu contribueras à la réalisation de projets de construction en produisant des dessins et en concevant les détails d’un bâtiment. Tu estimeras les couts d’un projet en plus de coordonner les travaux d’un chantier. Le ou la technologue en architecture est également responsable de vérifier la conformité d’un bâtiment aux lois et aux normes en vigueur.\r\n\r\nAu cours de ta formation, tu te familiariseras avec différentes méthodes de construction, entre autres, avec le bois, l’acier et le béton. Tu auras des cours de dessin assisté par ordinateur et tu apprendras à lire et à interpréter des dessins et des devis. À la fin du programme, tu auras développé une grande aisance pour le dessin de présentation qui te sera très utile sur le marché du travail.'),
('221.B0', 'Technologie du génie civil', 'Le ou la technologue en génie civil inspecte et assure le contrôle de la qualité des structures routières et des bâtiments. Tu participeras à la conception de projets de construction ou de réfection en plus d’assurer le suivi des travaux du chantier. Tu seras également amené à effectuer des travaux d’arpentage et des analyses de sols et de matériaux.\r\n\r\nDans ton cheminement, tu étudieras les méthodes de fabrication de matériaux de construction en plus d’analyser différentes réactions structurales. Tu apprendras à lire des plans et des devis en plus d’apprendre à estimer les couts de construction d’un projet. Tu développeras également une logique mathématique utile à la résolution de problèmes liés aux bâtiments et aux travaux publics.'),
('221.C0', 'Technologie de la mécanique du bâtiment (Génie du bâtiment)', 'Comme technologue en mécanique du bâtiment, tu assureras le bon fonctionnement des systèmes mécaniques d’un bâtiment en plus d’optimiser leur utilisation d’énergie. Tu développeras et concevras des systèmes de ventilation, de chauffage, de climatisation, de réfrigération, de plomberie et de protection-incendie.\r\n\r\nAu cours de ta formation, tu étudieras la conception des différents systèmes dans le but d’optimiser leur fonctionnement. Tu apprendras à lire des plans et des devis. Tu auras aussi des cours de dessins techniques et d’estimation des couts de projets en mécanique du bâtiment. Au terme de ta formation et des stages que tu auras réalisés, tu possèderas une connaissance technique et pratique de la profession qui te sera grandement utile sur le marché du travail.'),
('235.B0', 'Technologie du génie industriel', 'En tant que technologue en génie industriel, tu seras responsable de la planification, l’organisation, la direction et le contrôle de la production en vue d’améliorer la performance et l’efficacité d’une organisation. Ton champ d’action s’étendra de l’approvisionnement en matières premières à la distribution des produits, en passant par la production de biens ou la prestation de services. Le génie industriel touche les aspects humains, techniques et financiers d’une entreprise.\r\n\r\nDans ta formation, tu participeras à des projets en vue de réduire les couts de production et d’élaborer des méthodes de travail mieux adaptées. Organiser les espaces de travail, gérer les stocks et améliorer la qualité comptent parmi les compétences que tu seras en mesure d’acquérir au cours de ton cheminement.  Tu exploreras également le domaine des ressources humaines en apprenant, entre autres, à gérer du personnel.  Bref, le programme t’amènera à être une personne de référence pour accroitre la compétitivité d’une entreprise.'),
('241.A0', 'Techniques de génie mécanique', 'Les responsabilités d’un technicien ou d’une technicienne en génie mécanique sont principalement de concevoir, modéliser, fabriquer et optimiser des systèmes mécaniques dans différents secteurs tels que les transports, l’énergie, les ressources naturelles, la production manufacturière et les secteurs alimentaire et biomédical. Les tâches comprennent la planification et le contrôle de qualité. Tu travailleras dans un domaine hautement technologique en constante évolution qui exploite des outils logiciels spécialisés.\r\n\r\nAu cours de ta formation, tu apprendras les notions du design mécanique ainsi que les différents procédés de fabrication. Tu maitriseras, entre autres, l’usinage à commande numérique et conventionnel. Tu auras des cours de dessin technique, d’automatisation, d’hydraulique et de matériaux. Au terme de ta 2e année d’études, tu choisiras, en fonction de tes intérêts, une spécialisation parmi les options Conception et Fabrication afin d’acquérir des connaissances approfondies. Tu pourras également poursuivre des études universitaires si tu souhaites être ingénieur.'),
('241.D0', 'Technologie de la mécanique industrielle (maintenance)', 'Comme technicien ou technicienne en maintenance industrielle, tu auras à planifier et à réaliser l’installation de nouveaux équipements industriels. Tu assureras le fonctionnement optimal des équipements et des systèmes de production existants. Les tâches comprennent le diagnostic, au moyen d’appareils spécialisés, et l’analyse de l’état des systèmes afin de les améliorer et de planifier les interventions d’entretien pertinentes. La réparation des défauts et des bris d’équipements fera également partie de tes responsabilités. La maintenance préventive exige une gestion des interventions et des ressources à l’aide d’un logiciel spécialisé.\r\n\r\nLa formation inclut plusieurs disciplines telles que la mécanique, l’électricité, l’hydraulique, la pneumatique, les matériaux, la soudure et l’automatisation. Tu apprendras à lire et à interpréter des plans et des devis. Dans ton cheminement, tu auras également l’occasion de concevoir et de fabriquer des pièces et de te familiariser avec les règles de sécurité en vigueur dans la profession.'),
('243.B0', 'Technologie de l’électronique', 'En tant que technologue en électronique, tu seras responsable d’installer, de programmer et d’entretenir des systèmes et des équipements électroniques de toute nature. Tu participeras également à la conception et à la fabrication de ces équipements. La spécialisation en Ordinateurs et réseaux porte plus particulièrement sur le soutien informatique et le fonctionnement des réseaux alors que la spécialisation en Télécommunications porte sur les systèmes transporteurs des signaux.\r\n\r\nAu cours de ta formation, tu apprendras à concevoir des circuits électriques. Tu verras comment diagnostiquer des problèmes électroniques numériques et analogiques. Tes cours te permettront de maitriser les types de réseaux ainsi que les systèmes d’alimentation et d’exploitation dans le but d’assister les usagers.'),
('243.D0', 'Technologie du génie électrique – Automatisation et contrôle', 'Les connaissances acquises dans ce programme te permettront de réaliser plusieurs tâches de technologue en génie électrique. Tu pourras, entre autres, mettre en service, installer ainsi qu’entretenir des équipements servant à l’automatisation. Tu pourras aussi assurer le contrôle électrique d’usines et entreprises de production. Au quotidien, tu interviendras sur des équipements électrique, électronique, robotique, pneumatique, informatique ou réseautique.\r\n\r\nDurant ton cheminement, tu apprendras les nombreuses particularités de ton futur environnement de travail. Tu étudieras notamment les rouages des systèmes automatisés ainsi que des équipements de contrôle et de commande industriels. Ta formation te permettra de découvrir une panoplie d’outils comme des appareils de mesure, des capteurs, des systèmes automatisés programmables, des variateurs de vitesse, des moteurs, etc. Tu développeras également des compétences qui te permettront d’analyser le fonctionnement des procédés d’automatisation.'),
('270.AO', 'Technologie du génie métallurgique – Contrôle des matériaux', 'En tant que technologue en génie métallurgique spécialisé en Contrôle des matériaux, tu seras responsable de vérifier la qualité de divers matériaux en effectuant des essais mécaniques, chimiques, métallographiques et non destructifs. Tu analyseras et interprèteras les résultats obtenus aux différents tests. Tu seras aussi amené à participer à la recherche, la planification et l’élaboration des procédés de production et de contrôle.\r\n\r\nAu cours de ta formation, tu te familiariseras avec des techniques chimiques et physiques d’analyse des matériaux comme la radiographie et l’ultrason. Tu étudieras les différents types d’alliages. Tu verras également comment mesurer les propriétés mécaniques des matériaux en plus d’apprendre à contrôler leur composition chimique. Le programme te préparera à devenir un spécialiste en analyses de toutes sortes.'),
('310.A0', 'Techniques policières', 'Maintenir la paix, protéger la vie et les biens, prévenir et contrôler les activités criminelles sont les responsabilités d’un policier ou d’une policière. Tu devras faire respecter les règlementations en vigueur, recueillir des éléments de preuve et dresser des constats d’infraction. Tu seras aussi amené à rassurer les gens de même qu’à les référer aux ressources appropriées en cas de besoin.\r\n\r\nDans ton cheminement, tu verras comment fonctionne le système juridique. Tu apprendras comment communiquer avec diverses clientèles et à intervenir en situation d’urgence. Tu étudieras la criminologie et les différentes étapes d’une enquête. Tu développeras également des habiletés physiques visant, entre autres, à assurer ta défense et à conduire adéquatement une intervention.'),
('388.A0', 'Techniques de travail social', 'Comme technicien ou technicienne en travail social, tu interviendras auprès de personnes, de familles, de groupes ou de communautés vivant différents problèmes sociaux. Ces problèmes peuvent toucher la pauvreté, la violence, l’isolement, les difficultés d’adaptation, la toxicomanie, etc. Tu participeras à l’élaboration, la réalisation et l’évaluation des plans d’intervention dans le but de restaurer ou de développer l’équilibre entre un individu et son environnement.\r\n\r\nAu cours de ta formation, tu étudieras le développement de la personne et les facteurs expliquant différents problèmes sociaux. Tu te familiariseras avec les législations sociales et les droits de la personne. Au terme de ta formation, tu maitriseras le processus d’intervention qui te permettra de travailler efficacement auprès de différentes clientèles.'),
('393.B0', 'Techniques de la documentation', 'En tant que technicien ou technicienne en documentation, tu seras responsable de décrire, classer, repérer et diffuser des documents, principalement dans des bibliothèques et des services de gestion de documents administratifs. Tu seras en contact direct avec diverses clientèles afin de répondre à leurs besoins d’information variés.\r\n\r\nDans ton cheminement, tu apprendras les normes actuelles de description, de classification et d’indexation des documents. Tu te familiariseras avec les systèmes intégrés de gestion de documents que l’on retrouve dans les bibliothèques et pour la gestion des documents administratifs. Au terme du programme, tu auras développé les compétences nécessaires pour analyser des problèmes liés à la gestion des milieux documentaires, à proposer des solutions et participer à leur implantation.'),
('420.BO', 'Techniques de l’informatique', 'Comme technicien ou technicienne en informatique de gestion, tu développeras des logiciels et des applications qui répondront efficacement aux besoins d’entreprises de toute nature. Tu proposeras également des améliorations fonctionnelles aux plateformes existantes en plus d’assurer la formation et le soutien technique aux utilisateurs.\r\n\r\nDans ton cheminement, tu auras des cours de programmation, de réseautique et de multimédia. Tu étudieras la structure de données et les systèmes d’exploitation. Tu verras aussi des notions de gestion qui te permettront de planifier le déroulement d’un projet en considérant les ressources humaines et financières disponibles. Au terme de ta formation, tu seras en mesure de concevoir et de développer des projets web qui répondront à différents besoins administratifs.'),
('570.E0', 'Techniques de design d\'intérieur', 'Comme designer d’intérieur, tu développeras des concepts d’aménagement esthétiques et fonctionnels pour des particuliers ou des entreprises. Tu analyseras les besoins d’un client et tu produiras les dessins et les plans techniques qui permettront la réalisation du projet. Tu coordonneras également l’avancement des travaux en prenant soin de t’assurer de la qualité du projet.\r\n\r\nDans ton cheminement, tu te familiariseras avec les principes de design et les notions de construction. Tu étudieras les matériaux, l’éclairage et les couleurs en plus d’avoir des cours de croquis et de dessin assisté par ordinateur. Au terme de ta formation, tu maitriseras l’ensemble des étapes d’un projet de design d’intérieur, de sa conception à son exécution, en passant par la présentation graphique.');

-- --------------------------------------------------------

--
-- Table structure for table `session_tutorat`
--

DROP TABLE IF EXISTS `session_tutorat`;
CREATE TABLE IF NOT EXISTS `session_tutorat` (
  `Session_tutorat` int NOT NULL AUTO_INCREMENT,
  `Matricule_Tuteur` varchar(7) NOT NULL,
  `Matricule_Tutoré` varchar(7) NOT NULL,
  `Date` varchar(200) NOT NULL,
  `Heure` varchar(200) NOT NULL,
  PRIMARY KEY (`Session_tutorat`),
  KEY `fk_session_tuteur` (`Matricule_Tuteur`),
  KEY `fk_session_tutorer` (`Matricule_Tutoré`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tuteur`
--

DROP TABLE IF EXISTS `tuteur`;
CREATE TABLE IF NOT EXISTS `tuteur` (
  `Matricule` varchar(7) NOT NULL,
  `Disponible` tinyint(1) NOT NULL,
  `Note` int NOT NULL,
  `Description` longtext NOT NULL,
  PRIMARY KEY (`Matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tuteur`
--

INSERT INTO `tuteur` (`Matricule`, `Disponible`, `Note`, `Description`) VALUES
('1734055', 1, 5, '');

-- --------------------------------------------------------

--
-- Table structure for table `tutorer`
--

DROP TABLE IF EXISTS `tutorer`;
CREATE TABLE IF NOT EXISTS `tutorer` (
  `Matricule` varchar(7) NOT NULL,
  `Nbr_commentaire` int NOT NULL,
  PRIMARY KEY (`Matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `commentaire_tuteur`
--
ALTER TABLE `commentaire_tuteur`
  ADD CONSTRAINT `fk_commentaireTuteur_MatriculeTuteur` FOREIGN KEY (`Matricule_tuteur`) REFERENCES `session_tutorat` (`Matricule_Tuteur`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_commentaireTuteur_MatriculeTutorer` FOREIGN KEY (`Matricule_Tutoré`) REFERENCES `session_tutorat` (`Matricule_Tutoré`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `commentaire_tutorer`
--
ALTER TABLE `commentaire_tutorer`
  ADD CONSTRAINT `fk_commentaireTutorer_MatriculeTuteur` FOREIGN KEY (`Matricule_Tuteur`) REFERENCES `session_tutorat` (`Matricule_Tuteur`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_commentaireTutorer_MatriculeTutorer` FOREIGN KEY (`Matricule_Tutoré`) REFERENCES `session_tutorat` (`Matricule_Tutoré`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `cours_enseigner`
--
ALTER TABLE `cours_enseigner`
  ADD CONSTRAINT `fk_cours_enseigner_cours` FOREIGN KEY (`Cours`) REFERENCES `cours` (`Code`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_cours_enseigner_tuteur` FOREIGN KEY (`Matricule`) REFERENCES `tuteur` (`Matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `dispo_tuteur`
--
ALTER TABLE `dispo_tuteur`
  ADD CONSTRAINT `fk_dispo_tuteur` FOREIGN KEY (`Code_Dispo`) REFERENCES `disponibiliter` (`Code`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_dispo_tuteur_matricule` FOREIGN KEY (`Matricule`) REFERENCES `tuteur` (`Matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `eleves`
--
ALTER TABLE `eleves`
  ADD CONSTRAINT `fk_enseignant_ressource` FOREIGN KEY (`Enseignant_ressource`) REFERENCES `enseignant` (`Matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_programme_eleve` FOREIGN KEY (`Programme`) REFERENCES `programme` (`Code`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `session_tutorat`
--
ALTER TABLE `session_tutorat`
  ADD CONSTRAINT `fk_session_tuteur` FOREIGN KEY (`Matricule_Tuteur`) REFERENCES `tuteur` (`Matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_session_tutorer` FOREIGN KEY (`Matricule_Tutoré`) REFERENCES `tutorer` (`Matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `tuteur`
--
ALTER TABLE `tuteur`
  ADD CONSTRAINT `fk_tuteur_matricule` FOREIGN KEY (`Matricule`) REFERENCES `eleves` (`Matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `tutorer`
--
ALTER TABLE `tutorer`
  ADD CONSTRAINT `fk_tutorer_matricule` FOREIGN KEY (`Matricule`) REFERENCES `eleves` (`Matricule`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
