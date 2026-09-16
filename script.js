var map = L.map('map').setView([4.611765, -74.083418], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([4.611765, -74.083418]).addTo(map);
var polygon = L.polygon([
    [4.606905, -74.083226],
    [4.608847, -74.081729],
    [4.609123, -74.082339],
    [4.607288, -74.083696],
]).addTo(map);