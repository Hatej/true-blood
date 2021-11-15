CREATE TABLE "uloge" (
  "ulogaId" SERIAL PRIMARY KEY,
  "ulogaName" VARCHAR UNIQUE NOT NULL
);

CREATE TABLE "krvnaVrsta" (
  "krvId" SERIAL PRIMARY KEY,
  "imeKrvneGrupe" VARCHAR UNIQUE NOT NULL,
  "gornjaGranica" INT NOT NULL,
  "donjaGranica" INT NOT NULL,
  "trenutnaZaliha" INT NOT NULL
);

CREATE TABLE "korisnikAplikacije" (
  "brKor" SERIAL PRIMARY KEY,
  "korisnikId" VARCHAR UNIQUE,
  "lozinka" VARCHAR,
  "ime" VARCHAR NOT NULL,
  "prezime" VARCHAR NOT NULL,
  "mjestoRodenja" VARCHAR,
  "oib" numeric(11) UNIQUE NOT NULL,
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
  "korisnikIdDjelatnika" VARCHAR NOT NULL,
  "korisnikId" VARCHAR NOT NULL,
  "uspjeh" boolean NOT NULL,
  "razlogOdbijanja" VARCHAR
);

CREATE TABLE "potrosnjaKrvi" (
  "idPotrosnje" SERIAL PRIMARY KEY,
  "timestampPotrosnje" timestamp NOT NULL,
  "krvId" INT NOT NULL,
  "kolicinaJedinica" INT NOT NULL,
  "korisnikIdDjelatnika" VARCHAR NOT NULL,
  "lokacijaPotrosnje" VARCHAR NOT NULL
);

ALTER TABLE "potrosnjaKrvi" ADD FOREIGN KEY ("krvId") REFERENCES "krvnaVrsta" ("krvId");

ALTER TABLE "korisnikAplikacije" ADD FOREIGN KEY ("ulogaId") REFERENCES "uloge" ("ulogaId");

ALTER TABLE "pokusajDoniranja" ADD FOREIGN KEY ("korisnikIdDjelatnika") REFERENCES "korisnikAplikacije" ("korisnikId");

ALTER TABLE "pokusajDoniranja" ADD FOREIGN KEY ("korisnikId") REFERENCES "korisnikAplikacije" ("korisnikId");

ALTER TABLE "potrosnjaKrvi" ADD FOREIGN KEY ("korisnikIdDjelatnika") REFERENCES "korisnikAplikacije" ("korisnikId");

ALTER TABLE "korisnikAplikacije" ADD FOREIGN KEY ("krvId") REFERENCES "krvnaVrsta" ("krvId");
