mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNnYXRlczAzIiwiYSI6ImNtbm94N2hnYjIxaGEycXB0MjQ2ajV3c2UifQ.KTGx-0S7nnLj5ZyknIUkVw';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/chrisgates03/cmnoytwpa002g01qo9x6za0su',
        center: [-70.68958, 42.21140], 
        zoom: 7
      });
map.on('load', () => {
const layers = [
  'Lighthouse'
];
const colors = [
  '#e7de32'
];

const legend = document.getElementById('legend');

layers.forEach((layer, i) => {
  const color = colors[i];
  const item = document.createElement('div');
  const key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  const value = document.createElement('span');
  value.innerHTML = `${layer}`;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
});

});
