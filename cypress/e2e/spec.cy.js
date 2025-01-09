describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214234@mhs.dinus.ac.id")
      .should("have.value", "111202214234@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");

    cy.get("header");
  });
 
  it("should show error when student email is missing @ symbol", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214234mhs.dinus.ac.id")
      .should("have.value", "111202214121mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();
    cy.get("div").contains("Invalid email address format");
  });

  it("should show error when student email is missing domain", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214234@")
      .should("have.value", "111202214234@");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();
    cy.get("div").contains("Invalid email address format");
  });

  it("should show error when student email is missing dot", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214234@mhsdinusacid")
      .should("have.value", "111202214234@mhsdinusacid");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();
    cy.get("div").contains("Invalid email address format");
  });
});