// {
//   tring: {
//     name: {
//       rating,
//       notes
//     }
//   }
// }


import get from 'lodash/get';
const getItem = () => {

}

const setItem = () => {

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

export const setNotes = () => {

}