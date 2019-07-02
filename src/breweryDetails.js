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
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    chiltern: {
      name: 'Chiltern',
      image: 'chiltern.jpeg',
      description: 'The oldest independent brewery in the Chiltern Hills and Buckinghamshire, located on an old working farm in the Chiltern Hills. Their brewery shop not only sells their full range of beers, but also locally made ciders, wines, condiments along with a range of products such as beer bread, malt fudge, beer cheese and fruit cake that are all made using their own beer.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Porter'
      }]
    },
    '3Brewers': {
      name: '3Brewers',
      image: '3Brewers.jpeg',
      description: 'From St Albans, 3Brewers use local ingredients, including water from their very own borehole. Passionate about producing high quality beers with a minimum of fuss and pretense, 3Brewers are dedicated to providing radically better beer.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    vale: {
      name: 'Vale',
      image: 'vale.png',
      description: 'Located in Brill, Vale Brewery is a firm festival favourite, having featured for the last 5 years in the  WRFC Beer Festival. Brewing since 1995, Vale has a core range of 8 different beers ranging from golden to porters, along with a range of specialist seasonal specials.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    abc: {
      name: 'ABC',
      image: 'abc.jpg',
      description: 'Sister brewery to Vale, Aylsebury Brewhouse Co. was born in 2011 and only brew specialty beers. That means that once they’re drunk, they’re gone. That means that what you’re sampling today is a limited edition! Make sure you get some before it vanishes.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    titanic: {
      name: 'Titanic',
      image: 'titanic.jpg',
      description: 'A bit further afield than a lot of the other breweries, Titanic is based in Stoke, Staffordshire and was founded in 1985. One of the favourite beers each time it is on is undoubtably Plum Porter, one of the few dark beers that everyone seems to agree can be drunk on a boiling hot summers day! A true success story that if you brew high quality beer, people will keep returning to the product, Titanic started out brewing only 7 barrels a year to now brewing over 4 million. One taste and you can see why.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    salopian: {
      name: 'Salopian',
      image: 'salopian.jpeg',
      description: 'Did you know that Salopian means “Of Shrewsbury”? At the time of founding (1995) it was the smallest brewery in the country not attached to a pub, with only a 2 barrel brewlength. This has now increased to 50 barrels due to continual success with their beers. Originally brewing a more traditional midlands style beer, they have bucked tradition and now brew a more modern, hop led style of beer.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    dbc: {
      name: 'DBC',
      image: 'dbc.jpg',
      description: 'Dorset Brewing Company Limited was founded in 1996 along the Jurassic Coast – you can probably tell this from the logo of a few of their beers. Brewing a range of core beers DB have always been a welcome addition to the WRFC beer festival line up. A pint of Chesil always slips down nicely.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    oakham: {
      name: 'Oakham',
      image: 'oakham.jpeg',
      description: 'Oakham ales closed up shop in 1995, but was resurrected on Friday 13th of all days! Luckily this doesn’t seem to have had any adverse effects, with awards pouring through their doors every year, even brewing the champion golden ale at the Great British Beer Festival (Citra).',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    rebellion: {
      name: 'Rebellion',
      image: 'rebellion.jpg',
      description: 'The story of the Rebellion Brewery starts in 1987 with the closure of the Marlow based Thomas Wethered Brewery. Two friends, Tim Coombes and Mark Gloyens, had gone through school together at Sir William Borlase, at a time when the old Wethered brewery was in full production with the smell and noise from the brewery clearly marking Marlow out to locals and visitors alike as a brewing town. Having discussed the idea to set up in business together earlier in their careers, and watching the old brewery close, the idea started to take shape of reviving Marlow tradition in 1991. After a couple of years of planning, research and failed attempts to secure small premises on the old brewery site, which was owned by Whitbreads, the Rebellion Brewery was established on the Rose Industrial Estate in Marlow Bottom in April 1993. In 1999 the brewery moved to its current premises on Bencombe Farm, occupying the old grainstore and other redundant farm buildings.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    'windsor-and-eton': {
      name: 'Windsor and Eton',
      image: 'windsor-and-eton.png',
      description: 'Windsor and Eton are already famous for many things. The castle, college, river, racecourse and of course the Royal connections. In 2010 the four of us wanted to add beer to the list. In fact we had a wild idea to make beer the top attraction. So we brought brewing back to the heart of Windsor. Eight years on we remain a ‘beer led’ brewery making outstanding beers of every single style and character. We offer a warm welcome to everyone from beer newcomer to expert, locals to visitors, the smallest club to the biggest pub and the local shop to the top supermarket. We are proud to be part of the revolution in beer making throughout the world. As founder members of the London Brewers Alliance, we have helped grow the number of the Capital’s breweries from 11 in 2010 to over 90 today. Together we are bringing great choice and quality to London drinkers.',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    'hairy-dog': {
      name: 'Hairy Dog',
      image: 'hairy-dog.jpeg',
      description: 'Hairy Dog Brewery, the heart of Sussex craft beer. We brew at More House Farm overlooking the South Downs National Park and our beers reflect our surroundings. Naturally our beer range includes the classics as well an ever growing range of new and exciting brews encompassing the passion and considerable expertise of head brewer Russell Lee. Take a look at his profile on the team page to learn why he is our very own beer hero. We use ingredients from Sussex wherever possible and believe wholeheartedly in sustainability. We think this gives our beer a unique position amongst the many craft breweries in this beautiful county of ours. Our beer also tastes absolutely fantastic. From the bright and crisp Pure Bred pilsner lager with its distinctly summery taste to our Far Fetched pale ale with its aromatic English hop taste, Russell’s brilliance shines brightly within each one',
      list: [{
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    tring: {
      name: 'Tring',
      image: 'tring.jpg',
      description: 'The Tring Brewery Company was founded in 1992, reviving the traditional art of brewing in the picturesque West Hertfordshire market town of Tring. This was a town that, although steeped in brewing history, had been without a brewery for over 50 years. The locals were thirsty.',
      list: [{
        name: 'Wrens',
        notes: 'An extra pale malt base provides the ideal clean canvas for the spectacular US big hitters Mosaic, Citra and Simcoe hops. Expect pungent tropical, mango and citrus flavours.',
        percent: '4',
        colour: 'Pale'
      }, {
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }]
    },
    'paradigm': {
      name: 'Paradigm',
      image: 'paradigm.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      list: [{
        name: 'Wrens',
        notes: 'An extra pale malt base provides the ideal clean canvas for the spectacular US big hitters Mosaic, Citra and Simcoe hops. Expect pungent tropical, mango and citrus flavours.',
        percent: '4',
        colour: 'Pale'
      }, {
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
        notes: 'South African Hop Exclusive for Clint. Meaty tropical festival, with hints of Blueberry, goosebury, melon , guava orange and plum. Offspring of the popular Bitter Boer and Zulu Tropic from last years festival in Watford. ',
        percent: '5.2',
      }, {
        name: 'Pale four',
        notes: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.',
        percent: '4.6',
        colour: 'Pale'
      }, {
        name: 'Wrens',
        notes: 'An extra pale malt base provides the ideal clean canvas for the spectacular US big hitters Mosaic, Citra and Simcoe hops. Expect pungent tropical, mango and citrus flavours.',
        percent: '4',
        colour: 'Pale'
      }, {
        name: 'Fanny Ebbs',
        notes: 'Amazingly crisp with very low bitterness and late citrus hop aroma from a combination of Saaz and Cascade varieties.',
        percent: '3.9',
        colour: 'Blonde'
      }, {
        name: 'Responsably', colour: 'Unknown',
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