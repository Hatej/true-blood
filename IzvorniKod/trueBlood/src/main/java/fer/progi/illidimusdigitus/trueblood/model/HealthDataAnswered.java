package fer.progi.illidimusdigitus.trueblood.model;

import javax.persistence.*;
import java.io.Serializable;
/**
 * This class represents answers for specific health data.
 * It has donation id and health data id, which are primary keys.
 * It also has an answer.
 * @author matija
 */

@Entity
@Table(name = "doniranjeZdravljeOdgovori")
public class HealthDataAnswered {


    /**
     * Donation id
     */
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "brDoniranja")
    @Id
    public Donation donation;


    /**
     * HealthData id
     */
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idZdravstvenih")
    @Id
    public healthData healthData;


    /**
     * HealthData answer
     */
    @Column(name = "odgovorDonora", nullable = false)
    public boolean donorAnswer;


    public Donation getDonation() {
        return donation;
    }

    public void setDonation(Donation donation) {
        this.donation = donation;
    }

    public healthData getHealthData() {
        return healthData;
    }

    public void setHealthData(healthData healthData) {
        this.healthData = healthData;
    }

    public boolean isDonorAnswer() {
        return donorAnswer;
    }

    public void setDonorAnswer(boolean donorAnswer) {
        this.donorAnswer = donorAnswer;
    }

    public HealthDataAnswered(Donation donation, healthData healthData, boolean donorAnswer) {
        this.donation = donation;
        this.healthData = healthData;
        this.donorAnswer = donorAnswer;
    }

    public HealthDataAnswered() {
    }
}
