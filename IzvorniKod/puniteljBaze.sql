INSERT INTO "zdravstveni_podaci" VALUES (1,TRUE,'težina ispod 55kg');
INSERT INTO "zdravstveni_podaci" VALUES (2,TRUE,'temperatura iznad 37c');
INSERT INTO "zdravstveni_podaci" VALUES (3,TRUE,'Krvni tlak: sistolični ispod 100 ili iznad 180 mm Hg, dijastolični ispod 60 ili iznad 110 mm Hg');
INSERT INTO "zdravstveni_podaci" VALUES (4,TRUE,'Puls: ispod 50 ili iznad 100 otkucaja u minuti');
INSERT INTO "zdravstveni_podaci" VALUES (5,TRUE,'Hemoglobin: muškarci ispod 135 g/L, žene ispod 125 g/L');
INSERT INTO "zdravstveni_podaci" VALUES (6,TRUE,'Osoba trenutno uzima antibiotike ili druge lijekove');
INSERT INTO "zdravstveni_podaci" VALUES (7,TRUE,'Osoba je konzumirale alkoholna pića unutar 8 sati prije darivanja krvi');
INSERT INTO "zdravstveni_podaci" VALUES (8,TRUE,'Osoba s lakšim akutnim bolesnim stanjima (prehlade, poremetnje probavnog sustava, smanjenog željeza u krvi i sl.)');
INSERT INTO "zdravstveni_podaci" VALUES (9,TRUE,'Žene za vrijeme menstruacije, trudnoće i dojenja');
INSERT INTO "zdravstveni_podaci" VALUES (10,TRUE,'Osoba tog dana obavlja opasne poslove (rad na visini, dubini)');
INSERT INTO "zdravstveni_podaci" VALUES (11,FALSE,'Osoba je bolovale ili sada boluju od teških kroničnih bolesti dišnog i probavnog sustava');
INSERT INTO "zdravstveni_podaci" VALUES (12,FALSE,'Osoba boluje od bolesti srca i krvnih žila, zloćudnih bolesti, bolesti jetre, AIDS-a, šećerne bolesti (osobe liječene inzulinskom terapijom), živčanih i duševnih bolesti');
INSERT INTO "zdravstveni_podaci" VALUES (13,FALSE,'Osoba je ovisnik o alkoholu ili drogama');
INSERT INTO "zdravstveni_podaci" VALUES (14,FALSE,'Muškarci koji su u životu imali spolne odnose s drugim muškarcima');
INSERT INTO "zdravstveni_podaci" VALUES (15,FALSE,'Osobe koje često mijenjaju seksualne partnere (promiskuitetne osobe)');
INSERT INTO "zdravstveni_podaci" VALUES (16,FALSE,'Žene i muškarci koji su imali spolni odnos s prostitutkama');
INSERT INTO "zdravstveni_podaci" VALUES (17,FALSE,'Osobe koje su uzimale drogu intravenskim putem');
INSERT INTO "zdravstveni_podaci" VALUES (18,FALSE,'Osobe koje su liječene zbog spolno prenosivih bolesti (sifilis, gonoreja)');
INSERT INTO "zdravstveni_podaci" VALUES (19,FALSE,'Osobe koje su HIV-pozitivne');
INSERT INTO "zdravstveni_podaci" VALUES (20,FALSE,'Seksualni partneri gore navedenih osoba');


INSERT INTO ULOGE VALUES (1,'ADMIN');
INSERT INTO ULOGE VALUES (2,'DJELATNIK');
INSERT INTO ULOGE VALUES (3,'DONOR');

INSERT INTO "krvna_vrsta" VALUES (1,1,'A_PLUS',1,1);
INSERT INTO "krvna_vrsta" VALUES (2,1,'AB_PLUS',1,1);
INSERT INTO "krvna_vrsta" VALUES (3,1,'B_PLUS',1,1);
INSERT INTO "krvna_vrsta" VALUES (4,1,'ZERO_PLUS',1,1);
INSERT INTO "krvna_vrsta" VALUES (5,1,'A_MINUS',1,1);
INSERT INTO "krvna_vrsta" VALUES (6,1,'AB_MINUS',1,1);
INSERT INTO "krvna_vrsta" VALUES (7,1,'B_MINUS',1,1);
INSERT INTO "krvna_vrsta" VALUES (8,1,'ZERO_MINUS',1,1);

INSERT INTO "korisnik_aplikacije" VALUES ('admin',NULL,'Adresa stanovanja','2021-12-23','mjesto rodjenja','adminmail@gmail.com',TRUE,'','0994206969','admin','74114785258','$2a$12$S5AvMwo32Glo/cwDdVZdGuQBYp8YrsUR7BWijVURzHts6mJAAJQTC','false','adminkovic','mjesto zaposlenja',1,1);

INSERT INTO "korisnik_aplikacije" VALUES ('djelatnik',NULL,'Adresa stanovanja','2021-12-23','mjesto rodjenja','djelatnikmail@gmail.com',TRUE,'','0986942069','djelatnik','96524763127','$2a$12$82W7cA5Pvt/9kZxxvjEBE.hYSmvxjB88L0Rf3t24WBcS7CYcX7dZa','false','djelatnicic','mjesto zaposlenja',1,2);

INSERT INTO "korisnik_aplikacije" VALUES ('donor',NULL,'Adresa stanovanja','2021-12-23','mjesto rodjenja','donormail@gmail.com',TRUE,'','0956942069','donor','32567415984','$2a$12$WWtHST9AYSwblmoGDWCxs.ct3tlqt.7Hejg7jOiefB9lAnNsQV1nm','false','donorcic','mjesto zaposlenja',1,3);

UPDATE krvna_vrsta
SET donja_granica = 275, gornja_granica = 1150, trenutna_zaliha = 470
WHERE ime_krvne_grupe = 'A_PLUS';

UPDATE krvna_vrsta
SET donja_granica = 320, gornja_granica = 1040, trenutna_zaliha = 720
WHERE ime_krvne_grupe = 'AB_PLUS';

UPDATE krvna_vrsta
SET donja_granica = 150, gornja_granica = 890, trenutna_zaliha = 320
WHERE ime_krvne_grupe = 'B_PLUS';

UPDATE krvna_vrsta
SET donja_granica = 175, gornja_granica = 960, trenutna_zaliha = 360
WHERE ime_krvne_grupe = 'ZERO_PLUS';

UPDATE krvna_vrsta
SET donja_granica = 190, gornja_granica = 1230, trenutna_zaliha = 530
WHERE ime_krvne_grupe = 'A_MINUS';

UPDATE krvna_vrsta
SET donja_granica = 220, gornja_granica = 1110, trenutna_zaliha = 290
WHERE ime_krvne_grupe = 'AB_MINUS';
UPDATE krvna_vrsta
SET donja_granica = 185, gornja_granica = 830, trenutna_zaliha = 380
WHERE ime_krvne_grupe = 'B_MINUS';

UPDATE krvna_vrsta
SET donja_granica = 250, gornja_granica = 970, trenutna_zaliha = 430
WHERE ime_krvne_grupe = 'ZERO_MINUS';
