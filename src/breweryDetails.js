const brewies = {
  tring: {
    name: 'Tring',
    description: 'here is some information about tring',
    list: [{
      name: 'first',
      notes: 'There is a sample Works Cited list that follows. The body content on that page uses the Bibliography style. Note that MLA rules for citations and references are extensive. So it’s a good idea to refer to MLA 7th Edition for further information.]',
      percent: '4',
      colour: 'blonde'
    },{
      name: 'second',
      notes: 'There is a sample Works Cited list that follows. The body content on that page uses the Bibliography style. Note that MLA rules for citations and references are extensive. So it’s a good idea to refer to MLA 7th Edition for further information.]',
      percent: '4',
      colour: 'blonde'
    }, {
      name: 'third',
      notes: 'There is a sample Works Cited list that follows. The body content on that page uses the Bibliography style. Note that MLA rules for citations and references are extensive. So it’s a good idea to refer to MLA 7th Edition for further information.]',
      percent: '5',
      colour: 'blonde'
    }, {
      name: 'fourth',
      notes: 'There is a sample Works Cited list that follows. The body content on that page uses the Bibliography style. Note that MLA rules for citations and references are extensive. So it’s a good idea to refer to MLA 7th Edition for further information.]',
      percent: '8',
      colour: 'blonde'
    }]
  }
}

export const getBreweryDetails = (name) => {
  return brewies[name];
}