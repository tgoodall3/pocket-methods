-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2024 at 06:07 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pocket_methods`
--
CREATE DATABASE IF NOT EXISTS `pocket_methods` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pocket_methods`;

-- --------------------------------------------------------

--
-- Table structure for table `difficulties`
--

CREATE TABLE `difficulties` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `difficulties`
--

INSERT INTO `difficulties` (`id`, `name`) VALUES
(1, 'Easy'),
(2, 'Medium'),
(3, 'Hard');

-- --------------------------------------------------------

--
-- Table structure for table `instruments`
--

CREATE TABLE `instruments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `instruments`
--

INSERT INTO `instruments` (`id`, `name`) VALUES
(1, 'Flute'),
(2, 'Oboe'),
(3, 'Clarinet'),
(4, 'Alto Sax'),
(5, 'Tenor Sax');

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `ID` int(11) NOT NULL,
  `InstrumentID` int(11) DEFAULT NULL,
  `ModeID` int(11) DEFAULT NULL,
  `DifficultyID` int(11) DEFAULT NULL,
  `LevelData` varchar(255) DEFAULT NULL,
  `SheetMusic` text DEFAULT NULL,
  `Audio` blob DEFAULT NULL,
  `LevelName` varchar(255) DEFAULT NULL,
  `skill_mode_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`ID`, `InstrumentID`, `ModeID`, `DifficultyID`, `LevelData`, `SheetMusic`, `Audio`, `LevelName`, `skill_mode_id`) VALUES
(0, 1, 1, 1, NULL, '1,1,1 Sheet music', NULL, NULL, NULL),
(1, 1, 1, 2, NULL, '1,1,2 Sheet music', NULL, NULL, NULL),
(2, 1, 1, 3, NULL, '1,1,3 Sheet music', NULL, NULL, NULL),
(3, 1, 2, 1, NULL, '1,2,1 Sheet music', NULL, NULL, NULL),
(4, 1, 2, 2, NULL, '1,2,2 Sheet music', NULL, NULL, NULL),
(5, 1, 2, 3, NULL, '1,2,3 Sheet music', NULL, NULL, NULL),
(6, 1, 1, 1, NULL, '1,1,1,1 Sheet music', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `modes`
--

CREATE TABLE `modes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `modes`
--

INSERT INTO `modes` (`id`, `name`, `image`) VALUES
(1, 'Skill', 'https://i.imgur.com/inUpnmQ.png'),
(2, 'Quest', 'https://i.imgur.com/1MTqXgO.png');

-- --------------------------------------------------------

--
-- Table structure for table `resources`
--

CREATE TABLE `resources` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `instrument_id` int(11) DEFAULT NULL,
  `mode_id` int(11) DEFAULT NULL,
  `difficulty_id` int(11) DEFAULT NULL,
  `sheet_music` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `skill_modes`
--

CREATE TABLE `skill_modes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skill_modes`
--

INSERT INTO `skill_modes` (`id`, `name`, `description`) VALUES
(1, 'quarters and rests', NULL),
(2, 'eighth notes', NULL),
(3, 'eighth rests', NULL),
(4, 'level 1 rhythms', NULL),
(5, 'syncopation', NULL),
(6, 'first 6 notes', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('Teacher','Student') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `difficulties`
--
ALTER TABLE `difficulties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `instruments`
--
ALTER TABLE `instruments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `InstrumentID` (`InstrumentID`),
  ADD KEY `ModeID` (`ModeID`),
  ADD KEY `DifficultyID` (`DifficultyID`),
  ADD KEY `skill_mode_id` (`skill_mode_id`);

--
-- Indexes for table `modes`
--
ALTER TABLE `modes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resources`
--
ALTER TABLE `resources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `instrument_id` (`instrument_id`),
  ADD KEY `mode_id` (`mode_id`),
  ADD KEY `difficulty_id` (`difficulty_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `skill_modes`
--
ALTER TABLE `skill_modes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `difficulties`
--
ALTER TABLE `difficulties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `instruments`
--
ALTER TABLE `instruments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `modes`
--
ALTER TABLE `modes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `resources`
--
ALTER TABLE `resources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `levels`
--
ALTER TABLE `levels`
  ADD CONSTRAINT `levels_ibfk_1` FOREIGN KEY (`InstrumentID`) REFERENCES `instruments` (`id`),
  ADD CONSTRAINT `levels_ibfk_2` FOREIGN KEY (`ModeID`) REFERENCES `modes` (`id`),
  ADD CONSTRAINT `levels_ibfk_3` FOREIGN KEY (`DifficultyID`) REFERENCES `difficulties` (`id`),
  ADD CONSTRAINT `levels_ibfk_4` FOREIGN KEY (`skill_mode_id`) REFERENCES `skill_modes` (`id`);

--
-- Constraints for table `resources`
--
ALTER TABLE `resources`
  ADD CONSTRAINT `resources_ibfk_1` FOREIGN KEY (`instrument_id`) REFERENCES `instruments` (`id`),
  ADD CONSTRAINT `resources_ibfk_2` FOREIGN KEY (`mode_id`) REFERENCES `modes` (`id`),
  ADD CONSTRAINT `resources_ibfk_3` FOREIGN KEY (`difficulty_id`) REFERENCES `difficulties` (`id`),
  ADD CONSTRAINT `resources_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
