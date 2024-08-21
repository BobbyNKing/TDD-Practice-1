const {expect} = require('chai');

const Number = require("../problem/tddpractice.js");

describe ('Return array, in reverse', function () {
    it('reverse array', function () {
      let array = ["hopeless", "runner", "cheezit"];
      expect(arrayReverse(array)).to.equal(["cheezit", "runner", "hopeless"]);
    });
  });

  describe ('Make a Calculator', function () {
    it('multiply?', function () {
      let ten = new Number (10);
      expect(ten.multiply(2)).to.equal(20);
    });
    it('addition?', function () {
        let five = new Number(5);
        expect(five.addition(5)).to.equal(10);
      });
      it('subtraction?', function () {
        let twenty = new Number (20);
        expect(twenty.subtraction(5)).to.equal(15);
      });
      it('division?', function () {
        let fifteen = new Number (15);
        expect(fifteen.division(5)).to.equal(3);
      });
  });

  describe ('Return array without suffix er', function () {
    it('no words ending in er', function () {
      let array = ["hopeless", "runner", "cheezit"];
      expect(noER(array)).to.equal(["cheezit", "hopeless"]);
    });
  });