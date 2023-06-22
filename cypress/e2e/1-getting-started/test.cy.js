/// <reference types="cypress" />
import loginSauce from "../../pageObjectModel/loginSauce"
import homePageSauce from "../../pageObjectModel/homePageSauce"

describe ('Test login SauceDemo', ()=>{
    beforeEach(()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
})
    it('Test case 1: Positive LogIn test', () => {
        loginSauce.inputUserName('student');
        loginSauce.inputPassword('Password123');
        loginSauce.clickBtnLogin();
        homePageSauce.verifyURL();
        homePageSauce.verifyMsgPostContenido();
        homePageSauce.verifyBtnLogOut();
    })
    it('Test case 2: Negative username test',() => {
        loginSauce.inputUserName('incorrectUser');
        loginSauce.inputPassword('Password123');
        loginSauce.clickBtnLogin;
        loginSauce.verifyMsgError('Your username is invalid!');
    })
    it('Test case 3: Negative password test',() => {
        loginSauce.inputUserName('student');
        loginSauce.inputPassword('incorrectPassword');
        loginSauce.clickBtnLogin();
        loginSauce.verifyMsgError('Your password is invalid!');
    })
})