package fer.progi.illidimusdigitus.trueblood.service;

import java.util.List;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.Donation;
import fer.progi.illidimusdigitus.trueblood.model.User;

public interface EmailService {
    void send(String to, String name,String username ,String link);
    
    void sendgeneratedPDF(Donation donation, User usr);
    void notificationLower(Blood blood, List<User> users);
    void notificationUpper(Blood blood, List<User> users);
}
