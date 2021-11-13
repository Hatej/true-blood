CREATE TABLE "uloge" (
  "ulogaId" SERIAL PRIMARY KEY,
  "ulogaName" VARCHAR NOT NULL
);

CREATE TABLE "krvnaVrsta" (
  "krvId" SERIAL PRIMARY KEY,
  "imeKrvneGrupe" VARCHAR NOT NULL,
  "gornjaGranica" INT NOT NULL,
  "donjaGranica" INT NOT NULL,
  "trenutnaZaliha" INT NOT NULL
);

CREATE TABLE "korisnikAplikacije" (
  "korisnikId" SERIAL PRIMARY KEY,
  "korIme" VARCHAR PRIMARY KEY,
  "lozinka" VARCHAR,
  "ime" VARCHAR NOT NULL,
  "prezime" VARCHAR NOT NULL,
  "mjestoRođenja" VARCHAR,
  "oib" numeric(11) NOT NULL,
  "adresaStanovanja" VARCHAR,
  "mjestoZaposlenja" VARCHAR,
  "email" VARCHAR,
  "brojMobitelaPrivatni" INT,
  "brojMobitelaPoslovni" INT,
  "datumRodenja" DATE,
  "krvId" INT,
  "trajnoOdbijenoDarivanje" boolean,
  "razlogOdbijanja" VARCHAR,
  "ulogaId" INT,
  "aktivacijskiKljuc" VARCHAR(10) UNIQUE
);

CREATE TABLE "pokusajDoniranja" (
  "brDoniranja" SERIAL PRIMARY KEY,
  "datum" DATE NOT NULL,
  "mjestoDarivanja" VARCHAR NOT NULL,
  "korisnikIdDjelatnika" INT NOT NULL,
  "korisnikId" INT NOT NULL,
  "uspjeh" boolean NOT NULL,
  "razlogOdbijanja" VARCHAR
);

CREATE TABLE "potrosnjaKrvi" (
  "idPotrosnje" SERIAL PRIMARY KEY,
  "timestampPotrosnje" timestamp NOT NULL,
  "krvId" INT NOT NULL,
  "kolicinaJedinica" INT NOT NULL,
  "korisnikIdDjelatnika" INT NOT NULL,
  "lokacijaPotrosnje" VARCHAR NOT NULL
);

ALTER TABLE "potrosnjaKrvi" ADD FOREIGN KEY ("krvId") REFERENCES "krvnaVrsta" ("krvId");

ALTER TABLE "korisnikAplikacije" ADD FOREIGN KEY ("ulogaId") REFERENCES "uloge" ("ulogaId");

ALTER TABLE "pokusajDoniranja" ADD FOREIGN KEY ("korisnikIdDjelatnika") REFERENCES "korisnikAplikacije" ("korisnikId");

ALTER TABLE "pokusajDoniranja" ADD FOREIGN KEY ("korisnikId") REFERENCES "korisnikAplikacije" ("korisnikId");

ALTER TABLE "potrosnjaKrvi" ADD FOREIGN KEY ("korisnikIdDjelatnika") REFERENCES "korisnikAplikacije" ("korisnikId");

ALTER TABLE "korisnikAplikacije" ADD FOREIGN KEY ("krvId") REFERENCES "krvnaVrsta" ("krvId");
