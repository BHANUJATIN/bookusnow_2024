import axios from "axios";

// Function to make a GET request to the provided URL with optional query parameters
async function makeRequest(url, params = {}) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error making request:", error);
    throw error; // Re-throwing the error for handling at a higher level
  }
}

export default makeRequest;
