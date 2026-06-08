class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameField: '[name="firstName"]',
      middleNameField: '[name="middleName"]',
      lastNameField: '[name="lastName"]',
      genericField: ".oxd-input--active",
      calendaryField: "[placeholder='yyyy-dd-mm']",
      saveBtn: "[type='submit']",
      dateCloseButton: ".--close",
      selectionBox: ".oxd-select-text",
      countryBox: "[role='option']",
      maritalStatusBox: "[role='option']",
    };
    return selectors;
  }

  fillPersonalDetails(firstName, middleName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName);
    cy.get(this.selectorsList().middleNameField).clear().type(middleName);
    cy.get(this.selectorsList().lastNameField).clear().type(lastName);
  }

  fillEmployeeDetails(
    employeeId,
    otherId,
    driversLicenseNumber,
    expiryDate,
    birthDate,
  ) {
    cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId); // employee id
    cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId); // other id
    cy.get(this.selectorsList().genericField)
      .eq(6)
      .clear()
      .type(driversLicenseNumber); //Drivers License Date
    cy.get(this.selectorsList().calendaryField).eq(0).clear().type(expiryDate); // Expiry License Date
    cy.get(this.selectorsList().dateCloseButton).click(); //close calendar
    cy.get(this.selectorsList().calendaryField).eq(1).clear().type(birthDate); //calendario birth date
    cy.get(this.selectorsList().dateCloseButton).click(); //close calendar
  }

  saveForm() {
    cy.get(this.selectorsList().saveBtn).eq(0).click(); // Save button
    cy.get("body").should("contain", "Successfully Updated");
  }

  fillStatus() {
    cy.get(this.selectorsList().selectionBox).eq(0).click();
    cy.get(this.selectorsList().countryBox).eq(27).click();
    cy.get(this.selectorsList().selectionBox).eq(1).click();
    cy.get(this.selectorsList().maritalStatusBox).eq(2).click();
  }
}

export default MyInfoPage;
