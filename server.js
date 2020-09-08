const express = require('express');
const app = express();

const PORT = process.env.Port || 3000;



app.get('/', (req, res) => {
    res.send('<h1>Elelection<h1>');
});







app.listen(PORT, () => console.log(`Server running on port ${PORT}`));