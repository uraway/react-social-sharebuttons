var chai = require('chai');
var contentEdit = require('../lib/main.js');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('LINEButton()', function() {

    it('should be defined', function() {
    	var el = document.getElementById("linebutton");
        assert.equal(el, undefined);
    })
})
