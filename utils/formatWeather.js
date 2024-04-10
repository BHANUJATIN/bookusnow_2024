function formatWeather(weatherString) {
    // Check if weatherString is not undefined and is a string
    if (typeof weatherString === 'string') {
      // Replace the space with a comma, add an apostrophe before 'C', and add 'C' at the end
      return weatherString.replace(' ', ', ').replace('C', "'C");
    } else {
      // Handle the case where weatherString is not a string or is undefined
      return 'Invalid input';
    }
  }
export default formatWeather;
