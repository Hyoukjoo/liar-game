context("Test", () => {
  describe("Home ", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Title has the text", () => {
      cy.get("h1").should("have.text", "Test Hello World");
    });

    it("Its test", () => {
      cy.get("body").its("");
    });
  });
});
