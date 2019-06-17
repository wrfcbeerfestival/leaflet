export const getImage = (image) => {
  return process.env.NODE_ENV === 'production' ? '/leaflet' + image : image;
}