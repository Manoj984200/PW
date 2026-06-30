// 1. Call the API (Order the package)
fetch('https://api.open-meteo.com/v1/forecast?latitude=28.25&longitude=75.63&current_weather=true')

  // 2. The first .then() - The box has arrived!
  .then(response => {
    console.log("1. Box received!");
    return response.json(); // Unpacking the box... (returns a Promise)
  })

  // 3. The second .then() - The box is open!
  .then(data => {
    console.log("2. Box unpacked! Here is the data:", data);
    
    // Let's grab just the temperature from the data
    const currentTemp = data.current_weather.temperature;
    console.log(`The current temperature is ${currentTemp}°C`);
  })

  // 4. .catch() is used just in case the delivery fails (e.g., no internet)
  .catch(error => {
    console.error("Something went wrong with the delivery:", error);
  });