(async function(window, document) {
  // Your API endpoint
  const API_URL = 'https://salesfinity.co/api/reveal/';
  
  // API key for the IP data service - should be kept secret
  const IP_DATA_API_KEY = '23eb22189e2a7d9f47d9fe36d43ee2fbd5fe49f5f1fa2ad8a2bf7016'; // Replace with your actual API key

  try {
    // Get the client IP using the IP data API service
    const ipResponse = await fetch(`https://api.ipdata.co?api-key=${IP_DATA_API_KEY}`);    
    
    if (ipResponse.status === 200) {
      const ipData = await ipResponse.json();
      const clientIp = ipData.ip;

      // Gather the data you want to send, including the client IP address
      const dataToSend = {
        href: window.location.href,
        ip: clientIp, // Assuming the API on your server side can accept this data.
      };
      
      // Send the data to your API endpoint using Fetch API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend),
      });
      
      if (!response.ok) {
       console.log('Network response was not ok');
      }
      
    

    } else {
      console.log(`something went wrong`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
})(window, document);
