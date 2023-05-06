

CREATE TABLE `Surgery` (
  `Forename` text COLLATE utf8mb3_bin NOT NULL,
  `Surname` text COLLATE utf8mb3_bin NOT NULL,
  `Postcode` text COLLATE utf8mb3_bin NOT NULL,
  `Vaccine_Batch_Number` text COLLATE utf8mb3_bin NOT NULL,
  `VaccineManufacturer` text COLLATE utf8mb3_bin NOT NULL,
  `Surgery_Date` int NOT NULL,
  `Doctor_ID` int NOT NULL,
  `NHS_Number` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;


ALTER TABLE `Surgery`
  ADD PRIMARY KEY (`NHS_Number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
