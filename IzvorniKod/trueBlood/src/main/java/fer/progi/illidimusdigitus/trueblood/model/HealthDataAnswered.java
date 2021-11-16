package fer.progi.illidimusdigitus.trueblood.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "doniranjeZdravljeOdgovori")
public class HealthDataAnswered {


        /**
         * donation id
         */
        @ManyToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "brDoniranja")
        @Id
        public Donation donation;


        /**
         * healthData id
         */
        @ManyToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "idZdravstvenih")
        @Id
        public healthData healthData;




    /**
     * healthData answer
     */
    @Column(name = "odgovorDonora", nullable = false)
    public boolean donorAnswer;


    public Donation getDonation() {
        return donation;
    }

    public void setDonation(Donation donation) {
        this.donation = donation;
    }

    public fer.progi.illidimusdigitus.trueblood.model.healthData getHealthData() {
        return healthData;
    }

    public void setHealthData(fer.progi.illidimusdigitus.trueblood.model.healthData healthData) {
        this.healthData = healthData;
    }

    public boolean isDonorAnswer() {
        return donorAnswer;
    }

    public void setDonorAnswer(boolean donorAnswer) {
        this.donorAnswer = donorAnswer;
    }

    public HealthDataAnswered(Donation donation, fer.progi.illidimusdigitus.trueblood.model.healthData healthData, boolean donorAnswer) {
        this.donation = donation;
        this.healthData = healthData;
        this.donorAnswer = donorAnswer;
    }

    public HealthDataAnswered() {
    }
}
