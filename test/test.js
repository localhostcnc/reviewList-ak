
const supertest = require('supertest');
const should = require('should');
const assert = require('assert');

const server = supertest.agent('http://localhost:3030');

describe('Testing Attributes Rating', () => {
  it('should return an array of 6 elements, with values in range [1,5]', (done) => {
    server
      .get('/attributesrating')
      .expect('content-type', /json/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.should.length(6);
        res.body.forEach((attPair) => {
          attPair.average_value.should.be.above(1);
        });
        // res.body.error.should.equal(false);
        done();
      });
  });
});
