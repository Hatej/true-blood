package fer.progi.illidimusdigitus.trueblood.controllers;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.Role;
import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.model.util.BloodType;
import fer.progi.illidimusdigitus.trueblood.model.util.RoleName;
import fer.progi.illidimusdigitus.trueblood.service.BloodService;
import fer.progi.illidimusdigitus.trueblood.service.RoleService;
import fer.progi.illidimusdigitus.trueblood.service.UserService;
import org.apache.tomcat.util.http.parser.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Base64;
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

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    //@CrossOrigin(origins = "*", allowCredentials = "true")
    //@GetMapping("")
    //public ResponseEntity<List<User>> listUsers() {
        //return ResponseEntity.ok().body(userService.listAll());
    //}

    @CrossOrigin(origins = "*")
    @PostMapping("/add")
    public ResponseEntity<User> createUser(@RequestBody CreateUserDTO dto, HttpServletRequest request) {

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

        String nPass = alphaNumericString(8);
        System.out.println(nPass);

        User newUser = new User(
                String.valueOf(dto.getName().charAt(0)) + String.valueOf(dto.getSurname().charAt(0)) + dto.getOib().substring(6),
                passwordEncoder.encode(nPass),
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
        userService.sendMail(newUser,request.getRequestURL().toString());

        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/login")
    public ResponseEntity<User> loginAttempt(@RequestHeader String authorization) {
        authorization = authorization.substring(6);
        String decodedString = new String(Base64.getDecoder().decode(authorization));
        String[] userPass = decodedString.split(":");

        if (userService.findByUsername(userPass[0]).isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        User usr = userService.findByUsername(userPass[0]).get();
        System.out.println(userPass[1] + "\n" + usr.getPassword());
        if (!passwordEncoder.matches(userPass[1], usr.getPassword())) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok().build();
    }

    public static String alphaNumericString(int len) {
        String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        Random rnd = new Random();

        StringBuilder sb = new StringBuilder(len);
        for (int i = 0; i < len; i++) {
            sb.append(AB.charAt(rnd.nextInt(AB.length())));
        }
        return sb.toString();
    }

    @GetMapping("/register/confirm")
    public ResponseEntity<String> verifyUser(@Param("code") String code) {
        if (userService.verify(code)) {
            return ResponseEntity.ok("verifySuccess=true");

        }
        return ResponseEntity.ok("verifySuccess=false");
    }

}
