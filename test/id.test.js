const assert = require('assert');
const expect = require('chai').expect;
const Validator = require('../index');
describe('CNIDValidator', () => {
    it('should success return Object', () => {
        const v = new Validator('340103199911011856');
        const info = v.valid()
        console.log(info);
        expect(info).to.be.a('object')
        expect(info.age).to.eq(new Date().getFullYear() - 1999)
        expect(info.birthday).to.eq('1999-11-01');
        expect(info.gender).to.equal(1)
    });

    it('should fail and return false', () => {
        const v = new Validator('21010119670524545X');
        const info = v.valid()
        assert(!info)
    });
});