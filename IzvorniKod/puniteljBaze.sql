
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'težina ispod 55kg',1);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'temperatura iznad 37c',1);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Krvni tlak: sistolični ispod 100 ili iznad 180 mm Hg, dijastolični ispod 60 ili iznad 110 mm Hg',1);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Puls: ispod 50 ili iznad 100 otkucaja u minuti',1);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Hemoglobin: muškarci ispod 135 g/L, žene ispod 125 g/L',1);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osoba trenutno uzima antibiotike ili druge lijekove',1);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osoba je konzumirale alkoholna pića unutar 8 sati prije darivanja krvi',1);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osoba s lakšim akutnim bolesnim stanjima (prehlade, poremetnje probavnog sustava, smanjenog željeza u krvi i sl.)',1);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Žene za vrijeme menstruacije, trudnoće i dojenja',1);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osoba tog dana obavlja opasne poslove (rad na visini, dubini)',1);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osoba je bolovale ili sada boluju od teških kroničnih bolesti dišnog i probavnog sustava',0);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osoba boluje od bolesti srca i krvnih žila, zloćudnih bolesti, bolesti jetre, AIDS-a, šećerne bolesti (osobe liječene inzulinskom terapijom), živčanih i duševnih bolesti',0);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osoba je ovisnik o alkoholu ili drogama',0);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Muškarci koji su u životu imali spolne odnose s drugim muškarcima',0);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osobe koje često mijenjaju seksualne partnere (promiskuitetne osobe)',0);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Žene i muškarci koji su imali spolni odnos s prostitutkama',0);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osobe koje su uzimale drogu intravenskim putem',0);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osobe koje su liječene zbog spolno prenosivih bolesti (sifilis, gonoreja)',0);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Osobe koje su HIV-pozitivne',0);
INSERT INTO zdravstveni_podaci VALUES (DEFAULT,'Seksualni partneri gore navedenih osoba',0);

INSERT INTO uloge VALUES (1,'ADMIN');
INSERT INTO uloge VALUES (2,'DJELATNIK');
INSERT INTO uloge VALUES (3,'DONOR');

INSERT INTO krvna_vrsta VALUES (1,1,'A_PLUS',1,1);
INSERT INTO krvna_vrsta VALUES (2,1,'AB_PLUS',1,1);
INSERT INTO krvna_vrsta VALUES (3,1,'B_PLUS',1,1);
INSERT INTO krvna_vrsta VALUES (4,1,'ZERO_PLUS',1,1);
INSERT INTO krvna_vrsta VALUES (5,1,'A_MINUS',1,1);
INSERT INTO krvna_vrsta VALUES (6,1,'AB_MINUS',1,1);
INSERT INTO krvna_vrsta VALUES (7,1,'B_MINUS',1,1);
INSERT INTO krvna_vrsta VALUES (8,1,'ZERO_MINUS',1,1);
