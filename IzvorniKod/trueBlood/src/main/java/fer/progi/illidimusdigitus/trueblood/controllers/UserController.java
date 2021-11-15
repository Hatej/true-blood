package fer.progi.illidimusdigitus.trueblood.controllers;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.Role;
import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.service.BloodService;
import fer.progi.illidimusdigitus.trueblood.service.RoleService;
import fer.progi.illidimusdigitus.trueblood.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
//import javax.ws.rs.Consumes;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BloodService bloodService;

    @Autowired
    private RoleService roleService;

    @GetMapping("")
    public List<User> listUsers() {
        return userService.listAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public ResponseEntity<User> createUser(@RequestBody CreateUserDTO dto) {

        if (roleService.findByName(dto.getRoleName()).isEmpty()
            || bloodService.findByName(dto.getBloodTypeName()).isEmpty()) {

        }

        Role userRole = roleService.findByName(dto.getRoleName()).get();
        Blood userBloodType = bloodService.findByName(dto.getBloodTypeName()).get();

        User newUser = new User(
                String.valueOf(dto.getName().charAt(0)) + String.valueOf(dto.getSurname().charAt(0)) + dto.getOib().substring(6),
                "Random Password",
                dto.getName(),
                dto.getSurname(),
                dto.getBirthplace(),
                dto.getOib(),
                dto.getAddress(),
                dto.getWorkplace(),
                dto.getEmail(),
                dto.getMobilePrivate(),
                dto.getMobileBusiness(),
                dto.getBirthdate(),
                userRole,
                userBloodType
                );

        userService.createUser(newUser);
        return ResponseEntity.ok().build();
    }

    /*
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

    }*/

}
