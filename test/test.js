
let supertest = require("supertest");
let should = require ("should");
let server = supertest.agent("http://localhost:3030");

describe("SIMPLE unit test", () => {
    it("should return homepage", (done) => {
        server
        .get("/")
        .expect("content-type", /json/)
        .expect(200)
        .end(function(err, res){
            res.status.should.equal(200);
            //res.body.error.should.equal(false);
            done();
        });
    });
});
