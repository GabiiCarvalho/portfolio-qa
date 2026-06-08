import userData from "../fixtures/users/user-data.json";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Tests", () => {
  it.only("User Info Update - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password,
    );

    dashboardPage.checkDashboardPage();

    menuPage.accessMyInfo();

    myInfoPage.fillPersonalDetails("Fist Name", "Middle Name", "Last Name");
    myInfoPage.fillEmployeeDetails(
      "EmployeeId",
      "OtherId",
      "514213",
      "2023-01-10",
      "1997-11-28",
    );
    myInfoPage.fillStatus();
    myInfoPage.saveForm();

    //cy.get(selectorsList.genericField).eq(3).clear().type("nathancarvalho"); //employee id
  });
  it("Login - Fail", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialsAlert);
  });
});
