import HomePage from './Pages/HomePage';
import BeerFestChairman from './Pages/BeerFestChairman';
import BeerList from './Pages/BeerList';
import CiderList from './Pages/CiderList';
import Guide from './Pages/Guide';
import Contents from './Pages/Contents';

export const mainPageOrdering =  [{
  name: '/home',
  prettyName: 'Cover page',
  component: HomePage
}, {
  name: '/beer-fest-chairman',
  prettyName: 'Beer Festival Chairman',
  component: BeerFestChairman
},
{
  name: '/contents',
  prettyName: 'Contents',
  component: Contents
},
{
  name: '/guide',
  prettyName: 'Guide to WRFC Beer & Cider Festival',
  component: Guide
}, {
  name: '/beer',
  prettyName: 'Beer List',
  component: BeerList
}, {
  name: '/cider',
  prettyName: 'Cider List',
  component: CiderList
}]

export const findPage = (pageName) => {
  const selectedPage = mainPageOrdering.find((page) => {
    return page.name === pageName;
  })
  if (selectedPage) {
    return selectedPage.component;
  }
}

export const getPage = (currentPage, forward) => {
  let currentPageIndex;
  const selectedPage = mainPageOrdering.find((page, index) => {
    if (page.name === currentPage) {
      currentPageIndex = index;
      return true;
    };
  })

  return forward ? mainPageOrdering[currentPageIndex + 1]: mainPageOrdering[currentPageIndex-1];
}
