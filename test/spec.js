const expect = require('chai').expect;
const Calculator = require('../calculator');

describe('calculator', () => {
  it('exists', () => {
    expect(Calculator).to.be.ok;
  });
  it('can add', () => {
    var a = 5;
    var b = 11;
    expect(Calculator(a, b, 'add')).to.equal(16);
  });
  it('can subtract', () => {
    var a = 10;
    var b = 5;
    expect(Calculator(a, b, 'subtract')).to.equal(5);
  });
  it('can add', () => {
    var a = 7;
    var b = 7;
    expect(Calculator(a, b, 'multiply')).to.equal(49);
  });
});
