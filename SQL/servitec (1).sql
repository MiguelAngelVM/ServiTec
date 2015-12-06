-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-03-2015 a las 07:01:11
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `servitec`
--
CREATE DATABASE IF NOT EXISTS `servitec` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `servitec`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aparato`
--

DROP TABLE IF EXISTS `aparato`;
CREATE TABLE IF NOT EXISTS `aparato` (
  `idAparato` int(5) NOT NULL AUTO_INCREMENT,
  `folio` varchar(9) DEFAULT NULL,
  `marca` varchar(15) DEFAULT NULL,
  `modelo` varchar(20) DEFAULT NULL,
  `serie` varchar(30) DEFAULT NULL,
  `producto` varchar(15) DEFAULT NULL,
  `idusuario` int(5) DEFAULT NULL,
  PRIMARY KEY (`idAparato`),
  KEY `idusuario` (`idusuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Volcado de datos para la tabla `aparato`
--

INSERT INTO `aparato` (`idAparato`, `folio`, `marca`, `modelo`, `serie`, `producto`, `idusuario`) VALUES
(1, 'feb1501', 'sony', 'LCD32NN', '233wsss4', 'pantalla', 2),
(2, 'feb1502', 'acer', 'ASPIRE', '33eEEE', 'laptop', 2),
(3, 'feb1503', 'samsumg', 'LDD#4r', 'j888', 'tele', 4),
(4, 'feb1504', 'sony', 'ASDF22', 'ASasq2', 'estereo', 4),
(5, 'mar1501', 'acer', 'eer444', 'ferr333', 'laptop', NULL),
(6, 'mar1504', 'samsumg', 'tv32er45', 'ee3402er', 'pantalla', 2),
(7, 'mar1505', 'lenovo', 'computadora', 'asdfg', '12345', 2),
(8, 'mar1506', 'polari', 'qwerpoi', 'qwerummk', 'pantall', 2),
(9, 'mar1507', 'sony', 'asnmnn||', 'jjkll', 'estereo', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `idCom` int(5) NOT NULL AUTO_INCREMENT,
  `fechaCom` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comentario` text CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `estadoCom` varchar(4) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL DEFAULT 'SR',
  `publicado` varchar(10) NOT NULL,
  `idAparato` int(5) DEFAULT NULL,
  `idusuario` int(5) DEFAULT NULL,
  PRIMARY KEY (`idCom`),
  KEY `idusuario` (`idusuario`),
  KEY `idAparato` (`idAparato`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fechas`
--

DROP TABLE IF EXISTS `fechas`;
CREATE TABLE IF NOT EXISTS `fechas` (
  `idFecha` int(5) NOT NULL AUTO_INCREMENT,
  `FEntrada` datetime DEFAULT NULL,
  `FSalida` datetime DEFAULT NULL,
  `idAparato` int(5) DEFAULT NULL,
  PRIMARY KEY (`idFecha`),
  KEY `idAparato` (`idAparato`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `fechas`
--

INSERT INTO `fechas` (`idFecha`, `FEntrada`, `FSalida`, `idAparato`) VALUES
(1, '2015-03-02 00:00:00', '2015-03-02 00:00:00', 1),
(2, '2015-03-03 00:00:00', NULL, 2),
(3, '2015-03-15 00:00:00', NULL, 3),
(4, '2015-03-15 00:00:00', NULL, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noti`
--

DROP TABLE IF EXISTS `noti`;
CREATE TABLE IF NOT EXISTS `noti` (
  `idNoti` int(5) NOT NULL AUTO_INCREMENT,
  `idusuario` int(5) DEFAULT NULL,
  `idAparato` int(5) DEFAULT NULL,
  `accion` varchar(20) NOT NULL,
  PRIMARY KEY (`idNoti`),
  KEY `idusuario` (`idusuario`),
  KEY `idAparato` (`idAparato`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `noti`
--

INSERT INTO `noti` (`idNoti`, `idusuario`, `idAparato`, `accion`) VALUES
(1, 2, 2, 'reparar'),
(2, 4, 4, 'cotizar'),
(3, 2, 1, 'Acepto reparaci'),
(4, 2, 1, 'Acepto reparaci'),
(5, 2, 1, 'Cancelar reparaciÃ³n'),
(6, 2, 1, 'Cancelar reparaciÃ³n'),
(7, 2, 2, 'Su aparato ya esta r'),
(8, 2, 1, 'Cancelado'),
(9, 2, 6, 'Cancelar reparaciÃ³n'),
(10, 2, 6, 'Cancelar reparaciÃ³n'),
(11, 2, 6, 'Cancelar reparaciÃ³n'),
(12, 2, 6, 'Cancelar reparaciÃ³n'),
(13, 2, 6, 'Cancelar reparaciÃ³n'),
(14, 2, 6, 'Cancelar reparaciÃ³n'),
(15, 2, 6, 'Cancelar reparaciÃ³n'),
(16, 2, 6, 'Cancelar reparaciÃ³n'),
(17, 2, 6, 'Cancelar reparaciÃ³n'),
(18, 2, 1, 'Acepto reparaciÃ³n'),
(19, 2, 1, 'Acepto reparaciÃ³n'),
(20, 2, 1, 'Cancelar reparaciÃ³n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

DROP TABLE IF EXISTS `reporte`;
CREATE TABLE IF NOT EXISTS `reporte` (
  `idReporte` int(5) NOT NULL AUTO_INCREMENT,
  `costo` int(5) DEFAULT NULL,
  `estado` varchar(15) DEFAULT NULL,
  `reparo` varchar(10) DEFAULT NULL,
  `idAparato` int(5) DEFAULT NULL,
  `falla` varchar(25) NOT NULL,
  PRIMARY KEY (`idReporte`),
  KEY `idAparato` (`idAparato`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `reporte`
--

INSERT INTO `reporte` (`idReporte`, `costo`, `estado`, `reparo`, `idAparato`, `falla`) VALUES
(1, 3000, 'cotizando', 'miguel', 1, 'cotizando'),
(2, 499, 'cotizado', 'javier', 2, 'cotizado'),
(3, 3000, 'reparando', 'miguel', 3, 'reparado'),
(4, 999, 'reparando', 'javier', 4, 'reparando'),
(5, 400, 'entregado', 'cristian', 6, 'no prende'),
(6, 200, 'bodega', 'gerardo', 7, 'no prende'),
(7, 4090, 'cancelado', 'rubi', 8, 'no prende otra '),
(8, 300, 'bodega', 'miguel', 9, 'no prende');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `idusuario` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(15) DEFAULT NULL,
  `apellido` varchar(15) DEFAULT NULL,
  `domicilio` varchar(15) DEFAULT NULL,
  `correo` varchar(25) DEFAULT NULL,
  `colonia` varchar(15) DEFAULT NULL,
  `telefono` int(10) DEFAULT NULL,
  `imagen` mediumblob,
  `tipoImagen` varchar(15) DEFAULT NULL,
  `username` varchar(10) DEFAULT NULL,
  `passw` varchar(15) DEFAULT NULL,
  `tipoDeU` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`idusuario`, `nombre`, `apellido`, `domicilio`, `correo`, `colonia`, `telefono`, `imagen`, `tipoImagen`, `username`, `passw`, `tipoDeU`) VALUES
(1, 'miguel', 'ventura', 'secto1', 'mi@yo', 'centro', 233444, NULL, NULL, 'miguel', 'marin', 'admin'),
(2, 'rubi', 'rubio', 'por ahi', 'aa2', 'ss', NULL, NULL, NULL, 'rubi', 'rubio', 'user'),
(3, 'jordan', 'taquito', 'sector2', 'taquito_sexi@hotmail.loko', 'centro', NULL, NULL, NULL, 'jordan', 'ramirez', 'empleado'),
(4, 'cris', 'fello', 'por ahi', 'aa2', 'ss', NULL, NULL, NULL, 'cris', 'rosas', 'user'),
(5, 'a', 'a', 'a', 'a', '9', 6, NULL, NULL, 'a', 'u', 'user'),
(6, 'pedro', 'pedrin', 'www', 'ww', 'ww', 22, NULL, NULL, 'p2', 'p2', 'user');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `aparato`
--
ALTER TABLE `aparato`
  ADD CONSTRAINT `aparato_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `user` (`idusuario`);

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `user` (`idusuario`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idAparato`) REFERENCES `aparato` (`idAparato`);

--
-- Filtros para la tabla `fechas`
--
ALTER TABLE `fechas`
  ADD CONSTRAINT `fechas_ibfk_1` FOREIGN KEY (`idAparato`) REFERENCES `aparato` (`idAparato`);

--
-- Filtros para la tabla `noti`
--
ALTER TABLE `noti`
  ADD CONSTRAINT `noti_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `user` (`idusuario`),
  ADD CONSTRAINT `noti_ibfk_2` FOREIGN KEY (`idAparato`) REFERENCES `aparato` (`idAparato`);

--
-- Filtros para la tabla `reporte`
--
ALTER TABLE `reporte`
  ADD CONSTRAINT `reporte_ibfk_1` FOREIGN KEY (`idAparato`) REFERENCES `aparato` (`idAparato`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
