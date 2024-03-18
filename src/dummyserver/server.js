import express from 'express'
const app = express();
const port = 3000;

// Define the /wait endpoint
app.get('/wait', (req, res) => {
  const waitTimeInSeconds = parseInt(req.query.seconds); // Retrieve the 'seconds' parameter from the query

  if (isNaN(waitTimeInSeconds) || waitTimeInSeconds <= 0) {
    // Invalid input
    return res.status(400).json({ error: 'Invalid input. Please provide a positive integer for seconds.' });
  }

  // Wait for the specified time (in milliseconds)
  setTimeout(() => {
    res.status(200).json({ message: `Waited for ${waitTimeInSeconds} seconds. Dummy response!` });
  }, waitTimeInSeconds * 1000);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
