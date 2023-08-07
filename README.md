# weatherAppTOP

The Odin Project: Project Weather App

## What I've learned

- Working with SVG
- Using form validation with javaScript before submitting
- Working with fetch, promises, asynchronous

## Requirement

- Weather forecast site using the weather API
- Search for a specific location
- Toggle
  - displaying the data in Fahrenheit or Celsius
  - displaying the date in Kilometers or Miles
  - displaying the data in Millimeters or Inches
  - Optional: themes
- Change the look of the page based on the data, maybe by changing the color of the background or by adding images that describe the weather (Could even use the Giphy API to find appropriate weather-related gifs and display them).
- Try to become comfortable with both Promises and Async|Await
- Free tier WeatherAPI will limit the forecast data available to 3 days. So keep in mind while making design choices for the forecast display

1. Set up a blank HTML document with the appropriate links to your JavaScript and CSS files
2. Write the functions that hit the API. You're going to want functions that can take a location and return the weather data for that location. For now, just `console.log()` the information
3. Write the functions that process the JSON data you're getting from the API and return and object with only the data you require for your app
4. Set up a simple form that will let users input their location and will fetch the weather info (still just `console.log()` it)
5. Display the information on your webpage!
6. Add any styling you like!
7. Optional: Add a 'loading' component that displays from the time the form is submitted until the information comes back from the API. Use DevTools to test for low-end devices
8. Push that baby to github and share you solution

## Ideas to implement

- Using async|await
- Forecast for the next 3 days
