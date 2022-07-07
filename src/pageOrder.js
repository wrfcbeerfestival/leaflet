import HomePage from './Pages/HomePage';
import BeerFestChairman from './Pages/BeerFestChairman';
import BeerList from './Pages/BeerList';
import CiderList from './Pages/CiderList';
import Guide from './Pages/Guide';
import Contents from './Pages/Contents';
import Advert from './Pages/Advert';
import Chairman from './Pages/Chairman';
import Recruitment from './Pages/Recruitment';
import Picker from './Pages/Picker';
import Merc from './Pages/Merc';
import Camra from './Pages/Camra';
import FancyDressRugby from './Pages/FancyDressRugby'
import GreeneKing from './Pages/GreeneKing';
import Food from './Pages/Food';

export const mainPageOrdering = [{
  name: '/home',
  prettyName: 'Cover page',
  Component: HomePage
}, {
  name: '/beer-fest-chairman',
  prettyName: 'Beer Festival Chairman - Jon McClennon',
  Component: BeerFestChairman
},
{
  name: '/contents',
  prettyName: 'Contents',
  Component: Contents
},
{
  name: '/guide',
  prettyName: 'Guide to WRFC Beer & Cider Festival',
  Component: Guide
}, {
  name: '/beer',
  prettyName: 'Beer List',
  Component: BeerList
}, {
  name: '/rugby-club-chairman',
  prettyName: 'WRFC Chairman - Martin Lee',
  Component: Chairman
}, {
  name: '/recruitment',
  prettyName: 'Fancy taking up rugby?',
  Component: Recruitment
},{
  name: '/greene-king',
  prettyName: 'Greene King',
  Component: GreeneKing
}, {
  name: '/fancy-dress-rugby',
  prettyName: 'Saturday Fancy Dress Rugby',
  Component: FancyDressRugby
},{
  name: '/cider',
  prettyName: 'Cider List',
  Component: CiderList
}, {
  name: '/wrfc-venue-hire',
  prettyName: 'WRFC Bar & Coffee House',
  Component: Advert,
  options: {
    image: '/wrfc-venue-hire.jpg'
  }
}, {
  name: '/regent-club',
  prettyName: 'Regent Club',
  Component: Advert,
  options: {
    image: '/regent-advert.jpg'
  }
}, 
{
  name: '/food',
  prettyName: 'Food Menu',
  Component: Food
},{
  name: '/merc',
  prettyName: 'Get your merchandise!',
  Component: Merc 
}, {
  name: '/camra',
  prettyName: 'CAMRA',
  Component: Camra
}, {
  name: '/picker',
  prettyName: 'Need help picking? Use our Picker tool',
  Component: Picker
}]

export const findPage = (pageName) => {
  const selectedPage = mainPageOrdering.find((page) => {
    return page.name === pageName;
  })
  if (selectedPage) {
    return selectedPage;
  }
}

export const getPage = (currentPage, forward) => {
  let currentPageIndex;
  mainPageOrdering.find((page, index) => {
    if (page.name === currentPage) {
      currentPageIndex = index;
      return true;
    };
    return false;
  })

  return forward ? mainPageOrdering[currentPageIndex + 1] : mainPageOrdering[currentPageIndex - 1];
}
