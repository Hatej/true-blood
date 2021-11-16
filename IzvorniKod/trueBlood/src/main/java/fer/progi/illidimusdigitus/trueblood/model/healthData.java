package fer.progi.illidimusdigitus.trueblood.model;


import javax.persistence.*;

@Entity
@Table(name = "zdravsteniPodaci")
public class healthData {

    /**
     * healthData id
     */
    @Id
    @GeneratedValue
    @Column(name = "idZdravstevnih")
    public Long idHealth;

    /**
     * healthData name
     */
    @Column(name = "zdravstevniPodatak", nullable = false)
    public String healthData;

    /**
     * healthData weight
     */
    @Column(name = "tezinaKriterija", nullable = false)
    public String healthDataWeight;

    public String getHealthData() {
        return healthData;
    }

    public void setHealthData(String healthData) {
        this.healthData = healthData;
    }

    public String getHealthDataWeight() {
        return healthDataWeight;
    }

    public void setHealthDataWeight(String healthDataWeight) {
        this.healthDataWeight = healthDataWeight;
    }

    public Long getIdHealth() {
        return idHealth;
    }

    public void setIdHealth(Long idHealth) {
        this.idHealth = idHealth;
    }

    public healthData(String healthData,Long idHealth,String healthDataWeight) {
        this.healthData = healthData;
        this.healthDataWeight = healthDataWeight;
        this.idHealth = idHealth;
    }

    public healthData() {
    }
}
