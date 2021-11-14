package fer.progi.illidimusdigitus.trueblood.model;


import javax.persistence.*;
import java.util.Date;

/**
 * This class represents User.
 * User has Id and username which are primary keys.
 * user also has name, surname, birthplace, birthdate
 * address, workplace, email, mobilePrivate, 
 * mobileBusiness, bloodId which represents blood type and roleId 
 * which is his role in the system.
 * @author david
 */

@Entity
@Table(name = "korisnikAplikacije")
public class User {
	
	/**
     * User id
     */
    @Id
    @GeneratedValue
    @Column(name = "korisnikId")
    public Long id;
    
    /**
     * User username
     */
    @Column(name = "korIme", unique = true, nullable = false)
    public String username;
    
    /**
     * User password
     */
    @Column(name = "lozinka", nullable = false)
    public String password;

    /**
     * User name
     */
    @Column(name = "ime", nullable = false)
    public String name;

    /**
     * User surname
     */
    @Column(name = "prezime", nullable = false)
    public String surname;
    
    /**
     * User birthplace
     */
    @Column(name = "mjestoRodenja")
    public String birthplace;
    
    /**
     * User oib
     */
    @Column(name = "oib", nullable = false)
    public int oib;
    
    /**
     * User address
     */
    @Column(name = "adresaStanovanja")
    public String address;
    
    /**
     * User workplace
     */
    @Column(name = "mjestoZaposlenja")
    public String workplace ;
    
    /**
     * User email
     */
    @Column(name = "email")
    public String email;

    /**
     * User mobilePrivate
     */
    @Column(name = "brojMobitelaPrivatni")
    public int mobilePrivate;
    
    /**
     * User mobileBusiness
     */
    @Column(name = "brojMobitelaPoslovni")
    public int mobileBusiness;
    
    /**
     * User birthdate
     */
    @Column(name = "datumRodenja")
    public Date birthdate;
    
    /**
     * User rejected
     */
    @Column(name = "trajnoOdbijenoDarivanje")
    public boolean rejected = false;
    
    /**
     * User rejection
     */
    @Column(name = "razlogOdbijanja")
    public String rejection;
    
    /**
     * User activation
     */
    @Column(name = "aktivacijskiKljuc", unique = true, nullable = false)
    public String activation;

    /**
     * Blood Type
     */
    @ManyToOne(optional = true, cascade = CascadeType.ALL)
    @JoinColumn(name = "krvId")
    public Blood bloodType;
    

    /**
     * Role 
     */
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ulogaId")
    public Role role;
    
    public User() {
    }
    
    
    public User(String username, String name, String surname,
                    String birthplace, int oib, String address, String workplace,
                    String email, int mobilePrivate, int mobileBusiness, Date birthdate,
                    Role role, Blood bloodType) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.birthplace = birthplace;
        this.email = email;
        this.oib = oib;
        this.address = address;
		this.workplace = workplace;
        this.mobilePrivate = mobilePrivate;
        this.mobileBusiness = mobileBusiness;
        this.birthdate = birthdate;
        this.role = role;
		this.bloodType = bloodType;
    }
    
    public User(String username, String name, String surname,
            String birthplace, int oib, String address, String workplace,
            String email, int mobilePrivate, int mobileBusiness, Date birthdate,
            boolean rejected, String rejection, Role role, Blood bloodType) {
		this.username = username;
		this.name = name;
		this.surname = surname;
		this.birthplace = birthplace;
		this.email = email;
		this.oib = oib;
		this.address = address;
		this.mobilePrivate = mobilePrivate;
		this.mobileBusiness = mobileBusiness;
		this.birthdate = birthdate;
		this.rejected = rejected;
		this.rejection = rejection;
		this.role = role;
		this.bloodType = bloodType;
    }

	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getSurname() {
		return surname;
	}


	public void setSurname(String surname) {
		this.surname = surname;
	}


	public String getBirthplace() {
		return birthplace;
	}


	public void setBirthplace(String birthplace) {
		this.birthplace = birthplace;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getWorkplace() {
		return workplace;
	}


	public void setWorkplace(String workplace) {
		this.workplace = workplace;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public int getMobilePrivate() {
		return mobilePrivate;
	}


	public void setMobilePrivate(int mobilePrivate) {
		this.mobilePrivate = mobilePrivate;
	}


	public int getMobileBusiness() {
		return mobileBusiness;
	}


	public void setMobileBusiness(int mobileBusiness) {
		this.mobileBusiness = mobileBusiness;
	}


	public Date getBirthdate() {
		return birthdate;
	}


	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}


	public boolean isRejected() {
		return rejected;
	}


	public void setRejected(boolean rejected) {
		this.rejected = rejected;
	}


	public String getRejection() {
		return rejection;
	}


	public void setRejection(String rejection) {
		this.rejection = rejection;
	}


	public String getActivation() {
		return activation;
	}


	public void setActivation(String activation) {
		this.activation = activation;
	}


	public Blood getBloodType() {
		return bloodType;
	}


	public void setBloodType(Blood bloodType) {
		this.bloodType = bloodType;
	}


	public Role getRole() {
		return role;
	}


	public void setRole(Role role) {
		this.role = role;
	}


	public Long getId() {
		return id;
	}


	public int getOib() {
		return oib;
	}



}