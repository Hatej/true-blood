package fer.progi.illidimusdigitus.trueblood.model;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * This class represents blood consumption.
 * It has id, which is primary key.
 * It also has timestamp of blood consumption , quantity and hospital location.
 * @author david
 */
public class Consumption {
	
	/**
     * Consumption id
     */
    @Id
    @GeneratedValue
    @Column(name = "idPotrosnje")
    public Long id;
    /**
     * Consumption timestamp
     */
    @Column(name = "timestampPotrosnje", nullable = false)
    public Timestamp timestamp;
    /**
     * Consumption quantity
     */
    @Column(name = "kolicinaJedinica", nullable = false)
    public int quantity;
    /**
     * Consumption hospital location
     */
    @Column(name = "lokacijaPotrosnje", nullable = false)
    public String location;
	/**
     * Blood Type
     */
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "krvId")
    
    public Blood bloodType;
	
	/**
     * User employee
     */
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "korisnikId")
    
    public User employee;

	public Consumption() {

	}

    public Consumption(Timestamp timestamp, int quantity, String location, Blood bloodType, User employee) {
		super();
		this.timestamp = timestamp;
		this.quantity = quantity;
		this.location = location;
		this.bloodType = bloodType;
		this.employee = employee;
	}

	public Timestamp getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Blood getBloodType() {
		return bloodType;
	}

	public void setBloodType(Blood bloodType) {
		this.bloodType = bloodType;
	}

	public User getEmployee() {
		return employee;
	}

	public void setEmployee(User employee) {
		this.employee = employee;
	}

	public Long getId() {
		return id;
	}

	public int getQuantity() {
		return quantity;
	}
    
    
}
