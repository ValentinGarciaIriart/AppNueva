const express = require('express');
const path = require('path');

const app = express();
const calculatorRouter = require('./routes/calculator');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/api', calculatorRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
