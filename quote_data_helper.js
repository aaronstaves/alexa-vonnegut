'use strict';

var _ = require('lodash');

var BOOKS = {
    slaughterhouse_five: {
        name: 'Slaughterhouse Five',
        quotes: [
            'Everything was beautiful and nothing hurt.',
            'So it goes...',
            'And I asked myself about the present: how wide it was, how deep it was, how much was mine to keep.',
            'How nice -- to feel nothing, and still get full credit for being alive',
            'I have this disease late at night sometimes, involving alcohol and the telephone',
            'The smell of mustard gas and roses.',
            'Like so many Americans, she was trying to construct a life that made sense from things she found in gift shops',
            'All this happened, more or less.',
            'All moments, past, present and future, always have existed, always will exist.',
            'She was a dull person, but a sensational invitation to make babies.'
        ]
    },
    cats_cradle: {
        name: 'Cat\'s Cradle',
        quotes: [
            'Science is magic that works.',
            'Beware of the man who works hard to learn something, learns it, and finds himself no wiser than before',
            'Live by the harmless untruths that make you brave and kind and healthy and happy.',
            'I\'m not a drug salesman. I\'m a writer.', 
            'There is love enough in this world for everybody, if people will just look.',
            'Round and round we spin, with feet of lead and wings of tin',
            'As Bokonon says: peculiar travel suggestions are dancing lessons from god',
            'How complicated and unpredictable the machinery of life really is.'
        ]
    },
    breakfast_of_champions: {
        name: "Breakfast of Champions",
        quotes: [
            'I can have oodles of charm when I want to',
            'I couldn\'t help wondering if that was what God put me on Earth for--to find out how much a man could take without breaking',
            'in nonsense is strength',
            'Fucking was how babies were made.',
            'Seems like the only kind of job an American can get these days is committing suicide in some way',
            'What is the purpose of life?...To be the eyes and ears and conscience of the Creator of the Universe, you fool!',
            'Earthlings went on being friendly, when they should have been thinking instead.',
            'Sometimes I wonder about the Creator of the Universe',
            'Symbols can be so beautiful, sometimes.'
        ]
    }
};

function QuoteDataHelper() { };

QuoteDataHelper.prototype.getQuote = function() {

    var book = BOOKS[ Object.keys(BOOKS)[_.random(0, Object.keys(BOOKS).length -1, 0)] ];
    return book.quotes[ _.random(0, book.quotes.length-1, 0)] + ' -- from ' + book.name;
};



module.exports = QuoteDataHelper;