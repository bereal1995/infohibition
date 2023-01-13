/// <reference types="cypress" />

const VISIT_PATH = 'http://localhost:3000';

const visit = (darkAppearance: boolean) =>
  cy.visit(VISIT_PATH, {
    onBeforeLoad(win) {
      cy.stub(win, 'matchMedia')
        .withArgs('(prefers-color-scheme: dark)')
        .returns({
          matches: darkAppearance,
        });
    },
  });

beforeEach(() => {
  cy.visit(VISIT_PATH);
});

describe('다크모드 테마', () => {
  context('최초 렌더링 시에', () => {
    it('테마 버튼이 렌더링 되어야 한다.', () => {
      cy.get('#ih-theme-button').should('be.visible');
    });
    it('localStorage에 저장된 테마가 있으면 저장된 테마가 적용되어여 한다.', () => {
      localStorage.setItem('ih_theme', 'dark');
      cy.get('body[data-mode="dark"]').should('be.visible');

      localStorage.setItem('ih_theme', 'light');
      cy.get('body[data-mode="dark"]').should('not.exist');
    });
    it('localStorage에 저장된 테마가 없으면 운영체제 테마가 적용되어여 한다.', () => {
      cy.clearLocalStorage('ih-theme').then(() => {
        visit(true);
        cy.get('body[data-mode="dark"]').should('be.visible');
        visit(false);
        cy.get('body[data-mode="dark"]').should('not.exist');
      });
    });
  });

  context('테마 버튼을 클릭하면', () => {
    const clickThemeButton = () => cy.get('#ih-theme-button').click();
    it('테마가 변경되어야 한다.', () => {
      if (cy.get('body[data-mode="dark"]')) {
        clickThemeButton();
        cy.get('body[data-mode="dark"]').should('not.exist');
      } else {
        clickThemeButton();
        cy.get('body[data-mode="dark"]').should('be.visible');
      }
    });
    it('localStorage에 테마가 저장되어야 한다.', () => {
      clickThemeButton();
      cy.window().then((win) => {
        expect(win.localStorage.getItem('ih_theme')).to.not.be.null;
      });
    });
  });

  context('새로고침 시에', () => {
    it('현재 적용되어있는 테마가 적용되어야 한다.', () => {
      if (cy.get('body[data-mode="dark"]')) {
        cy.reload();
        cy.get('body[data-mode="dark"]').should('be.visible');
      } else {
        cy.reload();
        cy.get('body[data-mode="dark"]').should('not.exist');
      }
    });
  });
});

export {};
