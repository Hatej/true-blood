package fer.progi.illidimusdigitus.trueblood.controllers;

import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.repository.BloodRepository;
import fer.progi.illidimusdigitus.trueblood.repository.RoleRepository;
import fer.progi.illidimusdigitus.trueblood.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
//import javax.ws.rs.Consumes;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private RoleRepository roleRepo;

    @Autowired
    private BloodRepository bloodRepo;

    @PostMapping("/signin")
    //@Consumes("application/json")
    public ResponseEntity<User> signIn(@RequestBody User user){
        if (user == null)
            return ResponseEntity.badRequest().build();

        User createdUser = new User(
                user.getName().charAt(0) + user.getSurname().charAt(0) + String.valueOf(user.getOib()).substring(6), //funkcija za generiranje usera
                user.getName(),
                user.getSurname(),
                user.getBirthplace(),
                user.getOib(),
                user.getAddress(),
                user.getWorkplace(),
                user.getEmail(),
                user.getMobilePrivate(),
                user.getMobileBusiness(),
                user.getBirthdate(),
                user.getRole(),
                user.getBloodType()
        );
        createdUser.setBloodType(user.getBloodType());
        userRepo.save(createdUser);
        return ResponseEntity.accepted().body(createdUser);
    }


    @RequestMapping(value = "/login",
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            produces = MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            method = {RequestMethod.POST})
    public ResponseEntity<User> login(@RequestBody User user) {
        if(user == null)
            return ResponseEntity.badRequest().build();

        Optional<User> foundUser = userRepo.getUsernamePassword(user.username,user.password);

        if(foundUser.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        else{
            User foundUserrtr = foundUser.get();
            return ResponseEntity.accepted().body(foundUserrtr);
        }

    }

}
