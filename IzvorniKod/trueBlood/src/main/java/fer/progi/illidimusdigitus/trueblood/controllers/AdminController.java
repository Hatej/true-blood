package fer.progi.illidimusdigitus.trueblood.controllers;

import fer.progi.illidimusdigitus.trueblood.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import fer.progi.illidimusdigitus.trueblood.model.User;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.AttributeOverride;

@RestController
public class AdminController {

    @Autowired
    private UserService userService;

    @CrossOrigin("*")
    @GetMapping("/donorList")
    public List<AdminListAllUserDTO> getDonorList() {
       List<User> allUsers =  userService.listAll();

       List<AdminListAllUserDTO> filtriraniDonori = allUsers.stream()
               .filter((e) -> e.getRole().getName().equals("donor"))
               .map((e) -> {
                   AdminListAllUserDTO user = new AdminListAllUserDTO();
                   user.setAddress(e.getAddress());
                   user.setBirthdate(e.getBirthdate());
                   user.setBirthplace(e.getBirthplace());
                   user.setName(e.getName());
                   user.setMobileBusiness(e.getMobileBusiness());
                   user.setBlood(e.getBloodType());
                   user.setMobilePrivate(e.getMobilePrivate());
                   user.setMobileBusiness(e.getMobileBusiness());
                   user.setRejected(e.isRejected());
                   user.setRole(e.getRole());
                   user.setSurname(e.getSurname());
                   user.setUsername(e.getUsername());
                   user.setWorkplace(e.getWorkplace());

                   return user;
               })
               .collect(Collectors.toList());


       return filtriraniDonori;
    }
}
