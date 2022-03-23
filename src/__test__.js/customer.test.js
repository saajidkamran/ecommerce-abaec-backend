const supertest = require("supertest");
const app = require("../routes/approutes");
// make sure u change the username before the test run 
const userRegistation = {
  username: "saajidrrddssfdfgapstarssd",
  password: "123",
  email: "saajid@gmail.com"
};
describe("Customer Api test ", () => {
  describe("customer 200k status check ", () => {
    describe("Customer Registration", () => {
      it("should pass ", async () => {
        const response = await supertest(app)
          .post("/register")
          .send(userRegistation);
        expect(response.body.status).toEqual("Successfully registered");
        expect(200);
      });
    });
  });
  describe("customer 404 Not found", () => {
    describe("customer registration ", () => {
      it("should fail ", async () => {
        const response = await supertest(app)
          .post("/register")
          .send(userRegistation);
        expect(response.body.status).toEqual("Register fail ");
        expect(response.body.data.errorMessage).toEqual(
          "A user with the given username is already registered"
        );
        expect(200);
      });
    });
  });
});
