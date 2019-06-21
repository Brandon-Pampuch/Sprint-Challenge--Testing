const supertest = require("supertest");
const server = require("./server.js");

describe("server", () => {
  describe("returns all games in an array", () => {
    it("responds with 200 ok", () => {
      // this works fine //ALWAYS MAKE SURE CODE FAILS
      return supertest(server)
        .get("/")
        .expect(200);
    });
  });
 
    it("responds with 200 ok", async () => {
      // this works fine //ALWAYS MAKE SURE CODE FAILS
      await supertest(server)
        .get("/games")
        .then(res =>{
    expect(Array.isArray(res.body)).toBeTruthy;
        })
    
       
    });
    it("not not an array to be true", async () => {
      // this works fine //ALWAYS MAKE SURE CODE FAILS
      await supertest(server)
        .get("/games")
        .then(res =>{
    expect(!Array.isArray(res.body)).not.toBeTruthy;
        })
    
       
    })
    it("responds with 200 if all info sent", () => {
        // this works fine //ALWAYS MAKE SURE CODE FAILS
        const game = {
            title:"Mario",
            genre:"action"
        }
        return supertest(server)
          .post("/games")
          .send(game)
          .expect(200);
      });
    it("responds with 422 cannot process if incomplete", () => {
        // this works fine //ALWAYS MAKE SURE CODE FAILS
        const game = {
            title:"Waldo"
           
        }
        return supertest(server)
          .post("/games")
          .send(game)
          .expect(422);
      });
    it("responds with 422 if nothing sent", () => {
        // this works fine //ALWAYS MAKE SURE CODE FAILS
           
        return supertest(server)
          .post("/games")
          .expect(422);
      });

})