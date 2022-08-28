CREATE TABLE IF NOT EXISTS `parasitologia_db` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phylum` varchar(50) NOT NULL,
  `clase` varchar(50) NOT NULL,
  `subclase` varchar(50) NOT NULL,
  `orden` varchar(50) NOT NULL,
  `superfamilia` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
