package fer.progi.illidimusdigitus.trueblood.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * This class represents role in the system.
 * It has id, which is primary key.
 * It also has name.
 * @author david
 */

@Entity
@Table(name = "uloge")
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
    
    //ne znam dal je ovo potrebno
	@OneToMany(mappedBy = "role")
	private Set<User> users = new HashSet<>();

	public Role() {

	}

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
