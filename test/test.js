
const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3030');

describe('SIMPLE unit test', () => {
  it('should return homepage', (done) => {
    server
      .get('/')
      .expect('content-type', /json/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        // res.body.error.should.equal(false);
        done();
      });
  });
});
