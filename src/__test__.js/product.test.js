const supertest = require("supertest");
const app = require("../routes/approutes");
const path = require("path");
const productVlaue = {
  title: "Polo",
  description: "polo brand t-shirt",
  price: 34343,
  rating: 5,
  quantity: 883,
  category: "shirt"
};
describe("product api test ", () => {
  describe("Product 200 k status check", () => {
    describe("get all product ", () => {
      it(" responds with json", async () => {
        const response = await supertest(app).get("/api/items");
        expect(response.status).toEqual(200);
      });
    });
    describe("upload forn data to the DB ", () => {
      it("should pass", async () => {
        const response = await supertest(app)
          .post("/api/items")
          .field(productVlaue)
          .attach(
            "productImage",
            path.resolve(
              __dirname,
              "D:/E-commerce/backend/uploads/2023008.jpeg"
            )
          )
          .expect(200);
        expect(response.body.data.response.category).toEqual(
          productVlaue.category
        );
      });
    });
    describe("Product search", () => {
      it("should pass ", async () => {
        const response = await supertest(app)
          .post("/api/search")
          .send({ title: productVlaue.title });

        expect(response.body.data.foundItems.length > 0);
        expect(200);
      });
    });
  });
  describe("Product fail status check", () => {

    describe("Product search", () => {
      it("should pass ", async () => {
        const response = await supertest(app)
          .post("/api/search")
          .send({ title: productVlaue.title });

        expect(response.body.data.foundItems.length < 0);
        expect(200);
      });
    });
  });
});
