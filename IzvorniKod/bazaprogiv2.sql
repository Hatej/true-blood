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
  "korisnikId" VARCHAR PRIMARY KEY,
  "lozinka" VARCHAR,
  "ime" VARCHAR NOT NULL,
  "prezime" VARCHAR NOT NULL,
  "mjestoRođenja" VARCHAR,
  "oib" numeric(11) NOT NULL,
  "adresaStanovanja" INT,
  "mjestoZaposlenja" VARCHAR,
  "email" VARCHAR,
  "brojMobitelaPrivatni" INT,
  "brojMobitelaPoslovni" INT,
  "datumRodenja" DATE,
  "trajnoOdbijenoDarivanje" boolean,
  "razlogOdbijanja" VARCHAR,
  "ulogaId" INT
);

CREATE TABLE "pokusajDoniranja" (
  "brDoniranja" SERIAL PRIMARY KEY,
  "datum" DATE NOT NULL,
  "mjestoDarivanja" VARCHAR NOT NULL,
  "korisnikIdDjelatnika" VARCHAR NOT NULL,
  "korisnikId" VARCHAR NOT NULL,
  "uspjeh" boolean NOT NULL,
  "razlogOdbijanja" VARCHAR
);

CREATE TABLE "adresa" (
  "idAdrese" SERIAL PRIMARY KEY,
  "postanskiBroj" INT NOT NULL,
  "mjesto" VARCHAR NOT NULL,
  "ulica" VARCHAR NOT NULL,
  "brojKuce" VARCHAR NOT NULL,
  "kat" INT
);

CREATE TABLE "potrosnjaKrvi" (
  "idPotrosnje" SERIAL PRIMARY KEY,
  "timestampPotrosnje" timestamp NOT NULL,
  "krvId" INT NOT NULL,
  "kolicinaJedinica" INT NOT NULL,
  "korisnikIdDjelatnika" VARCHAR NOT NULL,
  "lokacijaPotrosnje" VARCHAR NOT NULL
);

CREATE TABLE "aktivacijskiKodovi" (
  "korisnikId" VARCHAR PRIMARY KEY NOT NULL,
  "aktivacijskiKljuc" VARCHAR(10) UNIQUE
);

ALTER TABLE "potrosnjaKrvi" ADD FOREIGN KEY ("krvId") REFERENCES "krvnaVrsta" ("krvId");

ALTER TABLE "korisnikAplikacije" ADD FOREIGN KEY ("ulogaId") REFERENCES "uloge" ("ulogaId");

ALTER TABLE "pokusajDoniranja" ADD FOREIGN KEY ("korisnikIdDjelatnika") REFERENCES "korisnikAplikacije" ("korisnikId");

ALTER TABLE "pokusajDoniranja" ADD FOREIGN KEY ("korisnikId") REFERENCES "korisnikAplikacije" ("korisnikId");

ALTER TABLE "korisnikAplikacije" ADD FOREIGN KEY ("adresaStanovanja") REFERENCES "adresa" ("idAdrese");

ALTER TABLE "potrosnjaKrvi" ADD FOREIGN KEY ("korisnikIdDjelatnika") REFERENCES "korisnikAplikacije" ("korisnikId");

ALTER TABLE "aktivacijskiKodovi" ADD FOREIGN KEY ("korisnikId") REFERENCES "korisnikAplikacije" ("korisnikId");
