'use strict';
var chai = require('chai');
var expect = chai.expect;
var QuoteDataHelper = require('../quote_data_helper');

describe('QuoteDataHelper', function() {
    var helper = new QuoteDataHelper();

    describe('#getRandomQuote', function() { 
        context('from data helper', function() { 
            it('returns a random quote', function() {
                var quote = helper.getQuote();
                console.log('got quote ' + quote);
                return expect(quote).to.not.be.undefined;
            });
        });
    });
});
