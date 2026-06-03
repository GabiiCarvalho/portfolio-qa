import userData from "../fixtures/users/user-data.json";

describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: ".oxd-button",
    dashboardGrid: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialsAlert: ".oxd-alert",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: ".oxd-input--active",
    calendaryField: ".oxd-date-wrapper",
    saveBtn: "[type='submit']",
    dateCloseButton: ".--close",
  };

  it.only("User Info Update - Success", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid);
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type("Nathan");
    cy.get(selectorsList.middleNameField).clear().type("Silva");
    cy.get(selectorsList.lastNameField).clear().type("Carvalho");
    cy.get(selectorsList.genericField).eq(3).clear().type("junior"); //employee id
    cy.get(selectorsList.genericField).eq(4).clear().type("332213"); // other id
    cy.get(selectorsList.genericField).eq(5).clear().type("64135"); // driver license
    cy.get(selectorsList.calendaryField).eq(0).clear().type("2026-06-28"); //calendario license date
    cy.get(selectorsList.dateCloseButton).click(); //close calendar
    cy.get(selectorsList.calendaryField).eq(1).clear().type("1997-11-28"); //calendario birth date
    cy.get(selectorsList.dateCloseButton).click(); //close calendar
    cy.get(selectorsList.genericField).eq(8).clear().type("7469"); //Test_Field
    cy.get(selectorsList.saveBtn).eq(0).click(); // Save button
    cy.get("body").should("contain", "Successfully Updated");
  });
  it("Login - Fail", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialsAlert);
  });
});
