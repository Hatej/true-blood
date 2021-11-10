CREATE TABLE uloge
(
  uloga_id INT NOT NULL,
  uloga_name VARCHAR NOT NULL,
  PRIMARY KEY (uloga_id)
);

CREATE TABLE krv
(
  ime_krvne_grupe VARCHAR NOT NULL,
  gornja_granica INT NOT NULL,
  donja_granica INT NOT NULL,
  trenutna_zaliga INT NOT NULL,
  PRIMARY KEY (ime_krvne_grupe)
);

CREATE TABLE uloge_korisnika
(
  Korisnicko_ime VARCHAR NOT NULL,
  lozinka VARCHAR,
  email VARCHAR NOT NULL,
  ime VARCHAR NOT NULL,
  prezime VARCHAR NOT NULL,
  oib INT(11) NOT NULL,
  broj_mobitela INT NOT NULL,
  godina_rodenja INT NOT NULL,
  mjesto_prebivanja VARCHAR NOT NULL,
  zdravstveni_podaci VARCHAR NOT NULL,
  uloga_id INT NOT NULL,
  PRIMARY KEY (Korisnicko_ime),
  FOREIGN KEY (uloga_id) REFERENCES uloge(uloga_id)
);

CREATE TABLE pokusaj_doniranja
(
  datum DATE NOT NULL,
  mjesto VARCHAR NOT NULL,
  uspjesnost INT NOT NULL,
  Korisnicko_ime_djelatnika VARCHAR NOT NULL,
  Korisnicko_ime VARCHAR NOT NULL,
  PRIMARY KEY (datum, Korisnicko_ime),
  FOREIGN KEY (Korisnicko_ime) REFERENCES uloge_korisnika(Korisnicko_ime),
  FOREIGN KEY (Korisnicko_ime_djelatnika) REFERENCES uloge_korisnika(Korisnicko_ime)
);

CREATE TABLE potrosnja_krvi
(
  timestamp DATE NOT NULL,
  kolicina_jedinica INT NOT NULL,
  ime_krvne_grupe VARCHAR NOT NULL,
  Korisnicko_ime_djelatnika VARCHAR NOT NULL,
  PRIMARY KEY (timestamp, ime_krvne_grupe),
  FOREIGN KEY (ime_krvne_grupe) REFERENCES krv(ime_krvne_grupe),
  FOREIGN KEY (Korisnicko_ime_djelatnika) REFERENCES uloge_korisnika(Korisnicko_ime)
);

CREATE TABLE aktivacijski_kodovi 
(
  Korisnicko_ime VARCHAR NOT NULL,
  aktivacijski_kljuc VARCHAR(10) UNIQUE,
  PRIMARY KEY (Korisnicko_ime , aktivacijski_kljuc),
  FOREIGN KEY(Korisnicko_ime) REFERENCES uloge_korisnika(Korisnicko_ime)
);
