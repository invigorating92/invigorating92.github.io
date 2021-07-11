


function onGeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const API_KEY ="c66e4f662a215cae0edf39edae2f5f38";
    console.log('you live in', latitude, longitude);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    console.log(url);
}
function onGeoError(){
    alert("Can't find you and no weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)