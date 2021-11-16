package fer.progi.illidimusdigitus.trueblood.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * This class represents a Blood type. 
 * It has id, which is primary key.
 * It also has blood type name, lowerbound, 
 * upperbound and current blood supply.
 * @author david
 */

@Entity
@Table(name = "krvnaVrsta")
public class Blood {
	/**
     * Blood id
     */
    @Id
    @GeneratedValue
    @Column(name = "krvId")
    public Long id;
    
    /**
     * Blood name
     */
    @Column(name = "imeKrvneGrupe", nullable = false)
    public String name;

	/**
	 * Blood upperbound
	 */
	@Column(name = "gornjaGranica", nullable = false)
	public int upperbound;

    /**
     * Blood lowerbound
     */
    @Column(name = "donjaGranica", nullable = false)
    public int lowerbound;


    /**
     * Current blood supply
     */
    @Column(name = "trenutnaZaliha", nullable = false)
    public int supply;

	@OneToMany(mappedBy = "bloodType")
	private Set<User> users = new HashSet<>();

    public Blood() {
    	
    }

	public Blood(Long id, String name, int lowerbound, int upperbound, int supply) {
		this.id = id;
		this.name = name;
		this.lowerbound = lowerbound;
		this.upperbound = upperbound;
		this.supply = supply;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getLowerbound() {
		return lowerbound;
	}
	public void setLowerbound(int lowerbound) {
		this.lowerbound = lowerbound;
	}
	public int getUpperbound() {
		return upperbound;
	}
	public void setUpperbound(int upperbound) {
		this.upperbound = upperbound;
	}
	public int getSupply() {
		return supply;
	}
	public void setSupply(int supply) {
		this.supply = supply;
	}
	public Long getId() {
		return id;
	}
	
	
	
    
    
    
    
}
