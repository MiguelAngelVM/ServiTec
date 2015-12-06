-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-04-2015 a las 23:02:50
-- Versión del servidor: 5.6.21
-- Versión de PHP: 5.6.3

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
`idAparato` int(5) NOT NULL,
  `folio` varchar(9) DEFAULT NULL,
  `marca` varchar(15) DEFAULT NULL,
  `modelo` varchar(20) DEFAULT NULL,
  `serie` varchar(30) DEFAULT NULL,
  `producto` varchar(15) DEFAULT NULL,
  `idusuario` int(5) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `aparato`
--

INSERT INTO `aparato` (`idAparato`, `folio`, `marca`, `modelo`, `serie`, `producto`, `idusuario`) VALUES
(1, 'ene1501', 'hp', 'jdisdi', 'dmsimdi', 'laptop', 2),
(2, 'ene1502', 'hp', 'jdisdi', 'dmsimdi', 'laptop', 2),
(3, 'ene1503', 'hp', 'jdisdi', 'dmsimdi', 'laptop', 2),
(4, 'ene1504', 'hp', 'jdisdi', 'dmsimdi', 'laptop', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
`idCom` int(5) NOT NULL,
  `fechaCom` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comentario` text CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `estadoCom` varchar(4) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL DEFAULT 'SR',
  `publicado` varchar(10) NOT NULL,
  `idAparato` int(5) DEFAULT NULL,
  `idusuario` int(5) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`idCom`, `fechaCom`, `comentario`, `estadoCom`, `publicado`, `idAparato`, `idusuario`) VALUES
(1, '2015-04-08 01:05:47', 'a', 'SR', 'Publicado', 1, 2),
(2, '2015-04-08 01:07:47', 'x', 'SR', 'Publicado', 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fechas`
--

DROP TABLE IF EXISTS `fechas`;
CREATE TABLE IF NOT EXISTS `fechas` (
`idFecha` int(5) NOT NULL,
  `FEntrada` datetime DEFAULT NULL,
  `FSalida` datetime DEFAULT NULL,
  `idReporte` int(5) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `fechas`
--

INSERT INTO `fechas` (`idFecha`, `FEntrada`, `FSalida`, `idReporte`) VALUES
(1, '2015-04-05 00:00:00', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

DROP TABLE IF EXISTS `notificaciones`;
CREATE TABLE IF NOT EXISTS `notificaciones` (
`idNotificaciones` int(5) NOT NULL,
  `idAparato` int(5) DEFAULT NULL,
  `accion` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `notificaciones`
--

INSERT INTO `notificaciones` (`idNotificaciones`, `idAparato`, `accion`) VALUES
(1, 1, 'acepto cotizacion'),
(2, 2, 'espera cotizacion'),
(3, 3, 'canselo reparacion'),
(4, 4, 'mensaje');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

DROP TABLE IF EXISTS `personal`;
CREATE TABLE IF NOT EXISTS `personal` (
`idPersonal` int(5) NOT NULL,
  `area` varchar(20) DEFAULT NULL,
  `idusuario` int(5) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`idPersonal`, `area`, `idusuario`) VALUES
(2, 'estereo', 7),
(3, 'horno', 99),
(4, 'television', 7),
(5, 'pantalla', 99),
(6, 'camara', 3),
(7, 'monitor', 7),
(8, 'impresora', 99),
(9, 'micro componente', 3),
(10, 'cpu', 3),
(11, 'teclado', 3),
(12, 'mouse', 3),
(13, 'dvd', 3),
(14, 'licuadora', 3),
(15, 'tablet', 99),
(16, 'all in one', 3),
(17, 'plancha', 3),
(18, 'otros', 3),
(19, 'laptop', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

DROP TABLE IF EXISTS `reporte`;
CREATE TABLE IF NOT EXISTS `reporte` (
`idReporte` int(5) NOT NULL,
  `costo` int(5) DEFAULT NULL,
  `estado` varchar(15) DEFAULT NULL,
  `reparo` varchar(20) DEFAULT NULL,
  `idAparato` int(5) DEFAULT NULL,
  `falla` varchar(25) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `reporte`
--

INSERT INTO `reporte` (`idReporte`, `costo`, `estado`, `reparo`, `idAparato`, `falla`) VALUES
(1, NULL, 'cotizando', 'jordan', 1, 'no prende'),
(2, NULL, 'cotizado', 'jordan', 2, 'no prende'),
(3, NULL, 'reparando', 'jordan', 3, 'no prende'),
(4, NULL, 'reparado', 'jordan', 4, 'no prende');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
`idusuario` int(5) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(15) DEFAULT NULL,
  `domicilio` varchar(15) DEFAULT NULL,
  `correo` varchar(25) DEFAULT NULL,
  `colonia` varchar(15) DEFAULT NULL,
  `telefono` int(10) DEFAULT NULL,
  `imagen` mediumblob,
  `tipoImagen` varchar(15) DEFAULT NULL,
  `username` varchar(10) DEFAULT NULL,
  `passw` varchar(15) DEFAULT NULL,
  `tipoDeU` varchar(8) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`idusuario`, `nombre`, `apellido`, `domicilio`, `correo`, `colonia`, `telefono`, `imagen`, `tipoImagen`, `username`, `passw`, `tipoDeU`) VALUES
(1, 'miguel', 'ventura', 'secto1', 'mi@yo', 'centro', 233444, NULL, NULL, 'miguel', 'marin', 'admin'),
(2, 'rubi', 'rubio', 'por ahi', 'aa2', 'ss', NULL, NULL, NULL, 'rubi', 'rubio', 'user'),
(3, 'jordan', 'taquito', 'sector2', 'taquito_sexi@hotmail.loko', 'centro', NULL, NULL, NULL, 'jordan', 'ramirez', 'empleado'),
(4, 'cristian', 'fello', 'por ahi', 'aa2', 'ss', NULL, NULL, NULL, 'cris', 'rosas', 'user'),
(5, 'a', 'a', 'a', 'a', '9', 6, NULL, NULL, 'a', 'u', 'user'),
(6, 'pro', 'pedrin', 'www', 'ww', 'ww', 22, NULL, NULL, 'p2', 'p2', 'user'),
(7, 'jose', 'asd', 'deas', 'a@uud.com', 'ds', 22, NULL, NULL, 'jose', 'jose', 'empleado'),
(99, 'no definido', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'empleado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aparato`
--
ALTER TABLE `aparato`
 ADD PRIMARY KEY (`idAparato`), ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
 ADD PRIMARY KEY (`idCom`), ADD KEY `idusuario` (`idusuario`), ADD KEY `idAparato` (`idAparato`);

--
-- Indices de la tabla `fechas`
--
ALTER TABLE `fechas`
 ADD PRIMARY KEY (`idFecha`), ADD KEY `idReporte` (`idReporte`);

--
-- Indices de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
 ADD PRIMARY KEY (`idNotificaciones`), ADD KEY `idAparato` (`idAparato`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
 ADD PRIMARY KEY (`idPersonal`), ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `reporte`
--
ALTER TABLE `reporte`
 ADD PRIMARY KEY (`idReporte`), ADD KEY `idAparato` (`idAparato`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aparato`
--
ALTER TABLE `aparato`
MODIFY `idAparato` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
MODIFY `idCom` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `fechas`
--
ALTER TABLE `fechas`
MODIFY `idFecha` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
MODIFY `idNotificaciones` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `personal`
--
ALTER TABLE `personal`
MODIFY `idPersonal` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT de la tabla `reporte`
--
ALTER TABLE `reporte`
MODIFY `idReporte` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
MODIFY `idusuario` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=100;
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
ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idAparato`) REFERENCES `aparato` (`idAparato`),
ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idusuario`) REFERENCES `user` (`idusuario`);

--
-- Filtros para la tabla `fechas`
--
ALTER TABLE `fechas`
ADD CONSTRAINT `fechas_ibfk_1` FOREIGN KEY (`idReporte`) REFERENCES `reporte` (`idReporte`);

--
-- Filtros para la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
ADD CONSTRAINT `notificaciones_ibfk_1` FOREIGN KEY (`idAparato`) REFERENCES `aparato` (`idAparato`);

--
-- Filtros para la tabla `personal`
--
ALTER TABLE `personal`
ADD CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `user` (`idusuario`);

--
-- Filtros para la tabla `reporte`
--
ALTER TABLE `reporte`
ADD CONSTRAINT `reporte_ibfk_1` FOREIGN KEY (`idAparato`) REFERENCES `aparato` (`idAparato`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
