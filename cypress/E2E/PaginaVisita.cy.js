describe('Testes do Portfólio', () => {

  it('Deve conferir cabeçalho', () => {
    cy.visit('http://127.0.0.1:5500/index.html'); 
    cy.contains('h1','MARCOS VINICIUS SOUZA DO NASCIMENTO').should('be.visible'); 
    cy.contains('Estagiário de TI | Qualidade (QA) | Em transição de carreira').should('exist'); 
 
      
    //Botões de Currículo, LinkedIn e GitHub devem estar visíveis
      cy.get('a[href="curriculo-marcos.pdf"]').should('be.visible');
      cy.get('a[href*="linkedin.com"]').should('be.visible');
      cy.get('a[href*="github.com"]').should('be.visible');


      //Links do menu devem existir
      cy.get('nav a[href="#Sobre"]').should('exist');
      cy.get('nav a[href="#Habilidades"]').should('exist');
      cy.get('nav a[href="#Projetos"]').should('exist');
      cy.get('nav a[href="#Contato"]').should('exist');
});
});