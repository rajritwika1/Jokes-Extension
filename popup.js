document.getElementById('getJoke').addEventListener('click', () => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(response => response.json())
      .then(data => {
        document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
      })
      .catch(error => {
        document.getElementById('joke').innerText = 'Failed to fetch a joke.';
        console.error('Error fetching joke:', error);
      });
  });
  