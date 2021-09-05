/** @format */

var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var cal = require("../Saludo");

describe("Testing Saludo: ", function () {
  describe("Check addTest Function", function () {
    it("Check the returned value using : assert.equal(value, value): ", function () {
      result = cal.addsaludo("");
      assert.equal("Hola como estass", result);
    });
  });
});
