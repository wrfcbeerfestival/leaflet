import HomePage from './Pages/HomePage';
import BeerFestChairman from './Pages/BeerFestChairman';
import BeerList from './Pages/BeerList';
import CiderList from './Pages/CiderList';

const mainPageOrdering =  [{
  name: '/home',
  component: HomePage
}, {
  name: '/chairman',
  component: BeerFestChairman
}, {
  name: '/beer',
  component: BeerList
}, {
  name: '/cider',
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
