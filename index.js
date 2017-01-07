'use strict';
module.change_code = 1;
var _ = require('lodash');
var Alexa = require('alexa-app');
var app = new Alexa.app('vonnegutquote');
var QuoteDataHelper = require('./quote_data_helper');

app.launch(function(req, res) {
    var prompt = 'Just as for a vonnegut quote';
    res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('getquote', {
    utterances: [' {for |} {a |} quote']
}, function(req, res) {
    var quoteHelper = new QuoteDataHelper();
    var quote = quoteHelper.getQuote();
    res.say(quote).send();
    return false;
});


var utterancesMethod = app.utterances;
app.utterances = function() {
    return utterancesMethod().replace(/\{\-\|/g, '{');
};
module.exports = app;