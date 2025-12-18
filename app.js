const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
    res.send('Hello, 67024964 SE67 18122025!');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
