package fer.progi.illidimusdigitus.trueblood.controllers;

import fer.progi.illidimusdigitus.trueblood.model.util.BloodType;
import fer.progi.illidimusdigitus.trueblood.model.util.RoleName;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.Date;

public class UserInfoDTO {
    public String name;

    public String surname;

    public String birthplace;

    public String address;

    public String workplace;

    public String mobilePrivate;

    public String mobileBusiness;

    public Date birthdate;

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getBirthplace() {
        return birthplace;
    }

    public String getAddress() {
        return address;
    }

    public String getWorkplace() {
        return workplace;
    }

    public String getMobilePrivate() {
        return mobilePrivate;
    }

    public String getMobileBusiness() {
        return mobileBusiness;
    }

    public Date getBirthdate() { return birthdate; }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setBirthplace(String birthplace) {
        this.birthplace = birthplace;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setWorkplace(String workplace) {
        this.workplace = workplace;
    }

    public void setMobilePrivate(String mobilePrivate) {
        this.mobilePrivate = mobilePrivate;
    }

    public void setMobileBusiness(String mobileBusiness) {
        this.mobileBusiness = mobileBusiness;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

}
