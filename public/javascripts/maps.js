var mymap = L.map('main_map').setView([4.660423, -74.090919], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.marker([4.660523, -74.090619]).addTo(mymap);
L.marker([4.660723, -74.090919]).addTo(mymap);
L.marker([4.660323, -74.090819]).addTo(mymap);