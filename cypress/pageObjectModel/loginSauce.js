class loginSauceDemo{
    elements={
        userName : () => cy.get('#username'),
        password : () => cy.get('#password'),
        btnLogin : () => cy.get('#submit'),
        msgError: ()=> cy.get('#error')
    }
    inputUserName(username){
        this.elements.userName().type(username);
    }
    inputPassword(passwordvalida){
        this.elements.password().type(passwordvalida);
    }
    clickBtnLogin(){
        this.elements.btnLogin().click();
    }
    verifyMsgError(msjerror){
        this.elements.msgError().should('have.text',msjerror);
    }
}
module.exports = new loginSauceDemo();