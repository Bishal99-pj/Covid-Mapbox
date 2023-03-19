function updateMap() {
  console.log("Updating Map with Real Time Data.....");
  fetch("/data.json") // returns a promise
    .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp.data);
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        if(cases > 255){
          color = "red";
        }
        else{
          color = `rgb(${cases},0,0)`;
        }
        // Mark on the World Map
        const marker = new mapboxgl.Marker({
          draggable: false,
          color: color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}


let interval = 2000;
setInterval(updateMap(), interval);
