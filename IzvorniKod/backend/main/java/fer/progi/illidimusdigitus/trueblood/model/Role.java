package fer.progi.illidimusdigitus.trueblood.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * This class represents role in the system.
 * It has id, which is primary key.
 * It also has name.
 * @author david
 */
public class Role {
	/**
     * Role id
     */
    @Id
    @GeneratedValue
    @Column(name = "ulogaId")
    public Long id;
    
    /**
     * role name
     */
    @Column(name = "ulogaName", nullable = false)
    public String name;

	public Role(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}
	
    
}
