-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS web_movil;

-- Usar la base de datos
USE web_movil;

-- Crear la tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT NOT NULL
);
