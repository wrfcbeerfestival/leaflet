
export const getImage = (image) => {
  image = image.substr(0,1) === '/' ? image : '/' + image;
  return process.env.NODE_ENV === 'production' ? '/leaflet' + image : image;
}