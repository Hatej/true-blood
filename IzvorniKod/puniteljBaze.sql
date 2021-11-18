INSERT INTO ULOGE VALUES (DEFAULT,'ADMIN');
INSERT INTO ULOGE VALUES (DEFAULT,'DJELATNIK');
INSERT INTO ULOGE VALUES (DEFAULT,'DONOR');

INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'težina ispod 55kg',1);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'temperatura iznad 37c',1);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Krvni tlak: sistolični ispod 100 ili iznad 180 mm Hg, dijastolični ispod 60 ili iznad 110 mm Hg',1);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Puls: ispod 50 ili iznad 100 otkucaja u minuti',1);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Hemoglobin: muškarci ispod 135 g/L, žene ispod 125 g/L',1);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osoba trenutno uzima antibiotike ili druge lijekove',1);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osoba je konzumirale alkoholna pića unutar 8 sati prije darivanja krvi',1);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osoba s lakšim akutnim bolesnim stanjima (prehlade, poremetnje probavnog sustava, smanjenog željeza u krvi i sl.)',1);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Žene za vrijeme menstruacije, trudnoće i dojenja',1);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osoba tog dana obavlja opasne poslove (rad na visini, dubini)',1);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osoba je bolovale ili sada boluju od teških kroničnih bolesti dišnog i probavnog sustava',0);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osoba boluje od bolesti srca i krvnih žila, zloćudnih bolesti, bolesti jetre, AIDS-a, šećerne bolesti (osobe liječene inzulinskom terapijom), živčanih i duševnih bolesti',0);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osoba je ovisnik o alkoholu ili drogama',0);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Muškarci koji su u životu imali spolne odnose s drugim muškarcima',0);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osobe koje često mijenjaju seksualne partnere (promiskuitetne osobe)',0);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Žene i muškarci koji su imali spolni odnos s prostitutkama',0);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osobe koje su uzimale drogu intravenskim putem',0);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osobe koje su liječene zbog spolno prenosivih bolesti (sifilis, gonoreja)',0);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Osobe koje su HIV-pozitivne',0);
INSERT INTO "zdravstveniPodaci" VALUES (DEFAULT,'Seksualni partneri gore navedenih osoba',0);

INSERT INTO "krvnaVrsta" VALUES (DEFAULT,'A+',1,1,1);
INSERT INTO "krvnaVrsta" VALUES (DEFAULT,'AB+',1,1,1);
INSERT INTO "krvnaVrsta" VALUES (DEFAULT,'B+',1,1,1);
INSERT INTO "krvnaVrsta" VALUES (DEFAULT,'O+',1,1,1);
INSERT INTO "krvnaVrsta" VALUES (DEFAULT,'A-',1,1,1);
INSERT INTO "krvnaVrsta" VALUES (DEFAULT,'AB-',1,1,1);
INSERT INTO "krvnaVrsta" VALUES (DEFAULT,'B-',1,1,1);
INSERT INTO "krvnaVrsta" VALUES (DEFAULT,'O-',1,1,1);

INSERT INTO "korisnikAplikacije" VALUES ('admin','admin','admin','adminkovic',NULL,'00365123411',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,19,NULL);


INSERT INTO ULOGE VALUES (1,'ADMIN');
INSERT INTO ULOGE VALUES (2,'DJELATNIK');
INSERT INTO ULOGE VALUES (3,'DONOR');

INSERT INTO "krvna_vrsta" VALUES (1,1,'A+',1,1);
INSERT INTO "krvna_vrsta" VALUES (2,1,'AB+',1,1);
INSERT INTO "krvna_vrsta" VALUES (3,1,'B+',1,1);
INSERT INTO "krvna_vrsta" VALUES (4,1,'O+',1,1);
INSERT INTO "krvna_vrsta" VALUES (5,1,'A-',1,1);
INSERT INTO "krvna_vrsta" VALUES (6,1,'AB-',1,1);
INSERT INTO "krvna_vrsta" VALUES (7,1,'B-',1,1);
INSERT INTO "krvna_vrsta" VALUES (8,1,'O-',1,1);