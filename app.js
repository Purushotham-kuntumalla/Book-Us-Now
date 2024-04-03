// Define the URL for fetching event data
const URL = 'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco';

// Define an asynchronous function to fetch event data
const fetchEventData = async () => {
    try {
        // Fetch data from the defined URL
        const response = await fetch(URL);
        // Extract JSON data from the response
        const data = await response.json();

        // Get the container element for event cards
        const eventContainer = document.getElementById('eventCards');
        
        // Loop through each event data and create card elements dynamically
        data.events.forEach((event,index) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            
            // Define an array of image URLs for event cards
            const imageArr = [
                 "https://img.freepik.com/premium-photo/party-people-enjoy-concert-by-dancing-nightclub-party-created-with-generative-ai-technology_67092-4714.jpg",
                "https://thumbs.dreamstime.com/b/art-tropical-beach-night-party-56404821.jpg",
                "https://i.pinimg.com/736x/91/ef/f3/91eff36aa5b830a0e83cce8535133f43.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpsIgpyt5k8ryHK5F96Jj6BbyUeL8rB9LpGrHcOeJWexvUTZnCdTFjwZtSaAk5t9K1jg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kj6afhB59_IdsRvOx0VpaAN3-ZW0ayRlumgau0_IJaeZd2_Qs0QmpGuei2TDq1L6TuU&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0HKLJIoEfzQoy0ViAJKTYMZ9kfNqvrW5FPJXZz-vjg&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLbVvAMr8cibsPa94O-9tLNPOmr7TRBhCQRw0qZnpfijs9UVJ1v1EQARTjNBsYC3VWlw&usqp=CAU",
                "https://img.freepik.com/free-photo/crowd-people-are-standing-club-with-pink-purple-lights_1340-32809.jpg"
            ];

            // Create an image element for the card
            const cardImage = document.createElement('img');
            cardImage.className = 'card-img-top';
            cardImage.src = imageArr[index];
            cardImage.alt = 'no image'
            cardDiv.appendChild(cardImage);

            // Create a div for the body of the card
            const cardBody = document.createElement('div');
            cardBody.className = 'body';

            // Create a div for event name and city
            const nameAndCity = document.createElement('div');
            nameAndCity.className = 'nameAndCity';
            const eventName = document.createElement('p');
            eventName.className = 'card-title';
            eventName.textContent = event.eventName;

            const cityName = document.createElement('p');
            cityName.textContent = event.cityName;
            nameAndCity.appendChild(eventName);
            nameAndCity.appendChild(cityName);

            // Create a div for date, weather, and distance
            const dateAndWeather = document.createElement('div');
            dateAndWeather.className = 'dateAndWeather';
            const date = document.createElement('p');
            date.className = 'date'
            date.textContent = new Date(event.date).toLocaleDateString();

            const weather = document.createElement('p');
            weather.textContent = event.weather;

            const distanceKm = document.createElement('p');
            distanceKm.textContent = event.distanceKm + ' km';

            dateAndWeather.appendChild(date);
            dateAndWeather.appendChild(weather);
            dateAndWeather.appendChild(distanceKm);

            cardBody.appendChild(nameAndCity);
            cardBody.appendChild(dateAndWeather);

            cardDiv.appendChild(cardBody);
            eventContainer.appendChild(cardDiv);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call fetchEventData after a delay of 1000 milliseconds
setTimeout(fetchEventData, 1000);

// Define variables for DOM elements
const eventsList = document.getElementById('events-list');
const loadingSpinner = document.getElementById('loading-spinner');
let page = 1;
let fetching = false;
const upcomingEve = document.getElementById('upcomingEve');

// Define a function to fetch events
function fetchEvents() {
  // If already fetching, return
  if (fetching) return;
  fetching = true;
  // Display loading spinner
  loadingSpinner.style.display = 'block';

  // Fetch events data from the API
  fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`)
    .then(response => response.json())
    .then(dataEve => {
      // Loop through each event data and create event cards dynamically
      dataEve.events.forEach((event, index) => {
        
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        
        // Define an array of image URLs for event cards
        const imagesArray = [
          'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D',
          "https://www.go-jugendreisen.de/pictures/reise_galerie/326/img_1245-6619.jpg",
          "https://media.istockphoto.com/id/1478375497/photo/friends-dancing-at-the-festival.jpg?s=170667a&w=0&k=20&c=CivkEaKZI-AV0um0obN0wxhzB4-zZshk61kPrl-I9WM=",
          "https://images-r2.thebrag.com/rs/uploads/2020/05/SITG_2019_Atmosphere_AimeeCatt-6-2-1.jpg",
          "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
          "https://burst.shopifycdn.com/photos/crowd-of-people-watching-fireworks-display.jpg?width=1000&format=pjpg&exif=0&iptc=0",
          "https://burst.shopifycdn.com/photos/festival-of-lights-float.jpg?width=1000&format=pjpg&exif=0&iptc=0",
          "https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29jaWFsJTIwZXZlbnRzfGVufDB8fDB8fHww",
          "https://t3.ftcdn.net/jpg/01/29/35/46/360_F_129354660_VsJmGrmECkOS13aUe77E3VQ4ll4Smnn8.jpg",
          "https://us.123rf.com/450wm/tsuguliev/tsuguliev2208/tsuguliev220800030/190927258-a-crowded-concert-hall-with-scene-stage-orange-and-yellow-lights-rock-show-performance-with-people.jpg?ver=6",
          "https://us.123rf.com/450wm/tsuguliev/tsuguliev2110/tsuguliev211000519/176072687-a-crowded-concert-hall-with-scene-stage-green-lights-rock-show-performance-with-people-silhouette.jpg?ver=6",
          "https://us.123rf.com/450wm/mudkung/mudkung2005/mudkung200501420/147958164-crowd-with-raised-hands-at-concert-festival.jpg?ver=6",
          "https://us.123rf.com/450wm/jovicavarga/jovicavarga1908/jovicavarga190800199/131224193-concert-crowd-attending-a-concert-people-silhouettes-are-visible-backlit-by-stage-lights-raised.jpg?ver=6",
        ]
        
        // Create an image element for the event card
        const image = document.createElement('img');
        image.src = imagesArray[index];
        eventCard.appendChild(image);

        // Create a div for the body of the card
        const body = document.createElement('div');
        body.className = 'cardbody';
        
        // Create a container for event details
        const details = document.createElement('div');
        details.classList.add('event-details');
        body.appendChild(details)
        
        // Create and append event name
        const div1 = document.createElement('div')
        div1.className = 'div1'
        const eventName = document.createElement('h6');
        eventName.textContent = event.eventName;
        div1.appendChild(eventName);
        details.appendChild(div1)
        // Create and append event city
        const city = document.createElement('p');
        city.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${ event.cityName}`;
        div1.appendChild(city);

        // Create and append event date
        const date = document.createElement('p');
        date.textContent = new Date(event.date).toLocaleDateString();
        div1.appendChild(date);
        const div2 = document.createElement('div')
        div2.className = 'div2'
        details.appendChild(div2)
        // Create and append event weather
        const weather = document.createElement('p');
        weather.textContent = event.weather;
        div2.appendChild(weather);

        // Create and append event distance
        const distance = document.createElement('p');
        distance.textContent = event.distanceKm;
        div2.appendChild(distance);

        // Append details container to the event card
        eventCard.appendChild(details);

        // Append event card to the eventsList
        eventsList.appendChild(eventCard);
      });
      page++; // Increment page for next fetch
    })
    .catch(error => console.error('Error fetching events:', error))
    .finally(() => {
      // Reset fetching flag and hide loading spinner
      fetching = false;
      loadingSpinner.style.display = 'none';
    });
}

// Initial fetch of events
setTimeout(fetchEvents,500);

// Detect scroll to bottom and fetch more events
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchEvents();
  }
});
