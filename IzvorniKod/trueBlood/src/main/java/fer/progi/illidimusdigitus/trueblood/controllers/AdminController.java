package fer.progi.illidimusdigitus.trueblood.controllers;

import fer.progi.illidimusdigitus.trueblood.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import fer.progi.illidimusdigitus.trueblood.model.User;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class AdminController {

    @Autowired
    private UserService userService;

    @CrossOrigin("*")
    @GetMapping("/donorList")
    public List<AdminListAllUserDTO> getDonorList() {
       List<User> allUsers =  userService.listAll();

       return allUsers.stream()
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



    }



    @CrossOrigin("*")
    @GetMapping("/employees")
    public List<AdminListAllUserDTO> getEmployees() {
        List<User> allUsers =  userService.listAll();

        List<AdminListAllUserDTO> filtriraniDjelatnici = allUsers.stream()
                .filter((e) -> e.getRole().getName().equals("djelatnik"))
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


        return filtriraniDjelatnici;
    }

    @CrossOrigin("*")
    @DeleteMapping("/deactivateEmployee")
    public ResponseEntity deleteEmployee(@RequestBody String donorid) {

       Optional<User> donoroptional = userService.findByUsername(donorid);

       if(donoroptional.isEmpty())
            return  ResponseEntity.badRequest().build();

       User donor = donoroptional.get();

       if(!donor.getRole().getName().equals("djelatnik"))
           return ResponseEntity.badRequest().build();


        userService.deleteByUsername(donor.getUsername());

        return  ResponseEntity.ok().build();
    }

    @CrossOrigin("*")
    @DeleteMapping("/deactivateDonor")
    public ResponseEntity deleteDonor(@RequestBody String donorid) {

        Optional<User> donoroptional = userService.findByUsername(donorid);

        if(donoroptional.isEmpty())
            return  ResponseEntity.badRequest().build();

        User donor = donoroptional.get();

        if(!donor.getRole().getName().equals("donor"))
            return ResponseEntity.badRequest().build();


        userService.deleteByUsername(donor.getUsername());

        return  ResponseEntity.ok().build();
    }

}
