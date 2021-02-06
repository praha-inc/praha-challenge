describe('tictactoe', () => {
  it('マスを押すとoが表示される', () => {
    cy.visit('http://localhost:3000')
    cy.get(`[data-e2e=${1}]`).click().contains('X')
    cy.get(`[data-e2e=${2}]`).click().contains('O')
    cy.get(`[data-e2e=${4}]`).click().contains('X')
    cy.get(`[data-e2e=${5}]`).click().contains('O')
    cy.contains('Next player')
    cy.get(`[data-e2e=${7}]`).click().contains('X')
    cy.contains('Next Player').should('not.exist')
    cy.contains('"X" is winner!')
  });
});