package fer.progi.illidimusdigitus.trueblood.controllers;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.Role;
import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.model.util.BloodType;
import fer.progi.illidimusdigitus.trueblood.model.util.RoleName;
import fer.progi.illidimusdigitus.trueblood.service.BloodService;
import fer.progi.illidimusdigitus.trueblood.service.RoleService;
import fer.progi.illidimusdigitus.trueblood.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import java.util.Random;
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

        Role userRole = roleService.findByName(RoleName.DONOR).get();

        BloodType userBT = switch(dto.getBloodTypeName()) {
          case "A+" -> BloodType.A_PLUS;
          case "A-" -> BloodType.A_MINUS;
          case "B+" -> BloodType.B_PLUS;
          case "B-" -> BloodType.B_MINUS;
          case "0+" -> BloodType.ZERO_PLUS;
          case "0-" -> BloodType.ZERO_MINUS;
          case "AB+" -> BloodType.AB_PLUS;
          case "AB-" -> BloodType.AB_MINUS;
          default -> BloodType.A_PLUS;
        };
        Blood userBloodType = bloodService.findByName(userBT).get();

        User newUser = new User(
                String.valueOf(dto.getName().charAt(0)) + String.valueOf(dto.getSurname().charAt(0)) + dto.getOib().substring(6),
                alphaNumericString(8),
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
    public static String alphaNumericString(int len) {
        String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        Random rnd = new Random();

        StringBuilder sb = new StringBuilder(len);
        for (int i = 0; i < len; i++) {
            sb.append(AB.charAt(rnd.nextInt(AB.length())));
        }
        return sb.toString();
    }

}
