package fer.progi.illidimusdigitus.trueblood.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * This class represents blood donation.
 * It has id, which is primary key.
 * It also has date of attempted donation,  donationPlace, 
 * success and reasonRefusal.
 * @author david
 */
public class Donation {
	/**
     * Donation id
     */
    @Id
    @GeneratedValue
    @Column(name = "brDoniranja")
    public Long id;
    
    /**
     * Donation date
     */
    @Column(name = "datum", nullable = false)
    public Date date;
    /**
     * Donation place
     */
    @Column(name = "mjestoDarivanja", nullable = false)
    public String donationPlace;
    /**
     * Donation success
     */
    @Column(name = "uspjeh", nullable = false)
    public boolean success;
    /**
     * Reason for donation refusal
     */
    @Column(name = "razlogOdbijanja")
    public String reasonRefusal;
    

    /**
     * User donor
     */
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "korisnikId")
    
    public User donor;
    

    /**
     * User employee
     */
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "korisnikId")
    
    public User employee;


	public Donation(Date date, String donationPlace, boolean success, String reasonRefusal, User donor, User employee) {
		super();
		this.date = date;
		this.donationPlace = donationPlace;
		this.success = success;
		this.reasonRefusal = reasonRefusal;
		this.donor = donor;
		this.employee = employee;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public String getDonationPlace() {
		return donationPlace;
	}


	public void setDonationPlace(String donationPlace) {
		this.donationPlace = donationPlace;
	}


	public boolean isSuccess() {
		return success;
	}


	public void setSuccess(boolean success) {
		this.success = success;
	}


	public String getReasonRefusal() {
		return reasonRefusal;
	}


	public void setReasonRefusal(String reasonRefusal) {
		this.reasonRefusal = reasonRefusal;
	}


	public Long getId() {
		return id;
	}


	public User getDonor() {
		return donor;
	}


	public User getEmployee() {
		return employee;
	}
    
    
}
