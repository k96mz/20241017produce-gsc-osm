const geojsonArea = require('@mapbox/geojson-area');

const geojson = {
  type: 'Polygon',
  coordinates: [
    [
      [-73.981149, 40.768884],
      [-73.961149, 40.768884],
      [-73.961149, 40.748884],
      [-73.981149, 40.748884],
      [-73.981149, 40.768884],
    ],
  ],
};

const area = geojsonArea.geometry(geojson);
console.log(`Area: ${area} square meters`);
