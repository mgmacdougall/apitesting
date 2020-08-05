const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const Lifts = require('./models/liftingSchema');
const liftRouter = require('./routes/liftRouter')(Lifts);

const app = express();
const PORT = process.env.PORT || 4040;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost/liftingAPI', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', liftRouter);

app.listen(PORT, () => {
	console.log(`App started on port: ${PORT}`);
});
