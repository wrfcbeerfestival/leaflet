const brewies = {
  gin: {
    warner: {
      name: 'Rub',
      image: 'rub.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        image: 'warner-edwards.jpeg'
      }]
    },
    beefeater: {
      name: 'Rub',
      image: 'rub.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        image: 'warner-edwards-eld.jpeg'
      }]
    },
    gordons: {
      name: 'Rub',
      image: 'rub.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        image: 'warner-edwards-dry.jpg'
      }]
    }
  },
  cider: {
    lilleys: {
      name: 'Lilleys',
      image: 'lilleys.jpg',
      description: 'Lilley\'s Cider is a family run cider producer based in Frome, Somerset. Producing a diverse range of traditional & experimental blends of cider & perry all made with care & enthusiasm.',
      list: [{
        name: 'Bee Sting Perry',
        notes: 'A medium to sweet perry (pears) oozing with subtle flavours. Has cult status and will go fast even though we bought three. ',
        percent: '7.5',
        colour: 'Perry'
      }] 
    },
    'celtic-marches': {
      name: 'Celtic Marches',
      image: 'celtic-marches.png',
      description: 'After a career in major cider manufacturing and a break to bring up her young family Susan Vaughan decided to join her brother Robert Hancocks back on the family farm in Bishops Frome Herefordshire. The family has been growing fruit and hops on the farm for over 100 years Their farming roots go back deep into Mid Wales and the Welsh borders where many of their family still farm today. They are now drawing on that heritage and the abilities acquired from a history in the cider and brewing industry to produce quality ciders on the family farm.',
      list: [{
        name: 'Lilly The Pink',
        notes: 'A medium fruity cider – gorgeous pink hue – made from 100% cider apples on our Herefordshire farm – intense fruity aroma',
        percent: '4.5',
        colour: 'Fruity'
      }, {
        name: 'Slack Alice', 
        colour: 'Medium',
        notes: 'A medium well rounded and mellow cider with a very slight tart finish.',
        percent: '4.6',
      }, {
        name: 'Thundering Molly',
        notes: 'Well rounded medium cider. Fresh and fruity with a lovely apple aroma. Gorgeous golden colour and a balanced finish.',
        percent: '5.2',
        colour: 'Medium'
      }, {
        name: 'Ruby Tuesday',
        notes: 'Cider liberally imparted with British Raspberry Juice gives it a gorgeous colour and a wonderful taste.',
        percent: '4.0',
        colour: 'Fruity'
      }, {
        name: 'Nell Gwynee',
        notes: 'A cider liberally imparted with orange and cinnamon. Enjoy warm in the winter as an alternative to mulled cider or wine, or cold over ice in the summer.',
        percent: '4.0',
        colour: 'Fruity'
      }, {
        name: 'Loubi Lou',
        notes: 'Our Herefordshire Cider has been liberally imparted with Pomegranate and Rose, the orchard and the garden, giving it the quintessential taste of the English summer.',
        percent: '4.0',
        colour: 'Fruity'
      }, {
        name: 'Cuckoo Penny',
        notes: 'A beautiful blend of Yorkshire Triangle Timperley Rhubarb Juice and our Herefordshire Cider creates the quintessential taste of the English Countryside. A medium cider with the subtle tart of rhubarb juice giving a refreshing bite at the end.',
        percent: '4.0',
        colour: 'Medium'
      }, {
        name: 'Slighly Foxed',
        notes: 'Herefordshire Cider liberally imparted with exotic mango. A sophisticated combination providing an easy drinking taste of the tropics. Only 4% but dangerous. You\'ll forget you\'re drinking cider.',
        percent: '4.0',
        colour: 'Fruity'
      }, {
        name: 'Tutti Frutti',
        notes: 'Herefordshire Cider liberally imparted with Cherry and Pineapple - exotic flavours to provide a unique tropical twist to Craft Cider.',
        percent: '4.0',
        colour: 'Fruity'
      }]
    },
    'harrys': {
      name: 'Harry\'s',
      image: 'harrys-cider.png',
      description: 'Harry’s Cider is a family business and fast-growing brand that produces traditional and sparkling ciders in the heart of Somerset ‘ciderland’. Based on the family farm in Long Sutton, Harry and his son are the farmers, growers, producers and processors, giving total control over the end product.',
      list: [{
        name: 'Dirty Harry',
        notes: 'The perfect summer drink, best served chilled over ice. It has a distinct summer fruits flavour followed by a cidery aftertaste.',
        percent: '4.0',
        colour: 'Fruity'
      }, {
        name: 'Prince Harry',
        notes: 'This is a refreshing Ginger Cider, blended with our Dry cider it has a great balance of spicy ginger followed by a cidery aftertaste.',
        percent: '4.0',
        colour: 'Medium'
      }, {
        name: 'Flash Harry',
        notes: 'A unique cider blended with mango and lime giving a lovely initial sweetness followed by a cidery aftertaste.',
        percent: '4.0',
        colour: 'Fruity'
      }]
    },
    hecks: {
      name: 'Hecks',
      description: 'The Hecks family have been making traditional farmhouse cider in Somerset for six generations, since 1841. In 1896, they started to sell cider from there our farm shop in Street. Making cider by blending juice from apples all grown locally in the farm’s orchards. The cider is fermented in wooden barrels and sold draught from the wood.',
      image: 'hecks.jpg',
      list: [{
        name: 'Sweet',
        notes: 'All fermented in oak barrels and sold draught from the wood. A vintage sweet, with a high percentage.',
        percent: '6.5',
        colour: 'Sweet'
      }]
    },
    'kentish-pip': {
      name: 'Kentish Pip',
      description: 'A small team with a big ambition: to change the way cider is seen and consumed in the UK. Kentish pip are obsessed with flavour and quality and there goal is to combine the best ingredients with innovation, style and a pinch of tradition to produce the next generation of British Cider.',
      image: 'kentish-pip.png',
      list: [{
        name: 'Pear & Bramley',
        notes: 'A medium pyder (apples and pears) expertly blended to tantilise your taste buds.',
        percent: '4.0',
        colour: 'Medium'
      }]
    },
    'sandford-orchards': {
      name: 'Sandford Orchards',
      description: 'Ground in vivid, red soil; crisscrossed by ancient orchards and bound by its own microclimate, their lush green corner of Devon is the finest place on earth to grow cider apples. They only select apples grown within 30 miles of their press.',
      image: 'sandford-orchards.png',
      list: [{
        name: 'Merry Legs Perry',
        notes: 'A real, laid back Perry crafted from the finest perry pears.  A sweet, floral nose leads to flavours of pear drops and honey with a delicate medium-sweet finish.',
        percent: '3.8',
        colour: 'Perry'
      }]
    }
  },
  beer: {
    wantsum: {
      name: 'Wantsum',
      image: 'wantsum.jpeg',
      description: 'In 2009, James Sandy started brewing "Fortitude" the first of what has become an extensive range of beers all named after people or pivotal events in Kent\'s history. Today the brewery proudly produces 10 regular ales and many seasonal and special ales which are sold to pubs and bottle outlets throughout the South East of England & East Anglia Wantsum Brewery takes its name from the Wantsum Channel, the watercourse seperating the Isle of Thanet and what was the mainland of the English county of Kent.',
      list: [{
        name: 'More\'s IPA',
        notes: 'A Tawny bitter with American hops. Munich, double roasted crystal and chocolate malt give a rich tawny colour and lay a strong malty foundation. Simcoe and Mosaic hops add tropical and citrus fruit notes.',
        percent: '3.5',
        colour: 'Tawny'
      }, {
        name: '1381', 
        colour: 'Gold',
        notes: 'The year of the Peasants Revolt. A golden IPA combining pale and crystal malts with Williamette and Centenial hops to give delicate citrus and herbal aromas.',
        percent: '3.8',
      }]
    },
    chiltern: {
      name: 'Chiltern',
      image: 'chiltern.jpeg',
      description: 'The oldest independent brewery in the Chiltern Hills and Buckinghamshire, located on an old working farm in the Chiltern Hills. Their brewery shop not only sells their full range of beers, but also locally made ciders, wines, condiments along with a range of products such as beer bread, malt fudge, beer cheese and fruit cake that are all made using their own beer.',
      list: [{
        name: 'Session IPA',
        notes: 'Golden colour, citrus aroma and delicious mango flavours',
        percent: '3.9',
        colour: 'Gold'
      }, {
        name: 'Pale Ale',
        colour: 'Pale',
        notes: 'Designed as an aperitif or as a drink on its own. Relatively light in colour, with a creamy smoothness, it has a good definition on the palate and a refreshing, cleansing finish.',
        percent: '3.7',
      }, {
        name: 'Beechwood Bitter',
        notes: 'Mid amber colour with a rich butter-toffee aroma. Fruity and slightly nutty. Premium quality pale ale malt, with an extra proportion of crystal malt, and increased hops, gives this beer its renowned \'nutty\' flavour and punch.',
        percent: '4.3',
        colour: 'Amber'
      }]
    },
    '3Brewers': {
      name: '3Brewers',
      image: '3Brewers.jpeg',
      description: 'From St Albans, 3Brewers use local ingredients, including water from their very own borehole. Passionate about producing high quality beers with a minimum of fuss and pretense, 3Brewers are dedicated to providing radically better beer.',
      list: [{
        name: 'Ruby Mild',
        notes: 'Dark ruby in colour this smooth and creamy Mild combines a malty sweetness with a touch of liquorice bitterness to make a beautifully balanced ale.',
        percent: '3.6',
        colour: 'Dark'
      }, {
        name: 'Blonde',
        notes: 'Our superb new Blonde Ale is 4.2 % abv and light golden in colour. It\'s brewed with a big pile of Mosaic hops giving the beer a wonderful hoppy aroma and a refreshing smack of fruity citrussy flavours.',
        colour: 'Blonde',
        percent: '4.2',
      }, {
        name: 'Special',
        notes: 'Old school boozy. We use chocolate malt to give it a deep copper colour and the finest English hops give the ale a hint of berries. It’s a well balanced, smooth and moreish ale.',
        percent: '4.8',
        colour: 'Copper'
      }]
    },
    titanic: {
      name: 'Titanic',
      image: 'titanic.jpg',
      description: 'A bit further afield than a lot of the other breweries, Titanic is based in Stoke, Staffordshire and was founded in 1985. One of the favourite beers each time it is on is undoubtably Plum Porter, one of the few dark beers that everyone seems to agree can be drunk on a boiling hot summers day! A true success story that if you brew high quality beer, people will keep returning to the product, Titanic started out brewing only 7 barrels a year to now brewing over 4 million. One taste and you can see why.',
      list: [{
        name: 'Plum Porter',
        notes: 'This beer is dark strong and well rounded; the richness of such a rotund beer is brought to an even keel by the late addition of Goldings hops and natural plum flavouring',
        percent: '4.9',
        colour: 'Dark'
      }]
    },
    salopian: {
      name: 'Salopian',
      image: 'salopian.jpeg',
      description: 'Did you know that Salopian means “Of Shrewsbury”? At the time of founding (1995) it was the smallest brewery in the country not attached to a pub, with only a 2 barrel brewlength. This has now increased to 50 barrels due to continual success with their beers. Originally brewing a more traditional midlands style beer, they have bucked tradition and now brew a more modern, hop led style of beer.',
      list: [{
        name: 'Oracle',
        notes: 'A crisp, sparklingly sunflower gold ale with a striking hop profile. Dry and refreshing with a long citrus aromatic finish.',
        percent: '4.0',
        colour: 'Blonde'
      }]
    },
    rebellion: {
      name: 'Rebellion',
      image: 'rebellion.jpg',
      description: 'The story of the Rebellion Brewery starts in 1987 with the closure of the Marlow based Thomas Wethered Brewery. Two friends, Tim Coombes and Mark Gloyens, had gone through school together at Sir William Borlase, at a time when the old Wethered brewery was in full production with the smell and noise from the brewery clearly marking Marlow out to locals and visitors alike as a brewing town. Having discussed the idea to set up in business together earlier in their careers, and watching the old brewery close, the idea started to take shape of reviving Marlow tradition in 1991. After a couple of years of planning, research and failed attempts to secure small premises on the old brewery site, which was owned by Whitbreads, the Rebellion Brewery was established on the Rose Industrial Estate in Marlow Bottom in April 1993. In 1999 the brewery moved to its current premises on Bencombe Farm, occupying the old grainstore and other redundant farm buildings.',
      list: [{
        name: 'Roasted Nuts',
        notes: 'A deep ruby, complex and flavoursome beer, packed with intense and distinctive malt & hop character.',
        percent: '4.6',
        colour: 'Ruby Brown'
      }, {
        name: 'Barrell Roll',
        colour: 'Brown',
        notes: 'A Tawny bitter with American hops. Munich, double roasted crystal and chocolate malt give a rich tawny colour and lay a strong malty foundation. Simcoe and Mosaic hops add tropical and citrus fruit notes.',
        percent: '4.2',
      }]
    },
    'windsor-and-eton': {
      name: 'Windsor and Eton',
      image: 'windsor-and-eton.png',
      description: 'Windsor and Eton are already famous for many things. The castle, college, river, racecourse and of course the Royal connections. In 2010 the four of us wanted to add beer to the list. In fact we had a wild idea to make beer the top attraction. So we brought brewing back to the heart of Windsor. Eight years on we remain a ‘beer led’ brewery making outstanding beers of every single style and character. We offer a warm welcome to everyone from beer newcomer to expert, locals to visitors, the smallest club to the biggest pub and the local shop to the top supermarket. We are proud to be part of the revolution in beer making throughout the world. As founder members of the London Brewers Alliance, we have helped grow the number of the Capital’s breweries from 11 in 2010 to over 90 today. Together we are bringing great choice and quality to London drinkers.',
      list: [{
        name: 'Wasteland',
        notes: 'A double IPA with 10 different hops including the best of America and the new world. A beer to be savoured from the moment the aroma hits you until the last resinous drop. Be Careful',
        percent: '10.0',
        colour: 'IPA'
      }, {
        name: 'Independance',
        colour: 'Pale',
        notes: 'Independence is a 4% American Pale vigorously hopped and bursting with zesty fruity flavours.',
        percent: '4.0',
      }, {
        name: 'Knight of the Garter',
        notes: 'Golden Ale, brewed with American Amarillo whole leaf hops giving a distinctive fresh citrus aroma reminiscent of cut grapefruit.',
        percent: '3.8',
        colour: 'Gold'
      }, {
        name: 'Conqueror',
        notes: 'Conqueror is a rich, complex and very distinctive ale. Packed with 5 speciality malts for a wonderful combination of roasted flavours and unlike a stout, this beer packs a mighty punch of flavour derived from Summit and Cascade hops.',
        percent: '4.0',
        colour: 'Black IPA'
      }]
    },
    tring: {
      name: 'Tring',
      image: 'tring.jpg',
      description: 'The Tring Brewery Company was founded in 1992, reviving the traditional art of brewing in the picturesque West Hertfordshire market town of Tring. This was a town that, although steeped in brewing history, had been without a brewery for over 50 years. The locals were thirsty.',
      list: [{
        name: 'Jimbob',
        notes: 'Low in alcohol but plenty of flavour describes this little amber beer. The use of Dextrin malt provides body and the platform to balance out potent Australian Galaxy hops.',
        percent: '3.4',
        colour: 'Amber'
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    paradigm: {
      name: 'Paradigm',
      image: 'paradigm.jpg',
      description: 'Based in Sarratt in Herts we started brewing in early 2015. Hand-crafted real ales from beautiful sarratt village in hertfordshire, england. brewed traditionally using the finest hops and malted barley plus a lifelong passion for proper beer and just a hint of irony.',
      list: [{
        name: 'Reach Out',
        notes: 'A single hop ale made from Columbus in the boil. Deep gold colour, sweet initial taste, refreshing bitterness to follow',
        percent: '3.9',
        colour: 'Pale'
      }, {
        name: 'Blue Sky Thinking',
        notes: '',
        percent: '4.0',
        colour: 'Pale'
      }, {
        name: 'Win Win',
        notes: 'A best bitter using five malts. lovingly made with hops from Kent and the US with a bitterness that sneaks up and grabs you.',
        colour: 'Copper',
        percent: '4.2',
      }, {
        name: 'Heads up',
        notes: 'Mosaic Pale Ale. A very hoppy pale ale made with four different pale malts, exclusively using Mosaic hops throughout the brewing process to give the characteristic blueberry, and to a degree orange marmalady flavour',
        percent: '4.1',
        colour: 'Pale'
      }]
    },
    rudgate: {
      name: 'Rudgate',
      image: 'rudgate.png',
      description: 'Rudgate Brewery was established in 1992. The brewery is situated at the heart of Yorkshire in the Vale of York. The original brewery was situated in the former ammunition building of RAF Marston Moor Airfield which was home to the Halifax bombers that helped defend our country during World War 2. The name comes from the old Roman road of `Rudgate’ which runs through the airfield. This road led the Vikings along our vale defeating the Romans in their steps. This road and its history is what instigated the main theme of Vikings for the brewery.',
      list: [{
        name: 'Ruby Mild',
        notes: 'Multi-award-winning ruby mild ale Tasting Notes Nutty, deeply rich and satisfying ruby ale.',
        colour: 'Dark',
        percent: '4.4'
      }]
    },
    beerblefish: {
      name: 'Beerblefish',
      image: 'beerblefish.png',
      description: 'Launched their first beer in the autumn of 2015, started off brewing in a shared co-operative brewery in Bermondsey, and moved to their own premises in Edmonton, North London in late summer 2016. Beerblefish Brewing is committed to keeping its beers vegan. It is not necessary to include isinglass or other animal products in our beers - these additives do not add anything to the taste of the beer and simply stop some people from being able to enjoy it. Also conscious of the impact of brewing on our environment and are always looking for ways to reuse our by-products, including our spent grain and our used hops. Their name is also so much fun to say',
      list: [{
        name: 'Brett Only IPA',
        notes: '',
        colour: 'IPA',
        percent: 'TBC'
      }]
    },
    'new-river': {
      name: 'New River',
      image: 'new-river.png',
      description: 'New River Brewery was born out of a desire to enable drinkers to experience locally brewed, fresh and flavoursome craft beers. Opened in summer 2015 on the banks of the New River in Hoddesdon, Hertfordshire and have since been brewing a steady stream of delicious beer.',
      list: [{
        name: 'Lost River',
        percent: '4.0',
        colour: 'Blonde',
        notes: 'Named in celebration of our historic \'lost\' river, this dry, delicately hopped blonde is perfect company to chill out with on a lazy summer\'s afternoon.',
      }, {
        name: 'Isle of Rye',
        percent: '5.2',
        colour: 'Amber',
        notes: 'With the nearby Rye House located in an area formerly known as the Isle of Rye, this light amber rye pale ale has distinctive aromas of orange and mango, a smooth mouthfeel and a long peppery finish.'
      }, {
        name: 'Five Inch Drop',
        percent: '4.6',
        notes: 'Inspired by the New River\'s gentle gradient, Five-Inch Drop is a fine India Pale Ale made with selected malts and hops from the UK, New Zealand and the USA creating fresh citrus and pine needle flavours.',
        colour: 'Blonde'
      }]
    },
    farr: {
      name: 'Farr',
      image: 'farr.jpeg',
      description: 'Farr Brew was founded on the principles of creating great tasting real ales brewed with craft and a commitment to quality. The vision has seen their beers stocked in a great and growing range of top quality beer shops and brilliant pubs. We also regularly attend events across Hertfordshire selling our wares and offering free samples to quench the thirsts of the masses all served up by ‘The Best Bar Staff, by Farr’. 2015 was a busy year for Farr Brew; we supplied beer to the St Albans Beer Festival and CAMRA’s AGM. Our ‘Most Potent Porter, by Farr’ was chosen by acclaimed beer writer Roger Protz to be featured in a private tasting event.',
      list: [{
        name: 'Black Listed',
        percent: '4.5',
        notes: 'Brewed with three types of malt and a considered combination of homegrown British & imported American hops for a well rounded, punchy flavour.',
        colour: 'Dark'
      }]
    }, 
    haresfoot: {
      name: 'Haresfoot',
      image: 'harsefoot.jpeg',
      description: 'Beer meticulously brewed using the finest hops and malted barley, haresfoot resurrects our brewing heritage, being the first berkhamsted brewery since 1914.',
      list: [{
        name: 'Lock Keeper',
        percent: '3.9',
        notes: 'A traditional mid-dark copper sweet session bitter using all English hops and malted barley.',
        colour: 'Cooper'
      }, {
        name: 'New Moon',
        notes: 'Not to be confused with the full moon, that makes a regular apperance at the 7\'s',
      }, {
        name: 'Dragons Bain',
        notes: 'A flavoursome red beer from one of our local brewers. Can you tame the dragon',
        colour: 'Red',
        perecent: '4.5'
      }]
    },
    buntingford: {
      name: 'Buntingford',
      image: 'buntingford.jpeg',
      description: 'Well where do you start? Back in the 90’s I guess when a young chap called Steve started brewing beer for a living, eventually building a small brewery in Buntingford, and lo, Buntingford Ales were born! Steve and his erstwhile partner and brewster Catherine moved to the current site, at Greys on the top of the hill at Therfield Heath, near Royston, back in the early 2000’s. After brewing awesome ales for a decade and a half, winning numerous awards including the incredible feat of a Best Bitter Gold and CBoB Silver for Twitchell,  and Category Silver for Golden Ales  for Polar Star in the 2013 Champion Beer of Britain competition, they decided to leave brewing to concentrate on their pub, The Brown Bear at Braughing, where you’ll find a warm welcome, great beer and food, at their lovely, cosy, traditional inn.',
      list: [{
        name: 'Sunstar',
        percent: '4.1',
        notes: 'Bright golden with a good hop kick',
        colour: 'Gold'
      }]
    },
    amberales: {
      name: 'Amber Ales',
      image: 'amber-ale.png',
      description: 'Brewed for the few, from our tiny five barrel plant in the Amber Valley, Derbyshire, we specialise in full-flavoured traditionally styled ale with a modern twist. We brew beer that we like to drink and we have been fortunate to win many accolades for our beer both locally and nationally.',
      list: [{
        name: 'Ripper',
        notes: 'Rye IPA.Spicy golden ale with a touch of rye, featuring a ton of columbus hops and dry hopped with citra and cascade for a citrus-packed flavour explosion.',
        colour: 'Gold',
        percent: '4.8'
      }]
    },
    'popes-yard': {
      name: 'Popes Yard',
      image: 'popes-yard.png',
      description: 'Small batches of increasingly wild beers brewed in Frogmore Mill, Apsley',
      list: [{
        name: 'Quatermaster',
        notes: 'Best Bitter - Brewed with a touch of amber and crystal malt, British Bramling Cross and Australian Galaxy hops. Four malts, four hop additions and 4.4% make this one of our most popular traditional beers.',
        colour: 'Copper',
        percent: '4.4'
      }, {
        name: 'King Street Dusk',
        notes: 'Rich copper-coloured lager with subtle notes of toffee, biscuit and dark fruit balanced with a herbal bitterness and aroma from noble hops.',
        colour: 'Dark',
        percent: '4.2'
      }, {
        name: 'Lacerta US',
        notes: 'Golden, hazy Pale Ale with aromas of pineapple, nectarine and pear.',
        colour: 'Pale',
        percent: '3.9'
      }]
    }
  }
}

export const getBreweryDetails = (name) => {
  if (brewies.beer[name]) {
    return { type: 'beer', data: brewies.beer[name] }
  }
  return { type: 'cider', data: brewies.cider[name] };
}

export const getAllBeers = () => {
  const beerArray = []
  Object.keys(brewies.beer).forEach(key => {
    brewies.beer[key].list.forEach(beer => {
      beerArray.push({ ...beer, id: key })
    }
    )
  });
  return beerArray;
}
export const getAllCiders = () => {
  const ciderArray = []
  Object.keys(brewies.cider).forEach(key => {
    brewies.cider[key].list.forEach(cider => {
      ciderArray.push({ ...cider, id: key })
    }
    )
  });
  return ciderArray;
}

export const getBeerBrewerys = () => brewies.beer;

export const getCiderBrewerys = () => brewies.cider;

export const getGinDistills = () => brewies.gin;