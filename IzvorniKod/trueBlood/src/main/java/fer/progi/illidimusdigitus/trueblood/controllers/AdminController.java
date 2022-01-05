package fer.progi.illidimusdigitus.trueblood.controllers;

import fer.progi.illidimusdigitus.trueblood.model.Donation;
import fer.progi.illidimusdigitus.trueblood.service.DonationService;
import fer.progi.illidimusdigitus.trueblood.service.HealthDataAnsweredService;
import fer.progi.illidimusdigitus.trueblood.service.RoleService;
import fer.progi.illidimusdigitus.trueblood.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.Role;
import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.model.util.BloodType;
import fer.progi.illidimusdigitus.trueblood.model.util.RoleName;

import javax.annotation.security.RolesAllowed;
import javax.servlet.http.HttpServletRequest;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class AdminController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private DonationService donationService;

    @Autowired
    private HealthDataAnsweredService healthDataAnsweredService;

    //TREBA SECURITY NAPRAVITI OVDJE I NA OSTALIM MJESTIMA
    @Secured("ROLE_ADMIN")
    @CrossOrigin("*")
    @GetMapping("/donorList")
    public List<AdminListAllUserDTO> getDonorList() {
       List<User> allUsers =  userService.listAll();

        //za sprobavanje
        /*SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        String username = authentication.getName();
        List<?> authhshss = authentication.getAuthorities().stream().toList();
        Object principal = authentication.getPrincipal();
        System.out.println(authhshss.size());*/

       return allUsers.stream()
               .filter((e) -> e.getRole().getName().toString().equals("DONOR"))
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
                .filter((e) -> e.getRole().getName().toString().equals("DJELATNIK"))
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
    public ResponseEntity deleteEmployee(@RequestBody String employeeid) {
       employeeid = employeeid.substring(1, employeeid.length - 1);
       Optional<User> employeeoptional = userService.findByUsername(employeeid);

       if(employeeoptional.isEmpty())
            return ResponseEntity.badRequest().build();

       User employee = employeeoptional.get();

       if(!employee.getRole().getName().toString().equals("DJELATNIK"))
           return ResponseEntity.badRequest().build();

       userService.deleteByUsername(employee.getUsername());
       return ResponseEntity.ok().build();
    }

    @CrossOrigin("*")
    @DeleteMapping("/deactivateDonor")
    public ResponseEntity deleteDonor(@RequestBody String donorid) {
        String[] donoridpodaci = donorid.split("\"");
        donorid = donoridpodaci[3];
        Optional<User> donoroptional = userService.findByUsername(donorid);

        if(donoroptional.isEmpty())
            return ResponseEntity.badRequest().build();

        User donor = donoroptional.get();

        if(!donor.getRole().getName().toString().equals("DONOR"))
            return ResponseEntity.badRequest().build();

        userService.deleteByUsername(donor.getUsername());
        return ResponseEntity.ok().build();
    }
    
    

}
