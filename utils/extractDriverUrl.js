function extractDriveUrl(originalUrl) {
    // Regular expression to match the file ID
    var fileIdRegex = /\/file\/d\/([^\/]+)\//;
  
    // Extract the file ID from the original URL
    var match = originalUrl.match(fileIdRegex);
  
    // Check if a match is found
    if (match && match[1]) {
      // Construct the new URL with the extracted file ID
      var fileId = match[1];
      var newUrl = 'https://drive.lienuc.com/uc?id=' + fileId;
      
      return newUrl;
    } else {
      // If no match is found, return null or handle the error as needed
      return null;
    }
}

export default extractDriveUrl;
