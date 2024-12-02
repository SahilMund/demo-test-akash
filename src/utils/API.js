const apiCall = async ( url, method = "GET", headers = {}, body = {}, params = {} ) => {
  try {
    console.log("urllll",url,body);
    
    // Build query string for GET requests if `params` are provided
    const queryString = new URLSearchParams(params).toString();
    const requestUrl = queryString ? `${url}?${queryString}` : url;

    // Set default headers
    const defaultHeaders = {
      "Content-Type": "application/json",
      ...headers,
    };

    // Prepare the fetch options
    const options = {
      method,
      headers: defaultHeaders,
    };

    // Add body for POST/PUT requests
    if (method !== "GET" && method !== "HEAD") {
      options.body = JSON.stringify(body);
    }

    // Perform the fetch request
    
    const response = await fetch(requestUrl, options);
    
    
    // Check if the response is successful
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API call failed");
    }
    
    // Parse the JSON response
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error.message);
    throw new Error("Network error or server is unreachable");
  }
};

export default apiCall;
