const brewies = {
  tring: {
    name: 'Tring',
    description: 'The Tring Brewery Company was founded in 1992, reviving the traditional art of brewing in the picturesque West Hertfordshire market town of Tring. This was a town that, although steeped in brewing history, had been without a brewery for over 50 years. The locals were thirsty.',
    list: [{
      name: 'Wrens',
      notes: 'An extra pale malt base provides the ideal clean canvas for the spectacular US big hitters Mosaic, Citra and Simcoe hops. Expect pungent tropical, mango and citrus flavours.',
      percent: '4',
      colour: 'Pale'
    },{
      name: 'Fanny Ebbs',
      notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
      percent: '3.9',
      colour: 'Blonde'
    }, {
      name: 'Responsably',
      notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
      percent: '5.2',
    }, {
      name: 'Pale four',
      notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
      percent: '4.6',
      colour: 'Pale'
    }]
  },
  'watling-street': {
    name: 'Watling Street',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    list: [{
      name: 'Wrens',
      notes: 'An extra pale malt base provides the ideal clean canvas for the spectacular US big hitters Mosaic, Citra and Simcoe hops. Expect pungent tropical, mango and citrus flavours.',
      percent: '4',
      colour: 'Pale'
    },{
      name: 'Fanny Ebbs',
      notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
      percent: '3.9',
      colour: 'Blonde'
    }, {
      name: 'Responsably',
      notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
      percent: '5.2',
    }, {
      name: 'Pale four',
      notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
      percent: '4.6',
      colour: 'Pale'
    },{
      name: 'Wrens',
      notes: 'An extra pale malt base provides the ideal clean canvas for the spectacular US big hitters Mosaic, Citra and Simcoe hops. Expect pungent tropical, mango and citrus flavours.',
      percent: '4',
      colour: 'Pale'
    },{
      name: 'Fanny Ebbs',
      notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
      percent: '3.9',
      colour: 'Blonde'
    }, {
      name: 'Responsably',
      notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
      percent: '5.2',
    }, {
      name: 'Pale four',
      notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
      percent: '4.6',
      colour: 'Pale'
    }]
  }
}

export const getBreweryDetails = (name) => {
  return brewies[name];
}