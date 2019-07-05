export default {
  beerStart: {
    type: 'QUESTION',
    title: 'You\'re stranded at sea, do you let your beloved on to the door?',
    answers: [{
      title: 'Of course',
      breweryId: 'titanic',
      productId: 'plum-porter'
    }, {
      title: 'No',
      nextId: 'doYouKnowTheAnswer'
    }]
  },
  doYouKnowTheAnswer: {
    type: 'QUESTION',
    title: 'Do you already know the answer?',
    answers: [{
      title: 'I have always known',
      breweryId: 'salopian',
      productId: 'oracle'
    }, {
      title: 'You haven\'t asked me a question?!',
      breweryId: 'paradigm',
      productId: 'heads-up'
    }, {
      title: '42',
      breweryId: 'paradigm',
      productId: 'blue-sky-thinking'
    }, {
      title: 'No....',
      nextId: 'anythingToDoTomorrow'
    }]
  },
  anythingToDoTomorrow: {
    type: 'QUESTION',
    title: 'Do you have anything to do tomorrow, that requires you to move?',
    answers: [{
      title: 'No',
      breweryId: 'windsor-and-eton',
      productId: 'wasteland'
    }, {
      title: 'Unfortunatley yes',
      nextId: 'whatsYourIdealHoliday'
    }]
  },
  whatsYourIdealHoliday: {
    type: 'QUESTION',
    title: 'What\'s your ideal holiday?',
    answers: [{
      title: 'Off the beaten track',
      breweryId: 'new-river',
      productId: 'lost-river'
    }, {
      title: 'A City break',
      breweryId: 'popes-yard',
      productId: 'king-street-dusk'
    }, {
      title: 'Somewhere without tourists',
      breweryId: 'new-river',
      productId: 'isle-of-rye'
    }, {
      title: 'Hot and sunny',
      breweryId: 'buntingford',
      productId: 'sunstar'
    }, {
      title: 'Somewhere with a bar',
      nextId: 'goldOrSilver'
    }]
  },
  goldOrSilver: {
    type: 'QUESTION',
    title: 'Gold or Silver',
    answers: [{
      title: 'Gold',
      breweryId: 'haresfoot',
      productId: 'dragons-bain'
    }, {
      title: 'Silver',
      breweryId: 'haresfoot',
      productId: 'new-moon'
    }, {
      title: 'Is Beer an option?',
      nextId: 'winAtAllCosts'
    }]
  },
  winAtAllCosts: {
    type: 'QUESTION',
    title: 'Would you prefer your team to win at all costs, or win with grace and dignity',
    answers: [{
      title: 'At all costs',
      breweryId: 'windsor-and-eton',
      productId: 'conqueror'
    }, {
      title: 'With grace and dignity',
      breweryId: 'windsor-and-eton',
      productId: 'knight-of-the-garter'
    }, {
      title: 'As long as both teams have fun',
      nextId: 'jackTheRipper'
    }]
  },
  jackTheRipper: {
    type: 'QUESTION',
    title: 'Who was the best Jack?',
    answers: [{
      title: 'Jack the ripper',
      breweryId: 'amberales',
      productId: 'ripper'
    }, {
      title: 'Jack the lad',
      breweryId: 'tring',
      productId: 'jimbob'
    }, {
      title: 'Jack is a terrible name',
      nextId: 'glassHalfEmptyOrFull'
    }, {
      title: 'Sorry but Brett is better then Jack',
      breweryId: 'beerblefish',
      productId: 'brett-only-ipa'
    }]
  },
  glassHalfEmptyOrFull: {
    type: 'QUESTION',
    title: 'Glass half empty or glass half full?',
    answers: [{
      title: 'Half full',
      breweryId: 'wantsum',
      productId: 'mores-ipa'
    }, {
      title: 'Half Empty',
      nextId: 'cleanThePalate',
    }, {
      title: 'Also as its still got half a beer in its fines',
      breweryId: 'paradigm',
      productId: 'win-win'
    }]
  },
  cleanThePalate: {
    type: 'QUESTION',
    title: 'Do you need something to clean the palate',
    answers: [{
      title: 'Yes please',
      breweryId: 'chiltern',
      productId: 'pale-ale'
    }, {
      title: 'I\'m only just starting',
      nextId: 'pickAFlavour'
    }]
  },
  pickAFlavour: {
    type: 'QUESTION',
    title: 'Pick a flavour',
    answers: [{
      title: 'Rich toffee aroma',
      breweryId: 'chiltern',
      productId: 'beechwood-bitter'
    }, {
      title: 'Chocolate',
      breweryId: '3Brewers',
      productId: 'special' 
    }, {
      title: 'I\'m hopping for joy',
      breweryId: 'tring',
      productId: 'pale-four'
    }, {
      title: 'I\'m a bit nutty',
      breweryId: 'rudgate',
      productId: 'ruby-mild'
    }, {
      title: 'Pineapple, nectarine and pear',
      breweryId: 'popes-yard',
      productId: 'lacerta-us'
    }, {
      title: 'Can I do it by colour?',
      nextId: 'pickAColour'
    }]
  },
  pickAColour: {
    type: 'QUESTION',
    title: 'Blondes, Brunettes or Red Heads',
    answers: [{
      title: 'Blonde',
      breweryId: '3Brewers',
      productId: 'blonde'
    }, {
      title: 'Brunettes',
      breweryId: 'rebellion',
      productId: 'barrell-roll'
    }, {
      title: 'Red Heads',
      breweryId: 'rebellion',
      productId: 'Roasted Nuts'
    }, {
      title: 'Black like the night',
      breweryId: 'farr',
      productId: 'black-listed'
    }, {
      title: 'I prefer a silver fox',
      breweryId: 'wantsum',
      productId: '1381'
    }]

  },

}