/*import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js'; // Import your express app

const expect = chai.expect;
chai.use(chaiHttp);

describe('Calculator API', () => {

  it('should add two numbers', (done) => {
    chai.request(app)
      .get('/add?a=5&b=3')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(8);
        done();
      });
  });

  it('should subtract two numbers', (done) => {
    chai.request(app)
      .get('/subtract?a=10&b=4')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(6);
        done();
      });
  });

  it('should multiply two numbers', (done) => {
    chai.request(app)
      .get('/multiply?a=6&b=7')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(42);
        done();
      });
  });

  it('should divide two numbers', (done) => {
    chai.request(app)
      .get('/divide?a=20&b=4')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(5);
        done();
      });
  });

  it('should return error when dividing by zero', (done) => {
    chai.request(app)
      .get('/divide?a=10&b=0')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal('Cannot divide by zero');
        done();
      });
  });

});*/

import request from "supertest";
import app from "../app.js";

//const res = await request(app).get('/add/2/3');

describe("Calculator API", () => {
  it("should add two numbers", async () => {
    const res = await request(app).get("/add?a=2&b=3");
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toBe(5);
  });

  it("should subtract two numbers", async () => {
    const res = await request(app).get("/subtract/5/2");
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toBe(3);
  });

  it("should multiply two numbers", async () => {
    const res = await request(app).get("/multiply/3/4");
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toBe(12);
  });

  it("should divide two numbers", async () => {
    const res = await request(app).get("/divide/10/2");
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toBe(5);
  });
});
