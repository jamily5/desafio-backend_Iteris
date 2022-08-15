-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pokemon_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pokemon_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pokemon_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `pokemon_db` ;

-- -----------------------------------------------------
-- Table `pokemon_db`.`playerVSplayers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pokemon_db`.`playerVSplayers` ;

CREATE TABLE IF NOT EXISTS `pokemon_db`.`playerVSplayers` (
  `idDuelo` INT NOT NULL AUTO_INCREMENT,
  `winnerPlayer` VARCHAR(255) NULL DEFAULT NULL,
  `winner` INT NULL DEFAULT NULL,
  `loser` INT NULL DEFAULT NULL,
  `hp` INT NULL DEFAULT NULL,
  `attack` INT NULL DEFAULT NULL,
  `defense` INT NULL DEFAULT NULL,
  `special_attack` INT NULL DEFAULT NULL,
  `special_defense` INT NULL DEFAULT NULL,
  `speed` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`idDuelo`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pokemon_db`.`pokemons`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pokemon_db`.`pokemons` ;

CREATE TABLE IF NOT EXISTS `pokemon_db`.`pokemons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `hp` INT NOT NULL,
  `attack` INT NOT NULL,
  `defense` INT NOT NULL,
  `special_attack` INT NOT NULL,
  `special_defense` INT NOT NULL,
  `speed` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
