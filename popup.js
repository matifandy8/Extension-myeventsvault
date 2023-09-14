const btnfetch = document.getElementById("fetchEvents")

btnfetch.onclick = function () {
  console.log("click")
  fetchAndDisplayEvents()
}


function fetchAndDisplayEvents() {
  console.log('Fetching events...');
  fetch('https://api-events-yj5s.onrender.com/events')
    .then((response) => response.json())
    .then((data) => {
      const eventList = document.getElementById('eventList');
      eventList.innerHTML = ''; // Clear previous event list

      if (data && Array.isArray(data)) {
        data.forEach((event) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${event.name} - ${event.date}`;
          eventList.appendChild(listItem);
        });
      } else {
        eventList.textContent = 'No events found.';
      }
    })
    .catch((error) => {
      console.error('Error fetching events:', error);
      const eventList = document.getElementById('eventList');
      eventList.textContent = 'An error occurred while fetching events.';
    });
}

