function formatDate(dateString) {
  // Parse the date string into a Date object
  const date = new Date(Date.parse(dateString));

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

  return formattedDate;
}

export default formatDate;
