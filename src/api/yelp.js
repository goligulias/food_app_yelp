import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer ' + 'eHU-QGv8aME6ZaJ8G5VlY2lwTz--hDyQISLa7OfgqisiHh2v36-vgWbgUMkgojPU5KidBBulvya75MWsDGl6O95dgB0q6EgVKU7UvG3-MFC2qFiTQRIMrLthPuY-ZHYx'
  }
});