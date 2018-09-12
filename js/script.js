window.onload = () => {
	let map;
	const ourOptions = {
		zoom: 18,
		mapTypeId: "roadmap"
	};

	map = new google.maps.Map(document.getElementById('map'), ourOptions)

	const geolocationSuccess = (position) => {
			const location = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

			map.setCenter(location);

			const marker = new google.maps.Marker({
			    position: location,
			    map: map,
			    title: 'Your current position!'
			});
		}
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(geolocationSuccess);
	} 
}