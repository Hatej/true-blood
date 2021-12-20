package fer.progi.illidimusdigitus.trueblood.controllers;

import java.util.Map;

public class HealthAnswersDTO {

    private long br_doniranja;

    private Map<Long,Boolean> id_zdravstvenihOdgovor_donora;


    public long getBr_doniranja() {
        return br_doniranja;
    }

    public void setBr_doniranja(long br_doniranja) {
        this.br_doniranja = br_doniranja;
    }

    public Map<Long, Boolean> getId_zdravstvenihOdgovor_donora() {
        return id_zdravstvenihOdgovor_donora;
    }

    public void setId_zdravstvenihOdgovor_donora(Map<Long, Boolean> id_zdravstvenihOdgovor_donora) {
        this.id_zdravstvenihOdgovor_donora = id_zdravstvenihOdgovor_donora;
    }
}
