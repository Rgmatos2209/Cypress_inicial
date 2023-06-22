class homePageLogin{
    elements = {
        msgPostTitle: ()=> cy.get('.post-title'),
        msgPostContenido: () => cy.get('strong').eq(0),
        btnLogOut: () => cy.get('[class="wp-block-button__link has-text-color has-background has-very-dark-gray-background-color"]'),
        urlPageHome: () => cy.url()
    }
    verifyMsgPostContenido(){
        this.elements.msgPostContenido().should('contain.text','Congratulations');
    }
    verifyURL(){
        this.elements.urlPageHome().should('contains', 'practicetestautomation.com/logged-in-successfully/');
    }
    verifyBtnLogOut(){
        this.elements.btnLogOut().should('have.text','Log out');
    }
}
module.exports = new homePageLogin();