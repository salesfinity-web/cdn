(function(window){
    // Your API endpoint
    const API_URL = 'https://salesfinity.co/api/reveal/';
  
    // Gather the data you want to send
    const dataToSend = {
      href: window.location.href,
    };
  
    // Send the data using Fetch API
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend),
    })
    .then(response => {
      if(!response.ok) {
        console.error('Error:', error.message);
      }
      return response.json();
    })
    .then(data => {
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  
  })(window, document);