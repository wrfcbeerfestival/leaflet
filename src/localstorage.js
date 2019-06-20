// {
//   tring: {
//     name: {
//       rating,
//       notes
//     }
//   }
// }


import get from 'lodash/get';

export const clearLocalStorage = () => {
  localStorage.clear('wrfc-leaflet');
}

export const clearLocalStorageForBrewery = (brewery) => {
  let data = JSON.parse(localStorage.getItem('wrfc-leaflet'));
  delete data[brewery];
  localStorage.setItem('wrfc-leaflet', JSON.stringify(data));
}

export const setRating = (brewery, name, rating) => {
  let data = JSON.parse(localStorage.getItem('wrfc-leaflet'));
  if (!data) {
    data = {

    }
  }
  if (data[brewery]) {
    if (data[brewery][name]) {
      data[brewery][name] = {
        ...data[brewery][name],
        rating
      }
    } else {
      data[brewery][name] = {
        rating
      }
    }
  } else {
    data[brewery] = {};
    data[brewery][name] = {
       rating
    }
  }
  localStorage.setItem('wrfc-leaflet', JSON.stringify(data));
}

export const getRating = (brewery, name) => {
  const data = JSON.parse(localStorage.getItem('wrfc-leaflet'));
  return get(data, `${brewery}.${name}.rating`, 0);
}

export const getNotes = (brewery, name) => {
  const data = JSON.parse(localStorage.getItem('wrfc-leaflet'));
  return get(data, `${brewery}.${name}.notes`, '');
}

export const setNotes = (brewery, name, notes) => {
  let data = JSON.parse(localStorage.getItem('wrfc-leaflet'));
  if (!data) {
    data = {

    }
  }
  if (data[brewery]) {
    if (data[brewery][name]) {
      data[brewery][name] = {
        ...data[brewery][name],
        notes
      }
    } else {
      data[brewery][name] = {
        notes
      }
    }
  } else {
    data[brewery] = {};
    data[brewery][name] = {
       notes
    }
  }
  localStorage.setItem('wrfc-leaflet', JSON.stringify(data));
}